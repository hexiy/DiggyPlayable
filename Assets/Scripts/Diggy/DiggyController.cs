using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Spine.Unity;
using UnityEngine;

namespace DiggyPlayable
{
    public class DiggyController : MonoBehaviour
    {
        [SerializeField]
        private Transform _diggy;


        private DiggyAnimationController _animationController;

        [SerializeField]
        private Vector2 _positionTopLandscape;

        [SerializeField]
        private Vector2 _positionTopPortrait;

        [SerializeField]
        private Vector2 _positionBottomLandscape;

        [SerializeField]
        private Vector2 _positionBottomPortrait;

        private OrientationManager.Orientation _currentOrientation;
        private bool _isSinking = false;


        private void Awake()
        {
            _animationController = GetComponent<DiggyAnimationController>();
            OrientationManager.OnOrientationChanged += OnOrientationChanged;
        }

        private void OnOrientationChanged(OrientationManager.Orientation orientation)
        {
            _currentOrientation = orientation;

            _diggy.localEulerAngles =
                new Vector3(0, 0, orientation == OrientationManager.Orientation.Landscape ? 0 : 90);

            if (_isSinking == false)
            {
                _diggy.localPosition = orientation == OrientationManager.Orientation.Landscape
                    ? _positionTopLandscape
                    : _positionTopPortrait;
            }
        }

        public void GoDownWithWater(float duration)
        {
            _isSinking = true;

            if (_currentOrientation == OrientationManager.Orientation.Landscape)
            {
                _diggy.DOLocalMoveY(_positionBottomLandscape.y, duration);
            }
            else
            {
                _diggy.DOLocalMoveX(_positionBottomPortrait.x, duration);
            }

            DOVirtual.DelayedCall(duration - 0.2f, () => { _animationController.PlayIdle(); });
        }
    }
}