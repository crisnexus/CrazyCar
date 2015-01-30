#pragma strict

function Update () {
transform.position.x= Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
transform.position.x=Mathf.Clamp(transform.position.x, -6, 6);

}

