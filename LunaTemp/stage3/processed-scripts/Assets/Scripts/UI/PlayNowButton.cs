using UnityEngine;

public class PlayNowButton : MonoBehaviour
{
    public void OpenLink()
    {
        Luna.Unity.Playable.InstallFullGame(androidLink:"https://play.google.com/store/apps/details?id=air.com.pixelfederation.diggy");
        // Application.OpenURL("https://play.google.com/store/apps/details?id=air.com.pixelfederation.diggy");
    }
}
