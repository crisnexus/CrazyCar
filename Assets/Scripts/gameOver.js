#pragma strict

function OnGUI () {
    // Make a background box
    //position x,y scale x,y
    GUI.Box (Rect (200,300,400,250),"");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (240,360,320,50), "Play Again")) {
        Application.LoadLevel (1);
    }

    // Make the second button.
    if (GUI.Button (Rect (240,410,320,50), "Main Menu")) {
        Application.LoadLevel (0);
    }
    
    if (GUI.Button (Rect (240,460,320,50), "Exit")) {
        Application.Quit();
    }
    }