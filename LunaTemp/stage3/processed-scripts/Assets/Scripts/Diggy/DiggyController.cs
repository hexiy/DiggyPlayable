using System.Collections;
using Spine.Unity;
using UnityEngine;

namespace DiggyPlayable
{
    public class DiggyController : MonoBehaviour
    {
        [SerializeField]
        private SkeletonAnimation spine;

        public void Play(string animation, bool loop = false)
        {
            spine.AnimationState.SetAnimation(0, animation, loop);
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