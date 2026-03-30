using UnityEngine;

public class PlayNowButton : MonoBehaviour
{
    public void OpenLink()
    {
        Application.OpenURL("https://play.google.com/store/apps/details?id=air.com.pixelfederation.diggy");
    }
}
