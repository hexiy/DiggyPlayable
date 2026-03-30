using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Random = UnityEngine.Random;

public class AudioController : MonoBehaviour
{
    public static AudioController I { get; private set; }

    [SerializeField]
    private AudioSource _musicSource;

    [SerializeField]
    private AudioSource _soundSource;

    [SerializeField]
    private AudioSource _soundSource2;

    public float MusicVolume { get; private set; } = 0.1f;
    public float SoundVolume { get; private set; } = 1f;


    [Header("Clips")]
    [SerializeField]
    private AudioClip _musicClip;

    [SerializeField]
    private AudioClip _pipeClickClip;

    [SerializeField]
    private AudioClip _pipesFinishedWinClip;

    [SerializeField]
    private AudioClip _waterFlowClip;

    [SerializeField]
    private AudioClip _rewardRevealClip;

    [SerializeField]
    private AudioClip _rewardCollectClip;

    [SerializeField]
    private AudioClip _endScreenClip;
    
    [SerializeField]
    private AudioClip _rewardTouchChestClip;

    void Awake()
    {
        I = this;
    }


    private void Start()
    {
        PlayMusic();

        _soundSource.volume = SoundVolume;
        _soundSource2.volume = SoundVolume;
    }

    private void PlayMusic()
    {
        _musicSource.clip = _musicClip;
        _musicSource.loop = true;
        _musicSource.volume = 0f;
        _musicSource.DOFade(MusicVolume, 0.5f).SetUpdate(true);

        _musicSource.Play();
    }

    public void GenericButtonClick()
    {
        _soundSource.PlayOneShot(_pipeClickClip);
    }

    public void PipeClick()
    {
        _soundSource.pitch = Random.Range(0.7f, 1.8f);
        _soundSource.PlayOneShot(_pipeClickClip);
    }

    public void PlayPipesWaterSounds()
    {
        _soundSource2.loop = true;
        _soundSource2.clip = _waterFlowClip;
        _soundSource2.volume = SoundVolume * 0.3f;
        _soundSource2.Play((ulong)0.3);
        _soundSource2.DOFade(_soundSource2.volume * 0.8f, 0.5f).SetDelay(1).SetUpdate(true);

        DOVirtual.DelayedCall(3f, () => { _soundSource2.Stop(); });
    }

    public void PlayWin()
    {
        _soundSource.pitch = Random.Range(1f, 1.2f);

        _soundSource.PlayOneShot(_pipesFinishedWinClip);
    }

    public void PlayRewardCollect()
    {
        _soundSource.pitch = Random.Range(0.85f, 1.2f);

        _soundSource.PlayOneShot(_rewardCollectClip);
    }

    public void PlayRewardTouchChestClip()
    {
        _soundSource.pitch = Random.Range(0.85f, 1.2f);

        _soundSource.PlayOneShot(_rewardTouchChestClip);
    }

    public void PlayEndScreenClip()
    {
        _soundSource.PlayOneShot(_endScreenClip);
    }
}