#pragma strict
var otherScript: Start; //holds other script
var blueChance: int=50; //out of 100
var party: int = -1; // 0 = blue, 1 = red
var cost: int; //cost of buying a hex
var ball: GameObject; //ally/ rival object
var checkSurrounding : Collider[]; //surrounding hexes
var i : int=0; //iterator number
var cost3dText: TextMesh; //displays cost of hex
var act: boolean = true; // if true, the display is active
var surroundingHexes = new Array(); //puts surrounding hexes in an array
var jsHexList: GameObject[]; //turns surrounding hex array into a gameobject array
var randNum: int; //random number used for deciding allies
var win: boolean = false; //win state
var constitColor : GameObject; //color for small hex for constituent
var constitHex: GameObject;//small hex for constituent
var constitNum: int; //represents constituent in a roll
static var testNum: int; //average of this hex and that hex
var resType: int;//resource type
var resType3dText: TextMesh; //displays resource type
var cost3dTextPos = Vector3(0,0,0);
var resType3dTextPos = Vector3(0,0,0);
var senateCybText:Texture[];
var senateEldText:Texture[];
var senateVirText:Texture[];
var senateNatText:Texture[];
var senateHumText:Texture[];
var senateEvoText:Texture[];


function Start () 
{
	cost3dTextPos = Vector3(transform.position.x-6.7,transform.position.y, transform.position.z);
	resType3dTextPos = Vector3(transform.position.x-9,transform.position.y, transform.position.z);
	decideParty();//runs function that decides party
	Cost(); //runs function that decides cost
	randNum = Random.Range(0,100); //rolls number for deciding allies
	constitNum = Random.Range(1,13);//rolls constituent
	cost3dText = Instantiate(cost3dText, cost3dTextPos,Quaternion.Euler(90, 0, 0)); //creates the display for cost
	resType3dText = Instantiate(resType3dText, resType3dTextPos,Quaternion.Euler(90, 0, 0)); //creates display for resources
	var mySpot = new Vector3(transform.position.x, transform.position.y+10, transform.position.z); //location above the hex to place the cost and resource
	constitColor = Instantiate(constitHex, mySpot,Quaternion.Euler(270, 180, 0)); //makes mini-hexes
	this.cost3dText.renderer.enabled = true; //keeps the text displaying
	this.resType3dText.renderer.enabled = true; //keeps the text displaying
	
	if(constitNum == 1)
		{
			//constitColor.renderer.material.color = Color.magenta; //changes color of hex to green
			constitColor.renderer.material.mainTexture = senateCybText[Random.Range(0,2)];
			otherScript.hexCount++; //adds 1 to entire hex count
			otherScript.cybCount++; //adds 1 to cyberean count
		}
	if(constitNum == 2)
		{
			//constitColor.renderer.material.color = Color.grey; //changes color of hex to grey
			constitColor.renderer.material.mainTexture = senateEldText[Random.Range(0,2)];
			otherScript.hexCount++; //adds 1 to entire hex count
			otherScript.eldCount++; //adds 1 to elderean count
		}
	if(constitNum == 3 || constitNum == 4 ||constitNum == 5)
		{
			//constitColor.renderer.material.color = Color(1.0, .51, 0.0, 0.0);//orange
			constitColor.renderer.material.mainTexture = senateVirText[Random.Range(0,2)];
			otherScript.hexCount++; //adds 1 to entire hex count
			otherScript.virCount++; //adds 1 to virtualist count
		}
	if(constitNum == 6)
		{
			//constitColor.renderer.material.color = Color.green; //green
			constitColor.renderer.material.mainTexture = senateNatText[Random.Range(0,2)];
			otherScript.hexCount++; //adds 1 to entire hex count
			otherScript.natCount++; //adds 1 to naturalist count
		}
	if(constitNum == 7 || constitNum == 8 || constitNum == 9|| constitNum == 10)
		{
			//constitColor.renderer.material.color = Color(.1, .1, .1); //black
			constitColor.renderer.material.mainTexture = senateHumText[Random.Range(0,2)];
			otherScript.hexCount++; //adds 1 to entire hex count
			otherScript.humCount++; //adds 1 to humanist count
		}
	if(constitNum == 11 || constitNum == 12)
		{
			//constitColor.renderer.material.color = Color.yellow; //yellow
			constitColor.renderer.material.mainTexture = senateEvoText[Random.Range(0,2)];
			otherScript.hexCount++; //adds 1 to entire hex count
			otherScript.evoCount++;// adds 1 to evolutionist count
		}		
}

function Update()
{
	cost3dText.text = cost.ToString(); // updates cost that is displayed on hex
}


function decideParty() 
{
	//sets party
	var randParty = Random.Range(0,101);
	if(randParty < blueChance)
		{
			gameObject.name = "1";
			party = 1;
			renderer.material.color = Color.red;
			renderer.material.color.r = renderer.material.color.r*10;
		}
	else
		{
			gameObject.name = "0";
			party = 0;
			renderer.material.color = Color.blue;
			renderer.material.color.b = renderer.material.color.b*10;
		}

	//decides which resource the hex wants
	resType = Random.Range(1,11);
	
	if(resType == 1 || resType == 2 || resType == 3)
	{
		resType3dText.text = "A";
	}
	
	if(resType == 4 || resType == 5 || resType == 6)
	{
		resType3dText.text = "B";
	}
	
	if(resType == 7 || resType == 8)
	{
		resType3dText.text = "C";
	}
	
	if(resType == 9)
	{
		resType3dText.text = "D";
	}
	
	if(resType == 10)
	{
		resType3dText.text = "E";
	}
}
function Cost()
{
	cost= Random.Range(10,10);//the base cost for buying the hex before all the mods
}


function OnCollisionEnter (myCollision : Collision)
{
	surroundingHexes.Push(gameObject);//adds surrounding hexes into surroundingHex 
	//adds 1 to cost if they are the same party, subtracts if not
		
	if(myCollision.collider.gameObject.name == this.party.ToString())
		{
			//calculates cost based on adjacent hex's party
			cost++; //increases the cost by one for being in the opposing party
			//cost3dText.text = cost.ToString();
		}
	else
		{	
			//calculates cost based on adjacent hex's party
			if(cost > 0)
				{
					cost --; //reduces the cost by one for being in the same party
					//cost3dText.text = cost.ToString();
				}
		}

	testNum = (myCollision.gameObject.GetComponent(HexScript).randNum + this.randNum)/2; //average of both hexes to set both  hexes to matching relationships
	var x2 =myCollision.gameObject.GetComponent(HexScript).constitNum; //creates constituent numbers
	//decides if ally or not based on the fact that both hexes are of the same party
	//makes ally for hexes of same party. 35% chance for allying a hex of the same party.
	if (constitNum ==1){
		if (x2 == 1 || x2 == 3 || x2 == 4 || x2 == 5 || x2 == 11 || x2 == 12)
		{
			if(testNum < 35)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 35 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
		else {
			if(testNum < 15)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 15 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
	
	}
	
	
	
	if (constitNum ==2){
		if (x2 == 2 || x2 == 3 || x2 == 4 || x2 == 5)
		{
			if(testNum < 35)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 35 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
		else {
			if(testNum < 15)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 15 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
	
	}
	if (constitColor.renderer.material.color == Color(1.0, .51, 0.0, 0.0)){
	//if (constitNum ==3 || constitNum==4 || constitNum==5){
		if (x2 == 1 || x2 == 2 || x2 == 3 || x2 == 4 || x2 == 5)
		{
			if(testNum < 35)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 35 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
		else {
			if(testNum < 15)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 15 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
	
	}
	
	if (constitNum ==6){
		if (x2 == 6 || x2 == 7 || x2 == 8 || x2 == 9 || x2 == 10)
		{
			if(testNum < 35)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 35 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
		else {
			if(testNum < 15)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 15 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
	
	}
	if (constitColor.renderer.material.color == Color(.1, .1, .1))
	{
		if (x2 == 6 || x2 == 7 || x2 == 8 || x2 == 9 || x2 == 10 || x2 == 11 || x2 == 12)
		{
			if(testNum < 35)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 35 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
		else {
			if(testNum < 15)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 15 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
	}
	
	if (constitColor.renderer.material.color == Color.yellow)
	{
		if (x2 == 1 || x2 == 7 || x2 == 8 || x2 == 9 || x2 == 10 || x2 == 11 || x2 == 12)
		{
			if(testNum < 35)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 35 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
		else {
			if(testNum < 15)
			{
				MakeAllyBall(myCollision.gameObject.GetComponent(Transform));
			}
			
			//makes rival. since the chance of being an ally for hexes of the same is 15% 50-35 is 15
			if(testNum > 15 && testNum < 50)
			{
				MakeRivalBall(myCollision.gameObject.GetComponent(Transform));
			}
		}
	}

}


//makes ally ball on the border between hexes
function MakeAllyBall(k : Transform)
{
	var myspot = new Vector3(this.transform.position.x, 10, this.transform.position.z);
	var target= new Vector3((k.position.x), 10, (k.position.z));
	var halfway= new Vector3();
	halfway = ((myspot + target)/2.0);
	var thisball = Instantiate(ball, halfway, Quaternion.identity);
	thisball.renderer.material.color = Color.green;
}


//makes rival ball on the border between hexes
function MakeRivalBall(k : Transform)
{
	var myspot = new Vector3(this.transform.position.x, 10, this.transform.position.z);
	var target= new Vector3((k.position.x), 10, (k.position.z));
	var halfway= new Vector3();
	halfway = ((myspot + target)/2.0);
	var thisball = Instantiate(ball, halfway, Quaternion.identity);
	thisball.renderer.material.color = Color.black;
}

//OnMouseEnter runs when mouse hovers over hex, use for testing in this case
function OnMouseEnter()
{
//	print(randNum);
}


//OnMouseDown runs when player clicks on the hex
function OnMouseDown()
{
	
	if(act == true)
	{
		//subtract  value from bill
		if (resType == 1|| resType ==2 || resType ==3){
			otherScript.resA = otherScript.resA - cost;
		}
		
		if (resType == 4|| resType ==5 || resType ==6){
			otherScript.resB = otherScript.resB - cost;
		}
		if (resType == 7|| resType ==8 ){
			otherScript.resC = otherScript.resC - cost;
		}
		if (resType == 9){
			otherScript.resD = otherScript.resD - cost;
		}
		if (resType == 10){
			otherScript.resE = otherScript.resE - cost;
		}
		
		//deducts cost from total energy and counts to see if you've won
	 	otherScript.playerEnergy -=cost;
	 	otherScript.n = otherScript.playerEnergy.ToString();

	 	otherScript.greenHexCount++;
	 	//counts up the hexes to subtract from the variable that holds 2/3 count
	 	otherScript.hexCountminus++;
	 	
	 	this.act = false;
	 	
	 	//next 3 lines makes the hex green
		renderer.material.color = Color.green;
	 	renderer.material.color.g = renderer.material.color.g*10;
	 	
	 	//turns off the number display for this hex
	 	this.cost3dText.renderer.enabled = false;
	 	this.resType3dText.renderer.enabled = false;
	 	//add up for each constituent, how many have been selected
	 	 if (constitNum ==1){
	 	 	otherScript.cybCountminus++;
	 	 }
	 	 else if (constitNum ==2){
	 	 	otherScript.eldCountminus++;
	 	 }
	 	 else if (constitNum ==3 ||constitNum ==4 ||constitNum ==5){
	 	 	otherScript.virCountminus++;
	 	 }
	 	 else if (constitNum ==6){
	 	 	otherScript.natCountminus++;
	 	 }
	 	 else if (constitNum ==7||constitNum ==8 ||constitNum ==9||constitNum ==10){
	 	 	otherScript.humCountminus++;
	 	 }
	 	 else if (constitNum ==11 ||constitNum ==12 ){
	 	 	otherScript.evoCountminus++;
	 	 }
	 	 
	 	
		//goes through the list of surrounding hexes and changes their cost accordingly
		jsHexList = new Array(surroundingHexes);
		for(var i=0; i< jsHexList.length; i++) 
		{
			var thenum = (jsHexList[i].GetComponent(HexScript).randNum + this.randNum)/2;

			
			var x = jsHexList[i].GetComponent(HexScript).constitNum;
			if (constitNum ==1){
			
				
				if(x == 1 || x == 3 ||  x == 4 ||x == 5 || x == 11 || x == 12 ) //if the adjacent hex is the same color
				{
					//these if statements follow the OnCollision statements above, so make them match
					if(thenum < 35)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 35 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
	
				}
				else {
					if(thenum < 15)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 15 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
				
				}
			}
			
			
			if (constitNum ==2){
				if(x == 2 || x == 3 ||  x == 4 ||x == 5) //if the adjacent hex is the same color
				{
					//these if statements follow the OnCollision statements above, so make them match
	
					if(thenum < 35)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 35 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
	
				}
				else {
					if(thenum < 15)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 15 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
				
				}
			}
			if (constitColor.renderer.material.color == Color(1.0, .51, 0.0, 0.0)){
			//if (constitNum ==3 || constitNum || 4 || constitNum||5){
				if(x == 1 || x == 2 ||  x == 3 ||x == 4 || x==5) //if the adjacent hex is the same color
				{
					//these if statements follow the OnCollision statements above, so make them match
	
					if(thenum < 35)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 35 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
	
				}
				else {
					if(thenum < 15)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 15 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
				
				}
			}
			
			if (constitNum ==6){
				if(x == 6 || x == 7 ||  x == 8 ||x == 9 ||x == 10) //if the adjacent hex is the same color
				{
					//these if statements follow the OnCollision statements above, so make them match
	
					if(thenum < 35)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 35 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
	
				}
				else {
					if(thenum < 15)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 15 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
				
				}
			}
			
			if (constitColor.renderer.material.color == Color(.1, .1, .1)){
			//if (constitNum ==3 || constitNum || 4 || constitNum||5){
				if(x == 6 || x == 7 ||  x == 8 ||x == 9 || x==10  || x == 11 || x == 12) //if the adjacent hex is the same color
				{
					//these if statements follow the OnCollision statements above, so make them match
	
					if(thenum < 35)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 35 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
	
				}
				else {
					if(thenum < 15)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 15 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
				
				}
			}
			
			if (constitColor.renderer.material.color == Color.yellow){
			//Evolutionists Yellow 11, 12
				if(x == 1 || x == 7 ||  x == 8 ||x == 9 || x==10  || x == 11 || x == 12) //if the adjacent hex is the same color
				{
					//these if statements follow the OnCollision statements above, so make them match
	
					if(thenum < 35)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 35 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
	
				}
				else {
					if(thenum < 15)// if thenum is less than 35 means it rolled as an Ally
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost-2;
		
						cost3dText.text = cost.ToString();
					}
	
					if(thenum > 15 && thenum < 50)//since the risk of being a rival is 15%, 50-35 is 15
					{
						jsHexList[i].gameObject.GetComponent(HexScript).cost = jsHexList[i].gameObject.GetComponent(HexScript).cost+2;
						cost3dText.text = cost.ToString();
					}
				}
			}
		}//ends jsHexList loop	
	}
}


