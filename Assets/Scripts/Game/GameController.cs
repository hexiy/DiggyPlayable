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
        private EndScreenView _endScreenView;

        public GameController(WaterPipeGameView waterPipeGame, EndScreenView endScreenView)
        {
            _waterPipeGame = waterPipeGame;
            _endScreenView = endScreenView;
        }

        public IEnumerator StartPlayable()
        {
            yield return _waterPipeGame.StartGame();

            yield return new WaitForSeconds(0.5f);
            yield return _endScreenView.Show();
            _waterPipeGame.gameObject.SetActive(false);
        }
    }
}