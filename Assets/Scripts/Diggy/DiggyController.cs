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

        private void Awake()
        {
            _animationController = GetComponent<DiggyAnimationController>();
        }

        public IEnumerator Anim_PlayIdle()
        {
            // Play();
            yield return new WaitForSeconds(2f);
        }

        public IEnumerator Anim_FallIntoHole()
        {
            // Play();
            yield return new WaitForSeconds(2f);
        }
    }
}