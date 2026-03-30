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

        [SerializeField]
        private DrowningTimer _timer;

        private bool _isSolved;

        private bool _isFinished = false;

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

        public IEnumerator StartGame()
        {
            Show();

            _timer.StartTicking();

            yield return WaitForSolved();

            _timer.Stop();

            yield return WaitForFinished();
        }

        public void Show()
        {
            ScramblePipes();

            _isSolved = false;
            _isFinished = false;
            _puzzlePanel.SetActive(true);
        }

        private void ScramblePipes()
        {
            return;
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

        public IEnumerator WaitForFinished()
        {
            yield return new WaitUntil(() => _isFinished);
        }

        private void OnPipeRotated()
        {
            if (CheckIfSolved())
            {
                OnSolved();
            }
        }

        private void OnSolved()
        {
            _isSolved = true;
            StartCoroutine(PlayWaterAnimation());
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
                ResetPipes_TestingOnly();
                OnSolved();
            }
        }

        private void ResetPipes_TestingOnly()
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

            yield return new WaitForSeconds(1);

            _isFinished = true;
        }
    }
}