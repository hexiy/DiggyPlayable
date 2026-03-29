using System;
using DG.Tweening;
using UnityEngine;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipe : MonoBehaviour
    {
        [SerializeField]
        private PipeClickSensor _clickSensor;

        [SerializeField]
        private Transform _pipeVisual;

        [SerializeField]
        private int _correctRotation;

        private int _currentRotation;

        /// <summary>
        /// Called when rotation animation ends
        /// </summary>
        public event Action OnRotated;

        public bool IsCorrectlyRotated => _currentRotation == _correctRotation;

        public bool IsRotatable { get; private set; }

        private void Awake()
        {
            _clickSensor.OnClicked += RotatePipe;
        }

        private void OnDestroy()
        {
            _clickSensor.OnClicked -= RotatePipe;
        }

        private void RotatePipe()
        {
            if (IsRotatable == false)
            {
                return;
            }

            _currentRotation = (_currentRotation + 90) % 360;
            var endRotation = Quaternion.Euler(0, 0, -_currentRotation);
            _pipeVisual.DOLocalRotateQuaternion(endRotation, 0.3f).OnComplete(() => OnRotated?.Invoke());
        }

        public void SetRandomRotation()
        {
            IsRotatable = true;
            _currentRotation = UnityEngine.Random.Range(0, 4) * 90;
            _pipeVisual.localRotation = Quaternion.Euler(0, 0, -_currentRotation);
        }

        public void SetImmovable()
        {
            IsRotatable = true;
        }
    }
}