using System;
using System.Collections;
using DiggyPlayable.EndScreen;
using DiggyPlayable.WaterPipeGame;
using UnityEngine;

namespace DiggyPlayable
{
    public class GameController
    {
        private WaterPipeGameView _waterPipeGame;

        public GameController(WaterPipeGameView waterPipeGame)
        {
            _waterPipeGame = waterPipeGame;
        }

        public IEnumerator StartPlayable()
        {
            yield return _waterPipeGame.StartGame();
        }
    }
}