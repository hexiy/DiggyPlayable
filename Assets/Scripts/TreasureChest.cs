using System;
using DG.Tweening;
using DiggyPlayable;
using UnityEngine;

public class TreasureChest : MonoBehaviour
{
    [SerializeField]
    private SpriteRenderer _chest;

    [SerializeField]
    private SpriteRenderer _lock;

    [SerializeField]
    private OrientationManager.Orientation _orientation;

    private void Awake()
    {
        _chest.color = new Color(0.36f, 0.36f, 0.36f, 1);
    }

    public void PlayUnlockAnimation()
    {
        _chest.DOColor(Color.white, 0.7f);
        _lock.transform.DOPunchScale(Vector3.one * 0.04f, 0.5f, vibrato: 3);
        _chest.transform.DOPunchScale(Vector3.one * 0.02f, 0.7f, vibrato: 3);
        _chest.transform.DOPunchPosition(
            (_orientation is OrientationManager.Orientation.Landscape ? new Vector3(0, 1, 0) : new Vector3(-1, 0, 0)) *
            0.3f, 0.3f, 1, 0.3f);

        _lock.DOFade(0, 0.7f).SetDelay(0.4f);
    }
}