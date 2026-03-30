using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

namespace DiggyPlayable
{
    public class DiggyController : MonoBehaviour
    {
        private DiggyAnimationController _animationController;

        [SerializeField]
        private Transform _positionTop;
        [SerializeField]
        private Transform _positionBottom;
        
        
        private void Awake()
        {
            _animationController = GetComponent<DiggyAnimationController>();
        }
    }
}