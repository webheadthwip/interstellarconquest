#pragma strict
//attached to guiText, which is a child of planet
var planetTarget : Transform;         // Object that this label should follow
var offset = Vector3.zero;        // Units in world space to offset; 1 unit above object by default
var clampToScreen = false;      // If true, label will be visible even if object is off screen
var clampBorderSize = .05;      // How much viewport space to leave at the borders when a label is being clamped
var useMainCamera = true;       // Use the camera tagged MainCamera
var cameraToUse : Camera;       // Only use this if useMainCamera is false
private var cam : Camera;
private var thisTransform : Transform;
private var camTransform : Transform;
var distance: int;
var mouseOrbitScript: MouseOrbitZoom;
var singlePlanet: SinglePlanet;
var randomDef: int;
var randomFleet: int;
var randomDev: int;
var randomGrade: String;
static var showPlanetDetails: boolean = true;
var startScript: Start;

function Start () {

//------Gets the camera the GUIText is following--------
       thisTransform = transform;
       if (useMainCamera)
               cam = Camera.main;
       else
               cam = cameraToUse;
       camTransform = cam.transform;
       
//-----------Randomize stats---------------
       randomDef = Random.Range(5,11);
       randomFleet = Random.Range(5,11);
       randomDev = Random.Range(5,11);
       var gradeArray : String[] = ["A", "B", "C", "D"];
       randomGrade = gradeArray[Random.Range(0, gradeArray.Length)];
}
 
function Update () 
	{
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
    
//----------ends GUIText following camera---------------

//------------------displays distance in parsecs over planet----------------------
		distance = (Vector3.Distance(startScript.lastPosition, planetTarget.position))/3;
		
		if(showPlanetDetails == true && singlePlanet.plan == false)
			{
				distance = (Vector3.Distance(startScript.lastPosition, planetTarget.position))/3;
				guiText.material.color = Color.green;
				guiText.enabled = true;
				guiText.text = distance + "";//\n "+randomDef +"\n "+randomFleet +"\n "+randomDev +"\nGrade: " +randomGrade;
			}
		if(singlePlanet.plan == true)
			{
				distance = (Vector3.Distance(startScript.planPosition, planetTarget.position))/3;
				guiText.material.color = Color.magenta;
				guiText.text = distance + "";
			}
	}

@script RequireComponent(GUITexture)