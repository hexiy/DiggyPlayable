using System;
using DiggyPlayable;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    private Camera _camera;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Awake()
    {
        _camera = GetComponent<Camera>();
        OrientationManager.OnOrientationChanged += OnOrientationChanged;
    }

    private void OnDestroy()
    {
        OrientationManager.OnOrientationChanged -= OnOrientationChanged;
    }

    private void OnOrientationChanged(OrientationManager.Orientation orientation)
    {
        transform.localEulerAngles =
            new Vector3(0, 0, orientation is OrientationManager.Orientation.Landscape ? 0 : 90);

        float ratio = Mathf.Max((float)Screen.width, (float)Screen.height) / (float)Mathf.Min((float)Screen.width, (float)Screen.height);
        if (ratio < 1.5f)
        {
            // tablet
            _camera.orthographicSize = orientation is OrientationManager.Orientation.Landscape ? 7.92f : 10.49f;
        }
        else
        {
            // pc/phone
            _camera.orthographicSize = orientation is OrientationManager.Orientation.Landscape ? 5.89f : 10.49f;
        }
    }
}