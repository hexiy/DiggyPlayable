using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

namespace DiggyPlayable
{
    public class DiggyAnimationController : MonoBehaviour
    {
        [SerializeField]
        private SkeletonAnimation spine;

        [SerializeField]
        private bool _showPreview = false;

        [SpineAnimation(dataField = "spine")]
        [SerializeField]
        private string _previewAnimation;

        private string _oldPreviewAnimation;

        private readonly string _drowningAnimation = "Dragging_front";
        private readonly string _walkNormalAnimation = "Walk_side_normal";
        private readonly string _walkFastAnimation = "Walk_side_fast";
        private readonly string _idleAnimation = "Idle_normal_02";

        private List<string> _allAnimations = new List<string>();


        public void Play(string animation, bool loop = false)
        {
            spine.AnimationState.SetAnimation(0, animation, loop);
        }

        private void Awake()
        {
            spine.SkeletonDataAsset.GetAnimationStateData().SkeletonData.Animations.ForEach(animation =>
            {
                _allAnimations.Add(animation.Name);
            });
        }

        private void Update()
        {
            if (_oldPreviewAnimation != _previewAnimation && _showPreview)
            {
                Play(_previewAnimation, true);
                _oldPreviewAnimation = _previewAnimation;
            }
        }
    }
}