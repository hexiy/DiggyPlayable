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
            AudioController.I.PlayEndScreenClip();
            gameObject.SetActive(true);
            _cg.DOFade(0, 0);

            _cg.DOFade(1, 0.5f);

            _cg.interactable = true;
            _cg.blocksRaycasts = true;
            yield return new WaitForSeconds(0.5f);
        }
    }
}