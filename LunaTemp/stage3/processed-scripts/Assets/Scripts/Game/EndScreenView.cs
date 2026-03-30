using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace DiggyPlayable.EndScreen
{
    public class EndScreenView : MonoBehaviour
    {
        [SerializeField]
        private CanvasGroup _cg;
        
        public IEnumerator Show()
        {
            _cg.alpha = 0;

            _cg.DOFade(1, 0.5f);
            AudioController.I.PlayEndScreenClip();

            _cg.interactable = true;
            _cg.blocksRaycasts = true;
            yield return new WaitForSeconds(0.5f);
        }
    }
}