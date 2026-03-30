using System;
using UnityEngine;

namespace DiggyPlayable
{
    public class DynamicElement_Position : MonoBehaviour
    {
        [SerializeField]
        private Transform _target;

        private void Awake()
        {
            OrientationManager.OnOrientationChanged += OnOrientationChanged;
        }


        private void OnDestroy()
        {
            OrientationManager.OnOrientationChanged -= OnOrientationChanged;
        }


        private void OnOrientationChanged(OrientationManager.Orientation obj)
        {
            transform.position = _target.position;
        }
    }
}