using UnityEngine;
using UnityEngine.InputSystem;
using System.Collections;

public class TouchManager : MonoBehaviour
{
    [SerializeField]
    private GameObject explosionPoint;
/*    [SerializeField]
    private ForcePush explosionForce;*/

    [SerializeField]
    private GameObject forcePrefab;

    [SerializeField]
    private GameObject player;

    private PlayerInput playerInput;

    private InputAction touchPositionAction;
    private InputAction touchPressAction;

    private Vector3 currentInputTouch;

    private bool haveTouched;
    private bool firstTouch;

    [SerializeField]
    private GameObject guidePoint;

    [SerializeField]
    private float guideSpeed;

    private bool guidePointRight;


    void Start()
    {
        guidePointRight = true;
        firstTouch = true;
        haveTouched = false;
    }


    void Update()
    {
        if (Input.touchCount > 0)
        {
            haveTouched = true;

            Touch touch = Input.GetTouch(0);

            currentInputTouch = touch.position;

            Debug.Log("IN TOUCH METHOD");
        }

        if (haveTouched)
        {
            firstTouch = false;
            Vector3 positionCam = Camera.main.ScreenToWorldPoint(currentInputTouch);

            explosionPoint.transform.position = new Vector3(positionCam.x, positionCam.y, -1.0f);
        } else
        {
            if (guidePointRight)
            {
                guidePoint.transform.Translate(Time.deltaTime * guideSpeed, 0, 0);
            } else
            {
                guidePoint.transform.Translate(-Time.deltaTime * guideSpeed, 0, 0);
            }

            if (guidePoint.transform.position.x > 8)
            {
                guidePointRight = false;
            }

            if (guidePoint.transform.position.x < 3)
            {
                guidePointRight = true;
            }
            
        }

        if (!firstTouch)
        {
            guidePoint.SetActive(false);
        }
    }



    private void Awake()
    {
        playerInput = GetComponent<PlayerInput>();
        touchPressAction = playerInput.actions["ForcePress"];
        touchPositionAction = playerInput.actions["ForcePosition"];
    }

    private void OnEnable()
    {
        touchPressAction.performed += TouchPressed;
    }

    private void OnDisable()
    {
        touchPressAction.performed -= TouchPressed;
    }

    private void TouchPressed(InputAction.CallbackContext context)
    {
        /*Vector3 position = Camera.main.ScreenToWorldPoint(touchPositionAction.ReadValue<Vector2>());
        *//*        position.z = player.transform.position.z;
                player.transform.position = position;*//*

        explosionPoint.transform.position = new Vector3 (position.x, position.y, 0);*/
    }
}
