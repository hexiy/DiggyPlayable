using System.Collections;
using UnityEngine;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipeGameView : MonoBehaviour
    {
        [SerializeField]
        private GameObject _puzzlePanel;

        [SerializeField]
        private WaterPipe[] _pipes;

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
            _isSolved = false;
            _puzzlePanel.SetActive(true);

            ScramblePipes();
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
                PlayWaterAnimation();
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

        private void PlayWaterAnimation()
        {
        }
    }
}