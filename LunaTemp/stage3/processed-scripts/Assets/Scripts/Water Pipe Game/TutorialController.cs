using DG.Tweening;
using UnityEngine;

public class TutorialController : MonoBehaviour
{
    [SerializeField]
    private SpriteRenderer _tutorialHand;

    public void ShowHand([Bridge.Ref] Vector3 position)
    {
        _tutorialHand.transform.position = position;
        _tutorialHand.gameObject.SetActive(true);

        _tutorialHand.DOFade(0, 0);
        _tutorialHand.DOFade(1, 0.4f)
            .OnComplete(() => { _tutorialHand.DOFade(0.5f, 0.7f).SetLoops(-1, LoopType.Yoyo); });
    }

    public void HideHand()
    {
        _tutorialHand.DOKill(false);
        _tutorialHand.DOFade(0, 0.4f);
    }
}