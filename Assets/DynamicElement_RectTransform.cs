using System;
using UnityEngine;

namespace DiggyPlayable
{
    public class DynamicElement_RectTransform : MonoBehaviour
    {
        [SerializeField]
        private RectTransform _target;

        [SerializeField]
        private RectTransform _rectTransform;

        private void Awake()
        {
            _rectTransform = GetComponent<RectTransform>();
            OrientationManager.OnOrientationChanged += OnOrientationChanged;
        }

        private void OnDestroy()
        {
            OrientationManager.OnOrientationChanged -= OnOrientationChanged;
        }

        private void OnOrientationChanged(OrientationManager.Orientation obj)
        {
            _rectTransform.anchoredPosition = _target.anchoredPosition;
        }
    }
}