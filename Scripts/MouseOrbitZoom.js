static var target : Transform;//Target of the orbit and zoom
var distance = 10.0;

var xSpeed = 250.0;
var ySpeed = 120.0;

var yMinLimit = -20;
var yMaxLimit = 80;

var maximumZoomOutLength: int = 20;
var maximumZoomInLength: int = 2;
var zoomSpeed: int = 2;

private var x = 0.0;
private var y = 0.0;
static var lineMaterial : Material;
@script AddComponentMenu("Camera-Control/Mouse Orbit")
var dragOrigin: Vector3;
private var dragSpeed: float = 1;
var pos: Vector3;
var move: Vector3;
var HasClicked = false;
var ClickedPosition = Vector3(0,0,0);

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;

	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
	//sets the target of the rotation and zoom
	target = GameObject.Find("Apollo").transform;	
}

function LateUpdate () {
//------------------Code for Zooming Out------------
	if (Input.GetAxis("Mouse ScrollWheel") <0)
	{
	if (Camera.main.fieldOfView<=150)
	Camera.main.fieldOfView +=zoomSpeed;
	if (Camera.main.orthographicSize<=maximumZoomOutLength)
	Camera.main.orthographicSize +=0.5;
	}
	
//----------------Code for Zooming In-----------------------
	if (Input.GetAxis("Mouse ScrollWheel") > 0)
	{
		if (Camera.main.fieldOfView>12) //sets the max distance the camera can zoom in
		Camera.main.fieldOfView -=zoomSpeed;
		if (Camera.main.orthographicSize>=maximumZoomInLength)
		Camera.main.orthographicSize -=0.5;
	}
    if (target) {
	    if(Input.GetMouseButton(2))
	    {
		    x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
		    y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02;
			
		 	y = ClampAngle(y, yMinLimit, yMaxLimit);
		 		       
		    var rotation = Quaternion.Euler(y, x, 0);
		    var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
		        
		    transform.rotation = rotation;
		    transform.position = position;
	     }
	  }
//----------------Panning------------------------
 if (Input.GetMouseButton(1))
    {
        if (HasClicked == false)
        {
            ClickedPosition = Input.mousePosition;
            HasClicked = true;
        }
        var NewVec = ClickedPosition - Input.mousePosition;
        NewVec.z = NewVec.y;
        transform.Translate(Vector3.right * -Input.GetAxis("Mouse X") * .4);// multiply by a # < 1 for less sensitivity
		transform.Translate(transform.up * -Input.GetAxis("Mouse Y") * .4, Space.World);// multiply by a # < 1 for less sensitivity
    }
    else
    	{
       		HasClicked = false;
   		}
  //resets the target of rotation and zoom by hitting "n" key
  if(Input.GetButtonUp("Reset"))
  	{
  		target = GameObject.Find("Apollo").transform;
  		Camera.main.transform.position = target.position;
  		print("hit N");
  	}
}//---------ends lateUpdate

static function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}
