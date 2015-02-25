using UnityEngine;
using System.Collections;

public class collision : MonoBehaviour { 
	int score = 0;
	void OnGUI () 
	{
		GUI.color = Color.black;
		GUILayout.Label(" Score: " + score.ToString());
	}
	
		void OnCollisionEnter (Collision col){
				if (col.gameObject.name == "Enemy") { 
						Destroy (col.gameObject);
	
				} else if (col.gameObject.name == "Enemy2") {
						Destroy (col.gameObject);
		} else if (col.gameObject.name == "car") { 
						Destroy (col.gameObject);
			Die();
		
				}
		}
	void Die()
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}
