#pragma strict

private var textfield:GUIText;

private var allowedTime: int = 0;
private var currentTime = allowedTime;


function Awake () {
textfield = GetComponent(GUIText);
UpdateTimerText();
TimerTick();
}

function UpdateTimerText(){
textfield.text = currentTime.ToString();
}

function TimerTick(){
while(currentTime >= 0)
{
yield WaitForSeconds(1);
currentTime++;
UpdateTimerText();
}
}
