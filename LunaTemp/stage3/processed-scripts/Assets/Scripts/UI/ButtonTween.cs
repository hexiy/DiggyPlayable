using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using static UnityEngine.UI.Button;

[RequireComponent(typeof(CanvasGroup))]
[RequireComponent(typeof(Button))]
public class ButtonTween : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    [HideInInspector]
    public CanvasGroup CG;

    private float scaleSpeed = 20;

    private float scaleTarget = 0.9f;
    private Button _btn;
    public bool Clicked { get; set; }
    private bool _needToScale;
    private Vector3 _ogSize = Vector3.one;

    private ButtonClickedEvent _savedEvents;

    // [SerializeField]
    int _raycastPadding = 5;

    [SerializeField]
    bool _disabledColorIsNormalColor = true;

    private void Awake()
    {
        CG = GetComponent<CanvasGroup>();
        _btn = GetComponent<Button>();
        // _btn.image.raycastPadding = Vector4.one * -_raycastPadding;
        _ogSize = transform.localScale;

        // GetComponent<Button>()?.onClick.AddListener(() =>
        // {
        //     if (GetComponent<Button>().IsInteractable())
        //     {
        //         AudioController.I.GenericButtonClick();
        //     }
        //     else
        //     {
        //         AudioController.I.BlockedButtonClick();
        //     }
        // });
        var cb = _btn.colors;
        // cb.pressedColor = new Color(0.537f, 0.537f, 0.537f, 1);
        if (_disabledColorIsNormalColor)
        {
            cb.disabledColor = cb.normalColor;
        }

        cb.fadeDuration = 0.1f;
        _btn.colors = cb;
    }

    private void Update()
    {
        if (_needToScale == false) return;
        if (Clicked)
        {
            transform.localScale = Vector3.Lerp(transform.localScale, _ogSize * scaleTarget,
                Time.unscaledDeltaTime * scaleSpeed);
            if (transform.localScale == _ogSize * scaleTarget) _needToScale = false;
        }
        else
        {
            transform.localScale = Vector3.Lerp(transform.localScale, _ogSize, Time.unscaledDeltaTime * scaleSpeed);
            if (transform.localScale == _ogSize) _needToScale = false;
        }
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        if (_btn.interactable == false) return;
        Clicked = true;
        _needToScale = true;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        if (_btn.interactable == false)
        {
            transform.localScale = _ogSize;
            return;
        }

        transform.localScale = _ogSize * scaleTarget;

        Clicked = false;
        _needToScale = true;
    }
}