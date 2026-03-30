using System;
using System.Collections;
using DG.Tweening;
using UnityEngine;
using Random = System.Random;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipe : MonoBehaviour
    {
        [SerializeField]
        // if is long -------- , 2 rotations are correct
        private bool _isLong = false;

        [SerializeField]
        private PipeClickSensor _clickSensor;

        [SerializeField]
        private Transform _pipeVisual;

        [SerializeField]
        public SpriteRenderer _checkmark;

        [SerializeField]
        private int[] _correctRotations;

        private int _currentRotation;

        /// <summary>
        /// Called when rotation animation ends
        /// </summary>
        public event Action OnRotated;

        public bool IsCorrectlyRotated => _correctRotations.Length > 0 && _correctRotations[0] == _currentRotation ||
                                          _correctRotations.Length > 1 && _correctRotations[1] == _currentRotation;

        public bool IsRotatable { get; private set; } = true;
        public bool IsInputEnabled { get; set; } = true;
        private Vector3 _defaultScale;

        [SerializeField]
        private Vector2 _maskPositionEmpty;

        [SerializeField]
        private Vector2 _maskScaleEmpty;

        [SerializeField]
        private Vector2 _maskPositionFull;

        [SerializeField]
        private Vector2 _maskScaleFull;

        [SerializeField]
        private Transform _waterMask;

        [SerializeField]
        private bool _waterRunsOtherWay = false;

        private void Awake()
        {
            if (_waterRunsOtherWay)
            {
                _maskPositionFull = new Vector2(-_maskPositionFull.x, _maskPositionFull.y);
            }

            _currentRotation = (int)transform.localEulerAngles.z % 360;
            _clickSensor.OnClicked += RotatePipe;

            _checkmark.transform
                .DOBlendableMoveBy(
                    new Vector3(UnityEngine.Random.Range(-0.2f, -0.2f), UnityEngine.Random.Range(-0.2f, -0.2f), 0),
                    UnityEngine.Random.Range(3, 5))
                .SetDelay(UnityEngine.Random.Range(0f, 2f))
                .SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutQuad).SetTarget(_checkmark);

            _checkmark.transform.Rotate(new Vector3(0, 0, UnityEngine.Random.Range(-30, 30)));

            _defaultScale = _checkmark.transform.localScale;
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

            if (IsInputEnabled == false)
            {
                return;
            }

            _pipeVisual.DOKill(true);

            _pipeVisual.DOLocalRotate(new Vector3(0, 0, -90), 0.3f, RotateMode.LocalAxisAdd)
                .OnComplete(() =>
                {
                    int currentZ = (int)_pipeVisual.localEulerAngles.z;
                    _currentRotation = currentZ % 360;
                    if (_currentRotation < 0) _currentRotation += 360;

                    _pipeVisual.localEulerAngles = new Vector3(0, 0, _currentRotation);

                    OnRotated?.Invoke();
                });
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


        public void SetEmpty()
        {
            DOTween.Kill(this);
            _waterMask.localPosition = _maskPositionEmpty;
            _waterMask.localScale = _maskScaleEmpty;
        }

        public IEnumerator DoWaterAnimation(Ease ease, float duration = 0.3f)
        {
            // float duration = 0.3f;
            Vector3 newMaskPositionFull = _currentRotation == _correctRotations[0]
                ? _maskPositionFull
                : _maskPositionFull * new Vector2(-1, 1);

            _waterMask.DOLocalMove(newMaskPositionFull, duration).SetEase(ease).SetTarget(this);
            _waterMask.DOScale(_maskScaleFull, duration).SetEase(ease).SetTarget(this);
            _checkmark.DOFade(1, duration).SetDelay(duration)
                // .SetLoops(2, LoopType.Yoyo)
                .SetTarget(this);

            _checkmark.transform.localScale = _defaultScale;
            _checkmark.transform
                .DOPunchScale(new Vector3(_defaultScale.x < 0 ? -0.3f : 0.3f, _defaultScale.y < 0 ? -0.3f : 0.3f, 0.3f),
                    0.4f, vibrato: 4).SetDelay(duration)
                .SetTarget(this);
            yield return new WaitForSeconds(duration);
        }

        [ContextMenu("SetCorrectRotationToCurrent")]
        public void SetCorrectRotationToCurrent()
        {
            if (_isLong == false)
            {
                _correctRotations = new int[] { (int)_pipeVisual.localEulerAngles.z };
            }
            else
            {
                _correctRotations = new int[]
                {
                    (int)_pipeVisual.localEulerAngles.z,
                    ((int)_pipeVisual.localEulerAngles.z + 180) % 360
                };
            }
        }
    }
}