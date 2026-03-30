using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using Random = System.Random;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipeGameView : MonoBehaviour
    {
        [SerializeField]
        private GameObject _puzzlePanel;

        [SerializeField]
        private WaterPipe[] _pipes;

        [SerializeField]
        private Transform _waterLandscape;

        [SerializeField]
        private Transform _waterPortrait;

        [SerializeField]
        private DrowningTimer _timer;

        private bool _isSolved;

        private bool _isWaterFillUpAnimationFinished = false;

        private bool _canCollectRewards = false;

        [SerializeField]
        private CanvasGroup _collectRewardsHintCG;

        [SerializeField]
        private SpriteRenderer _collectRewardsBackgroundTint;

        [SerializeField]
        private RectTransform _collectRewardsHintHand;


        [SerializeField]
        private TreasureChest _treasureChest_Landscape;

        [SerializeField]
        private TreasureChest _treasureChest_Portrait;

        private TreasureChest ActiveTreasureChest => _treasureChest_Landscape.gameObject.activeSelf
            ? _treasureChest_Landscape
            : _treasureChest_Portrait;

        private bool _fillingOutPipes = false;

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


            yield return WaitForWaterFillUpAnimationFinished();

            _treasureChest_Landscape.PlayUnlockAnimation();
            _treasureChest_Portrait.PlayUnlockAnimation();

            yield return new WaitForSeconds(1);

            yield return ShowRewardCollectionHint();

            yield return WaitForRewardsCollected();

            // show some treasure animation idk
        }

        private IEnumerator ShowRewardCollectionHint()
        {
            _canCollectRewards = true;
            // _collectRewardsBackgroundTint.DOFade(0, 0);
            // _collectRewardsBackgroundTint.DOFade(0.92f, 0.5f);

            _collectRewardsHintCG.gameObject.SetActive(true);
            _collectRewardsHintCG.DOFade(0, 0);

            _collectRewardsHintCG.DOFade(1, 0.5f);

            yield return new WaitForSeconds(0.5f);
        }

        public IEnumerator WaitForRewardsCollected()
        {
            int rewardsToCollect = 0;

            foreach (WaterPipe pipe in _pipes)
            {
                if (pipe.Reward.gameObject.activeSelf)
                {
                    rewardsToCollect++;
                }
            }

            int rewardsCollected = 0;
            while (rewardsCollected < rewardsToCollect)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    _collectRewardsHintCG.DOKill(false);
                    _collectRewardsHintCG.DOFade(0, 0.2f);

                    if (_fillingOutPipes == false)
                    {
                        _fillingOutPipes = true;
                        StartCoroutine(FillOutPipes());
                    }
                }

                if (Input.GetMouseButton(0))
                {
                    // check distance from  rewards;
                    Vector3 touchWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
                    touchWorldPos.z = 0;

                    foreach (var pipe in _pipes)
                    {
                        if (pipe.Reward.gameObject.activeSelf && pipe.RewardCollected == false)
                        {
                            float distance = Vector3.Distance(touchWorldPos, pipe.Reward.transform.position);
                            if (distance < 3f)
                            {
                                CollectReward(pipe, pipe.Reward.transform);
                                rewardsCollected++;
                            }
                        }
                    }
                }

                yield return null;
            }
        }

        private void CollectReward(WaterPipe pipe, Transform reward)
        {
            pipe.RewardCollected = true;
            reward.transform.DOKill();

            reward.transform.DOMove(ActiveTreasureChest.transform.position, 0.3f)
                .SetEase(Ease.InBack)
                .OnComplete(() =>
                {
                    pipe.Reward.DOFade(0, 0.1f);
                    ActiveTreasureChest.transform.DOKill(true);
                    ActiveTreasureChest.transform
                        .DOPunchScale(Vector3.one * 0.05f * UnityEngine.Random.Range(0.8f, 1.5f), 0.3f, vibrato: 3)
                        .SetEase(Ease.InOutQuad);
                    ActiveTreasureChest.transform
                        .DOPunchRotation(new Vector3(0, 0, UnityEngine.Random.Range(-15, 15)), 0.3f, vibrato: 3)
                        .SetEase(Ease.InOutQuad);
                });

            reward.transform.DOPunchScale(Vector3.one * 0.2f, 0.2f, vibrato: 3).OnComplete(() =>
            {
                reward.transform.DOScale(Vector3.zero, 0.3f).SetEase(Ease.InBack);
            });
        }


        private void DisablePipesInput()
        {
            foreach (var pipe in _pipes)
            {
                pipe.IsInputEnabled = false;
            }
        }

        public void Show()
        {
            ResetWater();
            ScramblePipes();

            _isSolved = false;
            _isWaterFillUpAnimationFinished = false;
            _puzzlePanel.SetActive(true);
        }

        private void ScramblePipes()
        {
            // todo random rotations only for 3-4 pipes
            List<int> _rotatedPipes = new List<int>();
            for (int i = 0; i < 4; i++)
            {
                int pipeIndex = UnityEngine.Random.Range(0, _pipes.Length);
                if (_rotatedPipes.Contains(pipeIndex))
                {
                    i--;
                    continue;
                }

                _pipes[pipeIndex].SetRandomRotation();
                _rotatedPipes.Add(pipeIndex);
            }
        }

        public IEnumerator WaitForSolved()
        {
            yield return new WaitUntil(() => _isSolved);
        }

        public IEnumerator WaitForWaterFillUpAnimationFinished()
        {
            yield return new WaitUntil(() => _isWaterFillUpAnimationFinished);
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
            DisablePipesInput();
            StartCoroutine(PlayWaterFillUpAnimation());
        }

        private bool CheckIfSolved()
        {
            foreach (var pipe in _pipes)
            {
                if (!pipe.IsCorrectlyRotated)
                {
                    Debug.Log("this one is not correct", pipe.gameObject);
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
            _waterLandscape.DOKill(true);
            _waterLandscape.localScale =
                new Vector3(_waterLandscape.localScale.x, 4.446384f, _waterLandscape.localScale.z);

            _waterPortrait.DOKill(true);
            _waterPortrait.localScale =
                new Vector3(_waterPortrait.localScale.x, 4.446384f, _waterPortrait.localScale.z);
        }

        private IEnumerator PlayWaterFillUpAnimation()
        {
            ResetWater();

            _waterLandscape.DOScaleY(0.54f, _duration * _pipes.Length).SetEase(Ease.Flash).SetTarget(_waterLandscape);
            _waterPortrait.DOScaleY(0f, _duration * _pipes.Length).SetEase(Ease.Flash).SetTarget(_waterPortrait);

            for (int i = 0; i < _pipes.Length; i++)
            {
                yield return _pipes[i].PlayWaterFillUpAnimation(_ease, _duration);

                if (i / (_pipes.Length - 1) >= 0.6)
                {
                    _isWaterFillUpAnimationFinished = true;
                }
            }
        }

        private IEnumerator FillOutPipes()
        {
            foreach (WaterPipe pipe in _pipes)
            {
                yield return pipe.PlayWaterFillOutAnimation(_ease, _duration * 0.5f);
            }
        }
    }
}