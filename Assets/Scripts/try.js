#pragma strict

function OnGUI () {
    // Make a background box
    //position x,y scale x,y
    GUI.Box (Rect (300,200,400,350), "Loader Menu");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (340,260,320,50), "Play")) {
        Application.LoadLevel (1);
    }

    // Make the second button.
    if (GUI.Button (Rect (340,310,320,50), "Help")) {
        Application.LoadLevel (3);
    }
    if (GUI.Button (Rect (340,360,320,50), "About")) {
        Application.LoadLevel (4);
    }
    if (GUI.Button (Rect (340,410,320,50), "Exit")) {
        Application.Quit();
    }
    }