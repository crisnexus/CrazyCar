using UnityEngine;
using System.Collections;

public class collision2 : MonoBehaviour {

	void OnCollisionEnter (Collision col){
		if (col.gameObject.name == "car") {
			Destroy (col.gameObject);
		}
	}
}
