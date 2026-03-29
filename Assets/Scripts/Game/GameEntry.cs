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
        private TreasureClickSensor _treasureImageSensor;

        [SerializeField]
        private DrowningTimer _drowningTimer;

        private GameController _game;

        private void Awake()
        {
            var waterPipeGameController = new WaterPipeGameController(
                _pipeGameView,
                _drowningTimer
            );

            _game = new GameController(
                _diggyController,
                waterPipeGameController,
                _treasureImageSensor
            );
        }

        private void Start()
        {
            StartCoroutine(_game.StartPlayable());
        }
    }
}