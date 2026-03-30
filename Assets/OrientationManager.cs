using System;
using UnityEngine;

namespace DiggyPlayable
{
    public class OrientationManager : MonoBehaviour
    {
        public enum Orientation
        {
            Landscape,
            Portrait
        }

        public static Action<Orientation> OnOrientationChanged = (orientation) => { };
        private bool _isLandscape = true;
        private int _lastWidth;
        private int _lastHeight;

        void Awake()
        {
            CheckOrientation();
        }

        void Update()
        {
            CheckOrientation();
        }

        private void CheckOrientation()
        {
            if (Screen.width != _lastWidth || Screen.height != _lastHeight)
            {
                _lastWidth = Screen.width;
                _lastHeight = Screen.height;

                bool currentlyIsLandscape = Screen.width > Screen.height;

                if (currentlyIsLandscape != _isLandscape)
                {
                    _isLandscape = currentlyIsLandscape;
                    OnOrientationChanged?.Invoke(_isLandscape ? Orientation.Landscape : Orientation.Portrait);
                }
            }
        }
    }
}