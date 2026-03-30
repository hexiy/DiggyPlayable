using System;
using System.Collections;
using System.Linq;
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
        public SpriteRenderer Reward;

        [HideInInspector]
        public bool RewardCollected = false;

        [SerializeField]
        private int[] _correctRotations;

        private int _currentRotation;
        private bool _setRandomRotation = false;

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

            if (_setRandomRotation == false)
            {
                _currentRotation = (int)_pipeVisual.localEulerAngles.z % 360;
            }

            _clickSensor.OnClicked += RotatePipe;

            Reward.transform.SetParent(null);
            Reward.transform
                .DOBlendableMoveBy(
                    new Vector3(UnityEngine.Random.Range(-0.2f, -0.2f), UnityEngine.Random.Range(-0.2f, -0.2f), 0),
                    UnityEngine.Random.Range(3, 5))
                .SetDelay(UnityEngine.Random.Range(0f, 2f))
                .SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutQuad).SetTarget(Reward);


            OrientationManager.OnOrientationChanged += orientation =>
            {
                if (orientation == OrientationManager.Orientation.Landscape)
                {
                    Reward.transform.localEulerAngles = Vector3.zero;
                }
                else
                {
                    Reward.transform.localEulerAngles = new Vector3(0, 0, 90);
                }

                Reward.transform.Rotate(new Vector3(0, 0, UnityEngine.Random.Range(-30, 30)));
            };

            _defaultScale = Reward.transform.localScale;
        }

        private void OnDestroy()
        {
            _clickSensor.OnClicked -= RotatePipe;
        }

        private void RotatePipe()
        {
            // DoKill needs to be here, OnRotated can be called through DoKill and the game can be finished

            _pipeVisual.DOKill(true);

            if (IsRotatable == false)
            {
                return;
            }

            if (IsInputEnabled == false)
            {
                return;
            }


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

            if (_correctRotations.Contains(_currentRotation))
            {
                _currentRotation = (_currentRotation + 90) % 360;
            }


            _pipeVisual.localEulerAngles = new Vector3(0, 0, _currentRotation);
            _setRandomRotation = true;
        }

        // unused, all pipes are movable
        public void SetImmovable()
        {
            IsRotatable = false;
            IsInputEnabled = false;
        }


        public void SetEmpty()
        {
            DOTween.Kill(this);
            _waterMask.localPosition = _maskPositionEmpty;
            _waterMask.localScale = _maskScaleEmpty;
        }

        public IEnumerator PlayWaterFillUpAnimation(Ease ease, float duration = 0.3f)
        {
            // float duration = 0.3f;
            Vector3 newMaskPositionFull = _currentRotation == _correctRotations[0]
                ? _maskPositionFull
                : _maskPositionFull * new Vector2(-1, 1);

            _waterMask.DOLocalMove(newMaskPositionFull, duration).SetEase(ease).SetTarget(this);
            _waterMask.DOScale(_maskScaleFull, duration).SetEase(ease).SetTarget(this);

            Reward.DOFade(1, duration).SetDelay(duration)
                // .SetLoops(2, LoopType.Yoyo)
                .SetTarget(this);

            Reward.transform.localScale = _defaultScale;
            Reward.transform
                .DOPunchScale(
                    new Vector3(_defaultScale.x < 0 ? -0.3f : 0.3f, _defaultScale.y < 0 ? -0.3f : 0.3f, 0.3f),
                    0.4f, vibrato: 4).SetDelay(duration)
                .SetTarget(this);

            yield return new WaitForSeconds(duration);
        }

        public IEnumerator PlayWaterFillOutAnimation(Ease ease, float duration = 0.3f)
        {
            _waterMask.localScale = _maskScaleFull;
            _waterMask.localPosition = _maskPositionFull * new Vector2(-1, 1);


            Vector3 targetPosition = _maskPositionEmpty;

            _waterMask.DOLocalMove(targetPosition, duration).SetEase(ease).SetTarget(this);
            _waterMask.DOScale(_maskScaleEmpty, duration).SetEase(ease).SetTarget(this);

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