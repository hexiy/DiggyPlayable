using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;
using Random = System.Random;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipeGameView : MonoBehaviour
    {
        [SerializeField]
        private GameObject _puzzlePanel;

        [SerializeField]
        private TutorialController _tutorialController;

        [SerializeField]
        private DiggyController _diggyController;

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
        private CanvasGroup _collectRewardsHintHandCG;

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

            // find pipe to rotate
            for (int i = 0; i < _pipes.Length; i++)
            {
                if (_pipes[i].HasSetRandomRotation)
                {
                    _tutorialController.ShowHand(_pipes[i].transform.position);
                    int rotation = _pipes[i].CurrentRotation;
                    yield return new WaitUntil(() => rotation != _pipes[i].CurrentRotation);

                    AudioController.I.PlayMusic(); // can only play music after first interaction

                    _tutorialController.HideHand();

                    break;
                }
            }


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

            _collectRewardsHintCG.alpha = 0;
            _collectRewardsHintCG.gameObject.SetActive(true);

            _collectRewardsHintCG.DOFade(1, 0.5f);

            // _collectRewardsHintHand.DOMoveX(_collectRewardsHintHand.anchoredPosition.x + 100, 2f)
            //     .SetLoops(-1, LoopType.Yoyo).OnStepComplete(() =>
            //     {
            //         _collectRewardsHintHandImage.DOFade(0, 0.5f).SetLoops(2, LoopType.Yoyo);
            //     });
            float startX = _collectRewardsHintHand.anchoredPosition.x;
            float endX = startX + 400f;

            Sequence handSequence = DOTween.Sequence();

            handSequence.Append(_collectRewardsHintHand.DOAnchorPosX(endX, 1.5f).SetEase(Ease.InOutQuad));

            handSequence.Append(_collectRewardsHintHandCG.DOFade(0, 0.1f));
            handSequence.AppendCallback(() =>
            {
                _collectRewardsHintHand.anchoredPosition =
                    new Vector2(startX, _collectRewardsHintHand.anchoredPosition.y);
            });
            handSequence.Append(_collectRewardsHintHandCG.DOFade(1, 0.1f));

            handSequence.SetLoops(-1);

            yield return new WaitForSeconds(0.5f);
        }

        private bool _clicked = false;

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
                    _clicked = true;
                    _collectRewardsHintCG.DOKill(false);
                    _collectRewardsHintCG.DOFade(0, 0.2f);

                    if (_fillingOutPipes == false)
                    {
                        _fillingOutPipes = true;
                        StartCoroutine(FillOutPipes());
                    }
                }

                if (Input.GetMouseButton(0) && _clicked)
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
            AudioController.I.PlayRewardCollect();

            pipe.RewardCollected = true;
            reward.transform.DOKill();

            reward.transform.DOMove(ActiveTreasureChest.transform.position, 0.3f)
                .SetEase(Ease.InBack)
                .OnComplete(() =>
                {
                    AudioController.I.PlayRewardTouchChestClip();
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
            // todo random rotations only for 5 pipes
            List<int> _rotatedPipes = new List<int>();
            for (int i = 0; i < 5; i++)
            {
                int pipeIndex =
                    UnityEngine.Random.Range(1, _pipes.Length - 1); // -1 because the last one might not be visible...
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
            if (_isSolved)
            {
                return;
            }

            if (CheckIfSolved())
            {
                OnSolved();
            }
        }

        private void OnSolved()
        {
            _isSolved = true;
            DisablePipesInput();
            AudioController.I.PlayWin();
            StartCoroutine(PlayWaterFillUpAnimation());
        }

        private bool CheckIfSolved()
        {
            foreach (var pipe in _pipes)
            {
                if (!pipe.IsCorrectlyRotated)
                {
                    // Debug.Log("this one is not correct", pipe.gameObject);
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
            _waterLandscape.DOScaleY(-0.15f, 1.2f).SetRelative().SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine)
                .SetTarget(_waterLandscape);

            _waterPortrait.DOKill(true);
            _waterPortrait.localScale =
                new Vector3(_waterPortrait.localScale.x, 3.8f, _waterPortrait.localScale.z);

            _waterPortrait.DOScaleY(-0.15f, 1.2f).SetRelative().SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine)
                .SetTarget(_waterPortrait);
        }

        private IEnumerator PlayWaterFillUpAnimation()
        {
            AudioController.I.PlayPipesWaterSounds();
            ResetWater();

            _waterLandscape.DOKill(false);
            _waterPortrait.DOKill(false);


            _waterLandscape.DOScaleY(0.54f, _duration * _pipes.Length).SetEase(Ease.Flash).SetTarget(_waterLandscape);
            _waterPortrait.DOScaleY(0f, _duration * _pipes.Length).SetEase(Ease.Flash).SetTarget(_waterPortrait);
            _diggyController.GoDownWithWater(_duration * _pipes.Length);

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
                yield return pipe.PlayWaterFillOutAnimation(_ease, _duration * 2f);
            }
        }
    }
}