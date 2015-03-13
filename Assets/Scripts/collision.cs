using UnityEngine;
using System.Collections;

public class collision : MonoBehaviour { 
	
		void OnCollisionEnter (Collision col){
					if (col.gameObject.name == "car") { 
						Destroy (col.gameObject);
			Die();

		
				}
		}
	void Die()
	{
		Application.LoadLevel("last");
	}
}
