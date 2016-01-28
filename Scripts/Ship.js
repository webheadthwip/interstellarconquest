#pragma strict
var mouseOrbitScript: MouseOrbitZoom;
var singlePlanetScript: SinglePlanet;
var ship: Transform;
static var startFlying: boolean;
// Speed in units per sec.
var speed: float;
var startScript: Start;
var flyBack: boolean;
function Start () 
{
	transform.position = Vector3(0,0,0);
}

function Update () 
{
	if(startFlying == true)
		{
			//------Moves the Ship to the destination------------
			ship = mouseOrbitScript.target;
			var targetDir = mouseOrbitScript.target.position - transform.position;
			//transform.LookAt(singlePlanetScript.transform, Vector3.left);
			
			// The step size is equal to speed times frame time.
			var step = speed * Time.deltaTime;
			
			// Move our position a step closer to the target.
			transform.position = Vector3.MoveTowards(transform.position, ship.position, step);
			
			//Rotate towards Planet
			var newDir = Quaternion.LookRotation(targetDir, Vector3.up);
			transform.rotation = newDir;
		}
}

function OnTriggerEnter(col: Collider){
	if(col.gameObject.tag =="planet")
		{
			startScript.preventFlying = false;
			print("Landed On Planet");
		//------shifts camera to selected planet and zooms in on it--------------
//			Camera.main.transform.position = transform.position;
//			mouseOrbitScript.target = singlePlanetScript.target;
//			if(Camera.main.orthographicSize >= 1)
//				{
//					Camera.main.orthographicSize -=0.7;
//				}
		}
}