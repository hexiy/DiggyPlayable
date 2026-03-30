using System;
using UnityEngine;
using UnityEngine.EventSystems;

namespace DiggyPlayable.WaterPipeGame
{
    public class PipeClickSensor : MonoBehaviour, IPointerClickHandler
    {
        public event Action OnClicked;

        public void OnPointerClick(PointerEventData eventData)
        {
            OnClicked?.Invoke();
        }
    }
}