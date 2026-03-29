using System;
using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipeGameView : MonoBehaviour
    {
        [SerializeField]
        private GameObject _puzzlePanel;

        [SerializeField]
        private WaterPipe[] _pipes;

        [SerializeField]
        private Transform _water;

        private bool _isSolved;

        private void Awake()
        {
            foreach (var pipe in _pipes)
            {
                pipe.OnRotated += OnPipeRotated;
            }
        }


        private void OnDestroy()
        {
            foreach (var pipe in _pipes)
            {
                pipe.OnRotated -= OnPipeRotated;
            }
        }

        public void Show()
        {
            ScramblePipes();

            _isSolved = false;
            _puzzlePanel.SetActive(true);
        }

        private void ScramblePipes()
        {
            // todo random rotations only for 3-4 pipes
            foreach (var pipe in _pipes)
            {
                pipe.SetRandomRotation();
            }
        }

        public IEnumerator WaitForSolved()
        {
            yield return new WaitUntil(() => _isSolved);
        }

        private void OnPipeRotated()
        {
            if (CheckIfSolved())
            {
                _isSolved = true;
                StartCoroutine(PlayWaterAnimation());
            }
        }

        private bool CheckIfSolved()
        {
            foreach (var pipe in _pipes)
            {
                if (!pipe.IsCorrectlyRotated)
                {
                    return false;
                }
            }

            return true;
        }

        private void Update()
        {
            // testing only
            if (Input.GetKeyDown(KeyCode.Space))
            {
                ResetPipes();
                StartCoroutine(PlayWaterAnimation());
            }
        }

        private void ResetPipes()
        {
            foreach (var pipe in _pipes)
            {
                pipe.SetEmpty();
            }
        }


        [Header("Animation testing")]
        [SerializeField]
        private Ease _ease;

        [SerializeField]
        private float _duration;


        private void ResetWater()
        {
            _water.DOKill(true);
            _water.localScale = new Vector3(_water.localScale.x, 4.446384f, _water.localScale.z);
        }

        private IEnumerator PlayWaterAnimation()
        {
            ResetWater();

            _water.DOScaleY(0.54f, _duration * _pipes.Length).SetEase(Ease.Flash).SetTarget(_water);
            foreach (WaterPipe pipe in _pipes)
            {
                yield return pipe.DoWaterAnimation(_ease, _duration);
            }

            foreach (WaterPipe pipe in _pipes)
            {
                // pipe._checkmark
                // fly it to the chest
            }
        }
    }
}