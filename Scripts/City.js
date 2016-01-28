#pragma strict
var cities: int;
var planetLevel: int;
var cityCost01: int;
var cityCost02: int;
var cityCost03: int;
var gradeNum: int;
var gradeString: String;
var randomResource01: String;
var randomResource02: String;
var randomResource03: String;
//-----used to display the number in the correct spot and follow the camera------
var planetTarget : Transform;         // Object that this label should follow
static var offset = Vector3.right;        // Units in world space to offset; 1 unit above object by default
var clampToScreen = false;      // If true, label will be visible even if object is off screen
var clampBorderSize = .05;      // How much viewport space to leave at the borders when a label is being clamped
var useMainCamera = true;       // Use the camera tagged MainCamera
var cameraToUse : Camera;       // Only use this if useMainCamera is false
private var cam : Camera;
private var thisTransform : Transform;
private var camTransform : Transform;
var planetGuiScript: PlanetGUI;
var distance: int;
var mouseOrbitScript: MouseOrbitZoom;
var mouseTarget: Transform;
var startScript: Start;
function Start () {
	thisTransform = transform;
    if (useMainCamera)
        cam = Camera.main;
    else
        cam = cameraToUse;
    camTransform = cam.transform;
    
	cities = Random.Range(1,6);
//-------Gives Planet a Grade-------------	
	gradeNum = Random.Range(1,6);
	if(gradeNum == 1){
		gradeString = "A";
	}
	
	if(gradeNum == 2){
		gradeString = "B";
	}
	
	if(gradeNum == 3){
		gradeString = "C";
	}
	
	if(gradeNum == 4){
		gradeString = "D";
	}
	
	if(gradeNum == 5){
		gradeString = "F";
	}
//-----------Gives the cost to build city ----------------	
	var resourceArray : String[] = ["A", "B", "C", "D", "E"];
       randomResource01 = resourceArray[Random.Range(0, resourceArray.Length)];
       randomResource02 = resourceArray[Random.Range(0, resourceArray.Length)];
       randomResource03 = resourceArray[Random.Range(0, resourceArray.Length)];
       
    cityCost01 = Random.Range(1,6) * (planetLevel+1);
	cityCost02 = Random.Range(1,6) * (planetLevel+1);
	cityCost03 = Random.Range(1,6) * (planetLevel+1);
	
	mouseTarget = mouseOrbitScript.target;
}

function Update () {


if(planetGuiScript.showPlanetDetails == true)
	{
		guiText.material.color = Color.red;
		guiText.text = "City: " + planetLevel + "\n"+ cityCost01 + randomResource01 +" "+ cityCost02 + randomResource02 + " " + cityCost03 + randomResource03 +"	Grade: " +gradeString;
		offset = Vector3(0, (planetTarget.localScale.y*-.5), 0);
//----------Gets the GUIText to follow camera-----------
        if (clampToScreen) {
            var relativePosition = camTransform.InverseTransformPoint(planetTarget.position);
            relativePosition.z = Mathf.Max(relativePosition.z, 1.0);
            thisTransform.position = cam.WorldToViewportPoint(camTransform.TransformPoint(relativePosition + offset));
            thisTransform.position = Vector3(Mathf.Clamp(thisTransform.position.x, clampBorderSize, 1.0-clampBorderSize),
                                             Mathf.Clamp(thisTransform.position.y, clampBorderSize, 1.0-clampBorderSize),
                                             thisTransform.position.z);
        }
        else {
            thisTransform.position = cam.WorldToViewportPoint(planetTarget.position + offset);
        }
   } 
}

function OnGUI()
{
	 if(mouseTarget == transform.parent){
	 //print("gjfgfjh");
	 	if(GUI.Button(Rect(180,40,100,25), "Buy City"))
	 		{
	 			if(randomResource01 == "A")
	 				{
	 					startScript.BankA = startScript.BankA - cityCost01;
	 				}
	 			if(randomResource01 == "B")
	 				{
	 					startScript.BankB = startScript.BankB - cityCost01;
	 				}
	 			if(randomResource01 == "C")
	 				{
	 					startScript.BankC = startScript.BankC - cityCost01;
	 				}
	 			if(randomResource01 == "D")
	 				{
	 					startScript.BankD = startScript.BankD - cityCost01;
	 				}
	 			if(randomResource01 == "E")
	 				{
	 					startScript.BankE = startScript.BankE - cityCost01;
	 				}
	 			if(randomResource02 == "A")
	 				{
	 					startScript.BankA = startScript.BankA - cityCost02;
	 				}
	 			if(randomResource02 == "B")
	 				{
	 					startScript.BankB = startScript.BankB - cityCost02;
	 				}
	 			if(randomResource02 == "C")
	 				{
	 					startScript.BankC = startScript.BankC - cityCost02;
	 				}
	 			if(randomResource02 == "D")
	 				{
	 					startScript.BankD = startScript.BankD - cityCost02;
	 				}
	 			if(randomResource02 == "E")
	 				{
	 					startScript.BankE = startScript.BankE - cityCost02;
	 				}
	 			if(randomResource03 == "A")
	 				{
	 					startScript.BankA = startScript.BankA - cityCost03;
	 				}
	 			if(randomResource03 == "B")
	 				{
	 					startScript.BankB = startScript.BankB - cityCost03;
	 				}
	 			if(randomResource03 == "C")
	 				{
	 					startScript.BankC = startScript.BankC - cityCost03;
	 				}
	 			if(randomResource03 == "D")
	 				{
	 					startScript.BankD = startScript.BankD - cityCost03;
	 				}
	 			if(randomResource03 == "E")
	 				{
	 					startScript.BankE = startScript.BankE - cityCost03;
	 				}
	 		}
	}
}