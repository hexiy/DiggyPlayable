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
    private AudioClip _musicAudioClip;

    [SerializeField]
    private AudioSource _audioSource;

    public float MusicVolume { get; private set; } = 0.1f;
    public float SoundVolume { get; private set; } = 0.18f;


    [SerializeField]
    private AudioClip _pipeClickClip;

    void Awake()
    {
        I = this;
    }


    private void Start()
    {
        PlayMusic();

        _audioSource.volume = SoundVolume;
    }

    private void PlayMusic()
    {
        _musicSource.clip = _musicAudioClip;

        _musicSource.volume = 0f;
        _musicSource.DOFade(MusicVolume, 0.5f).SetUpdate(true);

        _musicSource.Play();
    }

    public void GenericButtonC()
    {
        _audioSource.PlayOneShot(_pipeClickClip);
    }
    public void PipeClick()
    {
        _audioSource.PlayOneShot(_pipeClickClip);
    }

    public void Win()
    {
        // _audioSource.PlayOneShot(_uiAudioClips.LevelEnd);
    }
}