using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField]
    private float travelSpeed;
    [SerializeField]
    private float horizontalSpeed;
    [SerializeField]
    private float jumpHeight;
    [SerializeField]
    private float gravityForce;
    [SerializeField]
    private int cooldownAmount;
    [SerializeField]
    private Rigidbody player_rb;
    [SerializeField]
    private Vector3 startingPosition;

    private int jumpCooldown = -1;

    private float score = 0;

    void FixedUpdate()
    {
        // Moves player forward and side to side base on key input
        gameObject.transform.Translate(-Input.GetAxis("Horizontal") * horizontalSpeed, 0, -travelSpeed);

        // Player can jump up (flap) after jump cooldown reaches zero by pressing up key
        if (Input.GetAxis("Vertical") > 0 && jumpCooldown < 0)
        {
            player_rb.velocity = new Vector3(0f, 0f, 0f);
            player_rb.AddForce(transform.up * jumpHeight);
            //Debug.Log("Should jump now");
            jumpCooldown = cooldownAmount;
        } else
        {
            player_rb.AddForce(-transform.up * gravityForce);
        }
        jumpCooldown--;
        score += 0.1f;
        Debug.Log("Score: " + score);
    }

    // Executes whenever player hits objects with "is trigger" ticked:
    private void OnTriggerEnter(Collider other)
    {
        transform.position = startingPosition;
        score = 0;
    }

}
