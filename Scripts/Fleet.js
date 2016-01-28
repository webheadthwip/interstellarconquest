#pragma strict
var randomFleet: int;
var planetTarget : Transform;         // Object that this label should follow
static var offset = Vector3.up;        // Units in world space to offset; 1 unit above object by default
var clampToScreen = false;      // If true, label will be visible even if object is off screen
var clampBorderSize = .05;      // How much viewport space to leave at the borders when a label is being clamped
var useMainCamera = true;       // Use the camera tagged MainCamera
var cameraToUse : Camera;       // Only use this if useMainCamera is false
private var cam : Camera;
private var thisTransform : Transform;
private var camTransform : Transform;
var distance: int;
var mouseOrbitScript: MouseOrbitZoom;
var planetGuiScript: PlanetGUI;
function Start () {
randomFleet = Random.Range(5,11);

 	thisTransform = transform;
    if (useMainCamera)
        cam = Camera.main;
    else
        cam = cameraToUse;
    camTransform = cam.transform;
}

function Update () {
if(planetGuiScript.showPlanetDetails == true)
{
	guiText.material.color = Color.yellow; 
	guiText.text = ""+randomFleet;
	offset = Vector3(0,(planetTarget.localScale.y*.5), 0);
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
	//----------ends GUIText following camera---------------
}