using System;
using System.Collections;
using DiggyPlayable.WaterPipeGame;
using UnityEngine;

namespace DiggyPlayable
{
    public class GameController
    {
        private DiggyController _diggy;
        private WaterPipeGameController _waterPipeGame;
        private TreasureClickSensor _treasureClickSensor;

        public GameController(DiggyController diggyController, WaterPipeGameController waterPipeGameController,
            TreasureClickSensor treasureClickSensor)
        {
            _diggy = diggyController;
            _waterPipeGame = waterPipeGameController;
            _treasureClickSensor = treasureClickSensor;
        }

        public IEnumerator StartPlayable()
        {
            yield return _diggy.Anim_PlayIdle();

            yield return WaitForTreasureClick();

            yield return _diggy.Anim_FallIntoHole();

            yield return _waterPipeGame.StartGame();
        }

        private IEnumerator WaitForTreasureClick()
        {
            var hasClicked = false;
            Action handleTouch = () => hasClicked = true;

            _treasureClickSensor.OnClicked += handleTouch;

            Debug.Log("waiting for treasure tap");
            while (!hasClicked)
            {
                yield return null;
            }

            _treasureClickSensor.OnClicked -= handleTouch;
        }
    }
}