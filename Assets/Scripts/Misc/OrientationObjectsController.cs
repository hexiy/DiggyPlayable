using System;
using DiggyPlayable;
using UnityEngine;

namespace DiggyPlayable
{
    public class OrientationObjectsController : MonoBehaviour
    {
        [SerializeField]
        private GameObject[] _landscapeObjects;

        [SerializeField]
        private GameObject[] _portraitObjects;

        private void Awake()
        {
            OrientationManager.OnOrientationChanged += OnOrientationChanged;
        }

        private void OnDestroy()
        {
            OrientationManager.OnOrientationChanged -= OnOrientationChanged;
        }

        private void OnOrientationChanged(OrientationManager.Orientation orientation)
        {
            foreach (GameObject landscapeObject in _landscapeObjects)
            {
                landscapeObject.gameObject.SetActive(orientation is OrientationManager.Orientation.Landscape);
            }

            foreach (GameObject portraitObject in _portraitObjects)
            {
                portraitObject.gameObject.SetActive(orientation is OrientationManager.Orientation.Portrait);
            }
        }
    }
}