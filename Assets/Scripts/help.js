#pragma strict

function OnGUI () {
    // Make a background box
    //position x,y scale x,y
  	GUI.Box (Rect (300,200,400,350), "");
    GUI.TextArea(Rect (340,230,340,20), "CONTROL");
    GUI.TextArea(Rect (340,250,340,20), "Press LEFT or RIGHT ARROW to move");
    GUI.TextArea(Rect (340,300,340,20), "GAMEPLAY");
	GUI.TextArea(Rect (340,320,340,20), "Avoid all cars going SOUTH except for an AMBULANCE CAR");
	GUI.TextArea(Rect (340,340,340,20), "Cars that are going NORTH are all illusions except for"); 
	GUI.TextArea(Rect (340,360,340,20), "an AMBULANCE CAR. You can hit them");   
	GUI.TextArea(Rect (340,380,340,20), "Hitting the boundary will result on losing control of your car");
    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (340,450,340,50), "BACK")) {
        Application.LoadLevel (0);
    }
}
