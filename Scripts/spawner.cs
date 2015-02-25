using UnityEngine;
using System.Collections;

public class spawner : MonoBehaviour {

	public float spawnTime = 5f;
	public float spawnDelay = 3f;
	public GameObject[] enemies;
	int score;
	void OnGUI () 
	{
		GUI.color = Color.black;
		GUILayout.Label(" Score: " + score.ToString());
	}

	void Start () {
		InvokeRepeating("Spawn", spawnDelay, spawnTime);
	}
	
	// Update is called once per frame
	void Spawn ()
	{
		// Instantiate a random enemy.
		int enemyIndex = Random.Range(0, enemies.Length);
		Instantiate(enemies[enemyIndex], transform.position, transform.rotation);
		score++;
		

	}
}

