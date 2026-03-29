using System.Collections;

namespace DiggyPlayable.WaterPipeGame
{
    public class WaterPipeGameController
    {
        private readonly WaterPipeGameView _view;
        private readonly DrowningTimer _timer;

        public WaterPipeGameController(WaterPipeGameView view, DrowningTimer timer)
        {
            _view = view;
            _timer = timer;
        }

        public IEnumerator StartGame()
        {
            _view.Show();

            _timer.StartTicking();

            yield return _view.WaitForSolved();

            _timer.Stop();
        }
    }
}