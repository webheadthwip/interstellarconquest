#pragma strict
var prefab: Transform;
var position: Vector3;
var scale: int;
var dist: float;

function Start () 
	{
//----------Randomized Planet Spawning---------------- 
		for(var i = 0; i<30; i++)
			{
				position = Vector3(Random.Range(-20.0, 20.0),Random.Range(-20.0, 20.0), Random.Range(-20.0, 20.0));
				scale = Random.Range(0,3);
				prefab.localScale = Vector3(scale,scale,scale);
				Instantiate(prefab, position, Quaternion.identity);
			}
	}
