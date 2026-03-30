using DG.Tweening;
using DiggyPlayable.WaterPipeGame;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class DrowningTimer : MonoBehaviour
{
    public float TimeLeft { get; private set; }
    public float MaxTime { get; } = 20f;
    public bool IsRunning { get; set; }

    [SerializeField]
    private Image _timerFill;


    public void StartTicking()
    {
        TimeLeft = MaxTime;
        IsRunning = true;
    }

    public void Stop()
    {
        IsRunning = false;
        transform.DOScale(Vector3.zero, 0.4f).SetEase(Ease.InOutQuad).OnComplete(() => gameObject.SetActive(false));
    }

    private void Update()
    {
        if (IsRunning && TimeLeft > 0)
        {
            TimeLeft -= Time.deltaTime;
            if (TimeLeft <= 0)
            {
                TimeLeft = MaxTime;
            }
        }

        var normalized = TimeLeft / MaxTime;
        _timerFill.fillAmount = normalized;
    }
}