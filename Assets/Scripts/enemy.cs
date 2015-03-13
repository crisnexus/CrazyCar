using UnityEngine;
using System.Collections;

public class enemy : MonoBehaviour {
	public GameObject bumpcarone;
	public GameObject bumpcartwo;
	public GameObject Enemy1;
	public GameObject Enemy2;
	public GameObject police;
	public GameObject police1;
	// Use this for initialization
	void Start () {
		Destroy (gameObject, 60);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
