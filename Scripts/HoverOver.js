#pragma strict
static var guiDepth : int = 0;
var cursorMode : CursorMode = CursorMode.Auto;
var hotSpot : Vector2 = Vector2.zero;
var actionbox1 = Rect(20, Screen.height-150, 70, 20);
var actionbox2 = Rect(20, Screen.height-180, 70, 20);
var actionbox3 = Rect(20, Screen.height-210, 70, 20);
var actionbox4 = Rect(20, Screen.height-240, 70, 20);
var actionbox5 = Rect(20, Screen.height-270, 70, 20);
var fluffTxt : Texture;
private var toggleTxt : boolean = false;
var buttonScript : button;
function OnGUI() 
{
	
	GUI.depth = guiDepth;
	guiDepth=0;
	if(buttonScript.varb == true)
	{
		var e : Event = Event.current; //dont use Input.mousePosition, it uses space coordinates which are inverted from GUI coordinates
		
		
		 if (actionbox1.Contains(e.mousePosition))
		 	{
		 		//draws texture next to mouse cursor
		 		GUI.DrawTexture(Rect(e.mousePosition.x,e.mousePosition.y-10,209,234), fluffTxt, ScaleMode.ScaleToFit, true, 0);
		 	//	print("the mouse is in");
		 	}
		 
		 if (actionbox2.Contains(e.mousePosition))
		 	{
		 		//draws texture next to mouse cursor
		 		GUI.DrawTexture(Rect(e.mousePosition.x,e.mousePosition.y-10,209,234), fluffTxt, ScaleMode.ScaleToFit, true, 0);
		 	//	print("the mouse is in 2");
		 	}
		 	
		 if (actionbox3.Contains(e.mousePosition))
		 	{
		 		//draws texture next to mouse cursor
		 		GUI.DrawTexture(Rect(e.mousePosition.x,e.mousePosition.y-200,209,234), fluffTxt, ScaleMode.ScaleToFit, true, 0);
		 	//	print("the mouse is in 3");
		 	}
		 
		 if (actionbox4.Contains(e.mousePosition))
		 	{
		 		//draws texture next to mouse cursor
		 		GUI.DrawTexture(Rect(e.mousePosition.x,e.mousePosition.y-200,209,234), fluffTxt, ScaleMode.ScaleToFit, true, 0);
		 	//	print("the mouse is in 4");
		 	}
		 	
		 if (actionbox5.Contains(e.mousePosition))
		 	{
		 		//draws texture next to mouse cursor
		 		GUI.DrawTexture(Rect(e.mousePosition.x,e.mousePosition.y-200,209,234), fluffTxt, ScaleMode.ScaleToFit, true, 0);
		 		//print("the mouse is in 5");
			}
		// toggleTxt = GUI.Toggle(Rect(0, 480, 100, 30), toggleTxt, "A Toggle text");
	}
}
