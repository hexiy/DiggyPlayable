using DiggyPlayable.EndScreen;
using DiggyPlayable.WaterPipeGame;
using UnityEngine;

namespace DiggyPlayable
{
    public class GameEntry : MonoBehaviour
    {
        [Header("Scene References")]
        [SerializeField]
        private DiggyController _diggyController;

        [SerializeField]
        private WaterPipeGameView _pipeGameView;

        [SerializeField]
        private EndScreenView _endScreenView;

        [SerializeField]
        private DrowningTimer _drowningTimer;

        private GameController _game;

        private void Awake()
        {
            _game = new GameController(
                _pipeGameView,
                _endScreenView
            );
        }

        private void Start()
        {
            StartCoroutine(_game.StartPlayable());
        }
    }
}