#pragma strict
var planetArray: GameObject[];
var target : Transform;         // Object that this label should follow
var cameraToUse : Camera;       // Only use this if useMainCamera is false
//static var mytext: GUIText;
var mouseOrbitScript: MouseOrbitZoom;
static var turnOffPlanet: boolean = false;
var screenLocation: Vector3;
var shipScript: Ship;
var fleetScript: Fleet;
var planetGUIScript: PlanetGUI;
var oldDistance: int;
var num: int;
var startScript: Start;
static var plan: boolean = false;
function Start () {

//	oldDistance = (Vector3.Distance(mouseOrbitScript.target.position, transform.parent.position))/3;
}

function Update () {
//-------turns off renderers for planets for the start of the game-----------
	if(turnOffPlanet == true)
		{
			renderer.enabled = false;
		}
	if (turnOffPlanet == false)
		{
			renderer.enabled = true;
		}
}

function OnCollisionStay(col: Collision){
	//if planets are touching, one gets destroyed
	if(col.gameObject.tag =="planet")
		{
			Destroy(col.gameObject);
		}
}

function OnGUI()
	{

	}
	
function OnMouseOver () 
	{
		renderer.material.color += Color(0.2, 0, 0) * Time.deltaTime;
	}

function OnMouseDown ()
	{
//--------------------Subtracts Fleet Cost---------------------------
//		if( startScript.preventFlying == false){
//			mouseOrbitScript.target = target;
//			}
		print("planet GUI " +planetGUIScript.planetTarget.position);
		if(plan == false && startScript.preventFlying == false)
			{
				mouseOrbitScript.target = target;
				//mouseOrbitScript.target = target;
				startScript.preventFlying = true;
				shipScript.startFlying = true;
				num = (Vector3.Distance(startScript.lastPosition, transform.position))/3;
				if(num <= 3){
					fleetScript.randomFleet = fleetScript.randomFleet - 1;
				}
				
				if(4 <= num && num <= 6){
					fleetScript.randomFleet = fleetScript.randomFleet - 5;
				}
				
				if(7 <= num && num <= 10){
					fleetScript.randomFleet = fleetScript.randomFleet - 10;
				}
				
				if(11 <= num && num <= 12){
					fleetScript.randomFleet = fleetScript.randomFleet - 15;
				}
				if(num > 12){
					fleetScript.randomFleet = fleetScript.randomFleet - 25;
				}
				startScript.lastPosition = transform.position;
				startScript.planPosition = transform.position;
			}
		if(plan == true)
			{
				startScript.tripCost += (Vector3.Distance(startScript.planPosition, transform.position))/3;
				print("plan position: " +startScript.planPosition);
				startScript.planPosition = transform.position;
			}
	}
