using UnityEngine;
using System.Collections;

public class collision : MonoBehaviour {

	void OnCollisionEnter (Collision col){
				if (col.gameObject.name == "Enemy") {
						Destroy (col.gameObject);
				}
		else if (col.gameObject.name == "Enemy2") {
			Destroy (col.gameObject);
		}
		}
}
