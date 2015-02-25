using UnityEngine;
using System.Collections;

public class spawnerenv : MonoBehaviour {
	
	public float spawnTime = 1f;
	public float spawnDelay = 0f;
	public GameObject[] env;
	
	void Start () {
		InvokeRepeating("Spawn", spawnDelay, spawnTime);
	}
	
	// Update is called once per frame
	void Spawn ()
	{
		// Instantiate a random enemy.
		int envIndex = Random.Range(0, env.Length);
		Instantiate (env[envIndex], transform.position, transform.rotation);
		
		
	}
}

