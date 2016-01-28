#pragma strict
var randomDef: int;
var planetTarget : Transform;         // Object that this label should follow
static var offset = Vector3.left;        // Units in world space to offset; 1 unit above object by default
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
var randomPlanet: String;
var startScript: Start;
function Start () {
 	thisTransform = transform;
    if (useMainCamera)
        cam = Camera.main;
    else
        cam = cameraToUse;
    camTransform = cam.transform;
    
//    var planetArray : String[] = ["Plato","Diogenes","Kant","Hegel","Locke","Burke","Hobbes","Aristotle","Hume","Descartes","Aquinas","Nietzsche",
//"Spinoza","Rousseau","Ford","Morgan","Rockerfeller","Carnegie","Walton","Watson","Rothschild","Disnii","Kroc",
//"Nobel","Kaiser","Sloan","Toyoda","Lever","Luce","Ward","Boulton","Harriman","Wedgwood","Swope","Jobs","Gates",
//"Edison","Winfrey","Page","Brin","Smith","Astor","Vanderbilt","Medici","Newton","Einstein","Darwin","Bohr","Pasteur",
//"Galilee","Lavoisier","Kepler", "Copernicus","Faraday","Maxwell","Tesla","Heisenberg","Pauling","Schrodinger","Rutherford",
//"Dirac","Vesalius","Brahe","Buffon","Boltzmann","Planck","Curie","Herschel","Lyell","Hubble","Crick","Fermi","Euler",
//"Liebig", "Lincoln", "Roosevelt", "Washington", "Jefferson", "Roosevelt II","Wilson", "Truman", "Jackson", "Eisenhowser",
//"Polk","Kennedy","Adams","Madison","Monroe","Johnson","Attlee","Churchill","Blair","Thatcher","Macmillan","George",
//"Asquith","Baldwin","Wilson","Salisbury","Campbell","Callaghan","Heath","Macdonald","Major"];
//
//	randomPlanet = planetArray[Random.Range(0, planetArray.Length)];
}

function Update () {

if(planetGuiScript.showPlanetDetails == true)
{
	guiText.material.color = Color.blue;
//-----------displays defense--------------
//	randomPlanet = startScript.planetArray[Random.Range(0, startScript.planetArray.Length)];
	guiText.text = randomPlanet;//+randomDef; 
	offset = Vector3((planetTarget.localScale.x * -.5), 0, 0);
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