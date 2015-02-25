using UnityEngine;
using System.Collections;

public class controller : MonoBehaviour {

	public KeyCode right;
	public KeyCode left;
	
	void FixedUpdate () {
		// up key pressed?
		if (Input.GetKey(right)) {
			transform.Translate(new Vector2(0.1f, 0));
		}
		
		// down key pressed?
		if (Input.GetKey(left)) {
			transform.Translate(new Vector2(-0.1f, 0));
		}
	}
}
