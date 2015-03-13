#pragma strict

function OnGUI () {
    // Make a background box
    //position x,y scale x,y
  	GUI.Box (Rect (300,200,400,350), "");
    GUI.TextArea(Rect (340,230,340,20), "This Game is a requirement for our Project");
    GUI.TextArea(Rect (340,250,340,20), "This Game is made to you by THREEnity");
    GUI.TextArea(Rect (340,300,340,20), "Thanks to all the person who helped building our game");
	GUI.TextArea(Rect (340,320,340,20), "Thanks also to UNITY");  
	GUI.TextArea(Rect (340,340,340,20), "HOPE you like IT");
    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (340,450,340,50), "BACK")) {
        Application.LoadLevel (0);
    }
}
