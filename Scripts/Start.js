#pragma strict
//--------------------Code for the Senate, attach to camera---------------------------
var showprompt: boolean = true;
var playerparty: int = 0; //0 = blue, 1 = red
var hex: GameObject; //the hexagon model
var hexScript: HexScript;//holds script
var buttonScript: button;
var planetGuiScript: PlanetGUI;
var singleplanetscript: SinglePlanet;
var hoverTextScript: HoverTexture;
var shipScript: Ship;
var mouseOrbitScript: MouseOrbitZoom;
static var playerEnergy: int = 100; //player total Effort/Energy/Money this won't show up in inspector so change here
static var n: String = "100"; //set this to match Effort this won't show up in inspector so change here
var hexNum: int = 0; //number of hexes that will instantiate 
static var greenHexCount: int; //counts green hexes for win state

var articleBUT: boolean = false;

//locations of hexagons
var hexVectors: Vector3[] = [ new Vector3(0,0,0),
			new Vector3(0,0,17.32051),
			new Vector3(-15,0,8.660257),
			new Vector3(-15,0,-8.660257),
			new Vector3(0,0,-17.32051),
			new Vector3(15,0,-8.660257),
			new Vector3(15,0,8.660257),
			new Vector3(0,0,34.64102),
			new Vector3(-15,0,25.98077),
			new Vector3(-30,0,17.32051),
			new Vector3(-30,0,0),
			new Vector3(-30,0,-17.32051),
			new Vector3(-15,0,-25.98077),
			new Vector3(0,0,-34.64102),
			new Vector3(15,0,-25.98077),
			new Vector3(30,0,-17.32051),
			new Vector3(30,0,0),
			new Vector3(30,0,17.32051),
			new Vector3(15,0,25.98077),
			new Vector3(0,0,51.96153),
			new Vector3(-15,0,43.30128),
			new Vector3(-30,0,34.64102),
			new Vector3(-45,0,25.98077),
			new Vector3(-45,0,8.660257),
			new Vector3(-45,0,-8.660257),
			new Vector3(-45,0,-25.98077),
			new Vector3(-30,0, -34.64102),
			new Vector3(-15,0,-43.30128),
			new Vector3(0,0,-51.96153),
			new Vector3(15,0,-43.30128),
			new Vector3(30,0,-34.64102),
			new Vector3(45,0, -25.98077),
			new Vector3(45,0, -8.660257),
			new Vector3(45,0, 8.660257),
			new Vector3(45,0, 25.98077),
			new Vector3(30,0,34.64102),
			new Vector3(15,0, 43.30128),
			new Vector3(0,0,69.28204),
			new Vector3(-15,0,60.62179),
			new Vector3(-30,0, 51.96153),
			new Vector3(-45,0, 43.30128),
			new Vector3(-60,0,34.64102),
			new Vector3(-60,0, 17.32051),
			new Vector3(-60,0,0),
			new Vector3(-60,0,-17.32051),
			new Vector3(-60,0, -34.64102),
			new Vector3(-45,0, -43.30128),
			new Vector3(-30,0, -51.96153),
			new Vector3(-15,0, -60.62179),
			new Vector3(0,0,-69.28204),
			new Vector3(15,0, -60.62179),
			new Vector3(30,0, -51.96153),
			new Vector3(45,0, -43.30128),
			new Vector3(60,0, -34.64102),
			new Vector3(60,0,-17.32051),
			new Vector3(60,0, 0),
			new Vector3(60,0, 17.32051),
			new Vector3(60,0,34.64102),
			new Vector3(45,0, 43.30128),
			new Vector3(30 ,0, 51.96153), 
			new Vector3(15, 0, 60.62179),
			new Vector3(15,0,77.9423),
			
			new Vector3(0,0, 86.60255),
			new Vector3(-15,0, 77.9423),
			new Vector3(-30,0, 69.28204),
			new Vector3(-45,0, 60.62179),
			new Vector3(-60,0,51.96153),
			new Vector3(-75,0, 43.30128),
			new Vector3(-75,0, 25.98077),
			new Vector3(-75,0,8.660253),
			new Vector3(-75,0,-8.660253),
			new Vector3(-75,0,-25.98077),
			new Vector3(-75,0, -43.30128),
			new Vector3(-60,0,-51.96153),
			new Vector3(-45,0,-60.62179),
			new Vector3(-30,0, -69.28204),
			new Vector3(-15,0,-77.9423),
			new Vector3(0,0,-86.60255),
			new Vector3(15,0,-77.9423),
			new Vector3(30,0,-69.28204),
			new Vector3(45,0, -60.62179),
			new Vector3(60,0,-51.96153),
			new Vector3(75,0,-43.30128),
			new Vector3(75,0, -25.98077),
			new Vector3(75,0, -8.660254),
			new Vector3(75,0,8.6625),
			new Vector3(75,0,25.98077),
			new Vector3(75,0,43.30128),
			new Vector3(60,0,51.96153),
			new Vector3(45,0,60.62179),
			new Vector3(30,0,69.28204),
			new Vector3(15,0, 77.9423)];

//counts how many constituents are created
static var	hexCount: int;	
static var	cybCount: int;	
static var	eldCount: int;	
static var	virCount: int;	
static var	humCount: int;	
static var	natCount: int;	
static var	evoCount: int;	

static var	hexCountthird: int;	//entire count of hexes times 2/3
//will hold half of the constituent counts
static var	cybCounthalf: int;	
static var	eldCounthalf: int;	
static var	virCounthalf: int;	
static var	humCounthalf: int;	
static var	natCounthalf: int;	
static var	evoCounthalf: int;	

//holds the half count of constituents minus the constituents that are clicked on
static var	hexCountthird2: int;	
static var	cybCounthalf2: int;	
static var	eldCounthalf2: int;	
static var	virCounthalf2: int;	
static var	humCounthalf2: int;	
static var	natCounthalf2: int;	
static var	evoCounthalf2: int;	

//counts the constituents that are click oned
static var	hexCountminus: int;	
static var	cybCountminus: int;	
static var	eldCountminus: int;	
static var	virCountminus: int;	
static var	humCountminus: int;	
static var	natCountminus: int;	
static var	evoCountminus: int;	;

//resources in the bill
static var resA: int;
static var resB: int;
static var resC: int;
static var resD: int;
static var resE: int;

//bank, has resources added to it
static var Bank: int;
static var BankA: int;
static var BankB: int;
static var BankC: int;
static var BankD: int;
static var BankE: int;

var show: boolean = false; //turns of 'add to bank' button
var show2: boolean = true;//will turn of bank
var disabled: boolean = false;

var ran1: int;
var ran2: int;
var ran3: int;
var ran4: int;
var ran5: int;
var ran6: int;
var ran7: int;
var ran8: int;
var ran9: int;
var ran10: int;

var ranLetter1: int;
var ranLetter2: int;
var ranLetter3: int;
var ranLetter4: int;
var ranLetter5: int;
var ranLetter6: int;
var ranLetter7: int;
var ranLetter8: int;
var ranLetter9: int;
var ranLetter10: int;

var letter1: String;
var letter2: String;
var letter3: String;
var letter4: String;
var letter5: String;
var letter6: String;
var letter7: String;
var letter8: String;
var letter9: String;
var letter10: String;

var ranBoolean1: boolean = false;
var ranBoolean2: boolean = false;
var ranBoolean3: boolean = false;
var ranBoolean4: boolean = false;
var ranBoolean5: boolean = false;
var ranBoolean6: boolean = false;
var ranBoolean7: boolean = false;
var ranBoolean8: boolean = false;
var ranBoolean9: boolean = false;
var ranBoolean10: boolean = false;

//shows article buttons, activated in button.js after u choose party
var showArticles: boolean = false;
var havewon: boolean = false;
var legislate02: boolean = false;
var displayLegislate: boolean = true;
var hexDes: GameObject[];
var ballDes: GameObject[];
var conDes : GameObject[];
static var lastPosition: Vector3;
static var planPosition: Vector3;
var camera01: Camera;
var camera02: Camera;

static var tripCost: int = 0;
var ship: Transform;
static var showTrip: boolean = true;

//stops the ship from flying if while it is already flying, used in SinglePlanet script
static var preventFlying = false;
var randomPlanet: String;
var planetArray : String[];
var fixBug: boolean = false;
function Start () 
{
	camera02.rect = new Rect(0,0,0,0);
	//randomize values in your bank upon start	
	BankA= Random.Range(100,251);
	BankB= Random.Range(100,251);
	BankC= Random.Range(100,251);
	BankD= Random.Range(100,251);
	BankE= Random.Range(100,251);
	Bank = BankA+ BankB + BankC +BankD + BankE;
	showprompt = true;
	
	// values of bill	
	resA = 0;
	resB = 0;
	resC = 0;
	resD = 0;
	resE = 0;
	RandomizeArticles();
	article();
	lastPosition = Vector3(0,0,0);
	planPosition = Vector3(0,0,0);
	print("last position: " +lastPosition);
	
	planetArray = ["Plato","Diogenes","Kant","Hegel","Locke","Burke","Hobbes","Aristotle","Hume","Descartes","Aquinas","Nietzsche",
"Spinoza","Rousseau","Ford","Morgan","Rockerfeller","Carnegie","Walton","Watson","Rothschild","Disnii","Kroc",
"Nobel","Kaiser","Sloan","Toyoda","Lever","Luce","Ward","Boulton","Harriman","Wedgwood","Swope","Jobs","Gates",
"Edison","Winfrey","Page","Brin","Smith","Astor","Vanderbilt","Medici","Newton","Einstein","Darwin","Bohr","Pasteur",
"Galilee","Lavoisier","Kepler", "Copernicus","Faraday","Maxwell","Tesla","Heisenberg","Pauling","Schrodinger","Rutherford",
"Dirac","Vesalius","Brahe","Buffon","Boltzmann","Planck","Curie","Herschel","Lyell","Hubble","Crick","Fermi","Euler",
"Liebig", "Lincoln", "Roosevelt", "Washington", "Jefferson", "Roosevelt II","Wilson", "Truman", "Jackson", "Eisenhowser",
"Polk","Kennedy","Adams","Madison","Monroe","Johnson","Attlee","Churchill","Blair","Thatcher","Macmillan","George",
"Asquith","Baldwin","Wilson","Salisbury","Campbell","Callaghan","Heath","Macdonald","Major"];
	
}

function article(){
	if(ranLetter1 == 1 || ranLetter1 == 2 || ranLetter1 == 3){
		letter1 = "A";
	}
	if(ranLetter1 ==4 || ranLetter1 == 5 || ranLetter1 == 6){
		letter1 = "B";
	}
	if(ranLetter1 ==7 || ranLetter1 == 8 ){
		letter1 = "C";
	}
	if(ranLetter1 ==9){
		letter1 = "D";
	}
	if(ranLetter1 ==10){
		letter1 = "E";
	}
	
	if(ranLetter2 ==1 || ranLetter2 == 2 || ranLetter2 == 3){
		letter2 = "A";
	}
	if(ranLetter2 == 4 || ranLetter2 == 5 || ranLetter2 == 6){
		letter2 = "B";
	}
	if(ranLetter2 == 7 || ranLetter2 == 8){
		letter2 = "C";
	}
	if(ranLetter2 == 9){
		letter2 = "D";
	}
	if(ranLetter2 ==10){
		letter2 = "E";
	}
	
	if(ranLetter3 ==1 || ranLetter3 == 2 || ranLetter3 == 3){
		letter3 = "A";
	}
	if(ranLetter3 == 4 || ranLetter3 == 5 || ranLetter3 == 6){
		letter3 = "B";
	}
	if(ranLetter3 == 7 || ranLetter3 == 8){
		letter3 = "C";
	}
	if(ranLetter3 == 9){
		letter3 = "D";
	}
	if(ranLetter3 ==10){
		letter3 = "E";
	}
	
	if(ranLetter4 ==1 || ranLetter4 == 2 || ranLetter4 == 3){
		letter4 = "A";
	}
	if(ranLetter4 == 4 || ranLetter4 == 5 || ranLetter4 == 6){
		letter4 = "B";
	}
	if(ranLetter4 == 7 || ranLetter4 == 8){
		letter4 = "C";
	}
	if(ranLetter4 == 9){
		letter4 = "D";
	}
	if(ranLetter4 ==10){
		letter4 = "E";
	}
	
	if(ranLetter5 ==1 || ranLetter5 == 2 || ranLetter5 == 3){
		letter5 = "A";
	}
	if(ranLetter5 == 4 || ranLetter5 == 5 || ranLetter5 == 6){
		letter5 = "B";
	}
	if(ranLetter5 == 7 || ranLetter5 == 8){
		letter5 = "C";
	}
	if(ranLetter5 == 9){
		letter5 = "D";
	}
	if(ranLetter5 ==10){
		letter5 = "E";
	}
	
	
	if(ranLetter6 ==1 || ranLetter6 == 2 || ranLetter6 == 3){
		letter6 = "A";
	}
	if(ranLetter6 == 4 || ranLetter6 == 5 || ranLetter6 == 6){
		letter6 = "B";
	}
	if(ranLetter6 == 7 || ranLetter6 == 8){
		letter6 = "C";
	}
	if(ranLetter6 == 9){
		letter6 = "D";
	}
	if(ranLetter6 ==10){
		letter6 = "E";
	}
	
	if(ranLetter7 ==1 || ranLetter7 == 2 || ranLetter7 == 3){
		letter7 = "A";
	}
	if(ranLetter7 == 4 || ranLetter7 == 5 || ranLetter7 == 6){
		letter7 = "B";
	}
	if(ranLetter7 == 7 || ranLetter7 == 8){
		letter7 = "C";
	}
	if(ranLetter7 == 9){
		letter7 = "D";
	}
	if(ranLetter7 ==10){
		letter7 = "E";
	}
	
	if(ranLetter8 ==1 || ranLetter8 == 2 || ranLetter8 == 3){
		letter8 = "A";
	}
	if(ranLetter8 == 4 || ranLetter8 == 5 || ranLetter8 == 6){
		letter8 = "B";
	}
	if(ranLetter8 == 7 || ranLetter8 == 8){
		letter8 = "C";
	}
	if(ranLetter8 == 9){
		letter8 = "D";
	}
	if(ranLetter8 ==10){
		letter8 = "E";
	}
	
	if(ranLetter9 ==1 || ranLetter9 == 2 || ranLetter9 == 3){
		letter9 = "A";
	}
	if(ranLetter9 == 4 || ranLetter9 == 5 || ranLetter9 == 6){
		letter9 = "B";
	}
	if(ranLetter9 == 7 || ranLetter9 == 8){
		letter9 = "C";
	}
	if(ranLetter9 == 9){
		letter9 = "D";
	}
	if(ranLetter9 ==10){
		letter9 = "E";
	}
	
	if(ranLetter10 ==1 || ranLetter10 == 2 || ranLetter10 == 3){
		letter10 = "A";
	}
	if(ranLetter10 == 4 || ranLetter10 == 5 || ranLetter10 == 6){
		letter10 = "B";
	}
	if(ranLetter10 == 7 || ranLetter10 == 8){
		letter10 = "C";
	}
	if(ranLetter10 == 9){
		letter10 = "D";
	}
	if(ranLetter10 ==10){
		letter10 = "E";
	}
}

var tripDisplay:boolean = true;
function OnGUI () 
{
if(showArticles == true)
{
	if (tripDisplay == true){
		if(showTrip == true)
		{
			if(GUI.Button(Rect(120,40,100,25), "Plan Trip"))
				{
					shipScript.startFlying = false;
					singleplanetscript.plan = true;
					print("ship.Position is: " +ship.position);
					showTrip = false;
				}
		}
		if(showTrip == false)
		{
			if(GUI.Button(Rect(120,40,100,25), "End Trip"))
				{
					shipScript.startFlying = true;
					singleplanetscript.plan = false; 
					tripCost = 0;
					showTrip = true;
				}
		}
		
		GUI.Label(Rect(140,80,130, 25), "Total Fleet Cost: " +tripCost);
	}
	if (legislate02 == false){
	GUI.BeginGroup (new Rect (Screen.width/2.1, Screen.height-160, 600, 70)); //articles and legislate button
	//Legislate button switches camera to show hex game
		if(GUI.Button(Rect(190, 40, 140, 25), "Legislate"))
		{
			CreateHexes();
			articleBUT = true;
			//show = false;
			buttonScript.legislate = true;
			legislate02 = true;
			havewon = true;
			planetGuiScript.showPlanetDetails = false;
			singleplanetscript.turnOffPlanet = true;
			hoverTextScript.showPlanetTexture = true;
			//Camera.main.rect = new Rect(0,0,0,0); //resizes the main camera to zero
			camera02.rect = new Rect(0,0,1,1);//resizes the second camera to fill the screen
			tripDisplay = false;
			
			
//----------------Fixes hex cost bug-----------------
			if(fixBug == true)
			{
				hexDes = GameObject.FindGameObjectsWithTag("hexagon");
				ballDes = GameObject.FindGameObjectsWithTag("ball");
				conDes = GameObject.FindGameObjectsWithTag("constituent");
				for(var c = 0; c < hexDes.length; c++){
					Destroy(hexDes[c]);
				}
				for(var d = 0; d < conDes.length; d++){
					Destroy(conDes[d]);
				}
				for(var s = 0; s < ballDes.length; s++){
					Destroy(ballDes[s]);
				}
				RandomizeArticles();
				//CreateHexes();
				fixBug = false;
				
				CreateHexes();
			articleBUT = true;
			//show = false;
			buttonScript.legislate = true;
			legislate02 = true;
			havewon = true;
			planetGuiScript.showPlanetDetails = false;
			singleplanetscript.turnOffPlanet = true;
			hoverTextScript.showPlanetTexture = true;
			//Camera.main.rect = new Rect(0,0,0,0); //resizes the main camera to zero
			camera02.rect = new Rect(0,0,1,1);//resizes the second camera to fill the screen
			tripDisplay = false;
			}	
		}
	
//----------------Articles---------------------
		if (ranBoolean1 == false){
			if (GUI.Button(Rect(0, 0, 50, 25), "" + ran1 + letter1)){
				buttonScript.economy --;
				if(letter1 == "A"){
				//adds article amount to bill
					resA = resA + ran1;
				}
				else if(letter1 == "B"){
					resB = resB + ran1;
				}
				else if(letter1 == "C"){
					resC = resC + ran1;
				}
				else if(letter1 == "D"){
					resD = resD + ran1;
				}
				else if(letter1 == "E"){
					resE = resE + ran1;
				}
				ranBoolean1 = true;
				print("Letter: " +letter1);
			}
		}
		
		if (ranBoolean2 == false){
			if (GUI.Button(Rect(60, 0, 50, 25), "" + ran2 + letter2)){
				buttonScript.economy --;
				if(letter2 == "A"){
					resA = resA + ran2;
				}
				else if(letter2 == "B"){
					resB = resB + ran2;
				}
				else if(letter2 == "C"){
					resC = resC + ran2;
				}
				else if(letter2 == "D"){
					resD = resD + ran2;
				}
				else if(letter2 == "E"){
					resE = resE + ran2;
				}
				ranBoolean2 = true;
				print("Letter: " +letter2);
			}
		}
		
		if (ranBoolean3 == false){
			if (GUI.Button(Rect(120, 0, 50, 25), "" + ran3 + letter3)){
				buttonScript.economy --;
				if(letter3 == "A"){
					resA = resA + ran3;
				}
				else if(letter3 == "B"){
					resB = resB + ran3;
				}
				else if(letter3 == "C"){
					resC = resC + ran3;
				}
				else if(letter3 == "D"){
					resD = resD + ran3;
				}
				else if(letter3 == "E"){
					resE = resE + ran3;
				}
				ranBoolean3 = true;
				print("Letter: " +letter3);
			}
		}
		
		if (ranBoolean4 == false){
			if (GUI.Button(Rect(180, 0, 50, 25), "" + ran4 + letter4)){
				buttonScript.economy --;
				if(letter4 == "A"){
					resA = resA + ran4;
				}
				else if(letter4 == "B"){
					resB = resB + ran4;
				}
				else if(letter4 == "C"){
					resC = resC + ran4;
				}
				else if(letter4 == "D"){
					resD = resD + ran4;
				}
				else if(letter4 == "E"){
					resE = resE + ran4;
				}
				ranBoolean4 = true;
				print("Letter: " +letter4);
			}
		}
		
		
		if (ranBoolean5 == false){
			if (GUI.Button(Rect(240, 0, 50, 25), "" + ran5 + letter5)){
				buttonScript.economy --;
				if(letter5 == "A"){
					resA = resA + ran5;
				}
				else if(letter5 == "B"){
					resB = resB + ran5;
				}
				else if(letter5 == "C"){
					resC = resC + ran5;
				}
				else if(letter5 == "D"){
					resD = resD + ran5;
				}
				else if(letter5 == "E"){
					resE = resE + ran5;
				}
				ranBoolean5 = true;
				print("Letter: " +letter5);
			}
		}	
		if (ranBoolean6 == false){
			if (GUI.Button(Rect(300, 0, 50, 25), "" + ran6 + letter6)){
				buttonScript.economy --;
				if(letter6 == "A"){
					resA = resA + ran6;
				}
				else if(letter6 == "B"){
					resB = resB + ran6;
				}
				else if(letter6 == "C"){
					resC = resC + ran6;
				}
				else if(letter6 == "D"){
					resD = resD + ran6;
				}
				else if(letter6 == "E"){
					resE = resE + ran6;
				}
				ranBoolean6 = true;
				print("Letter: " +letter6);
			}
		}
		if (ranBoolean7 == false){
			if (GUI.Button(Rect(360, 0, 50, 25), "" + ran7 + letter7)){
				buttonScript.economy --;
				if(letter7 == "A"){
					resA = resA + ran7;
				}
				else if(letter7 == "B"){
					resB = resB + ran7;
				}
				else if(letter7 == "C"){
					resC = resC + ran7;
				}
				else if(letter7 == "D"){
					resD = resD + ran7;
				}
				else if(letter7 == "E"){
					resE = resE + ran7;
				}
				ranBoolean7 = true;
				print("Letter: " +letter7);
			}
		}
		
		if (ranBoolean8 == false){
			if (GUI.Button(Rect(420, 0, 50, 25), "" + ran8 + letter8)){
				buttonScript.economy --;
				if(letter8 == "A"){
					resA = resA + ran8;
				}
				else if(letter8 == "B"){
					resB = resB + ran8;
				}
				else if(letter8 == "C"){
					resC = resC + ran8;
				}
				else if(letter8 == "D"){
					resD = resD + ran8;
				}
				else if(letter8 == "E"){
					resE = resE + ran8;
				}
				ranBoolean8 = true;
				print("Letter: " +letter8);
			}
		}
		
		if (ranBoolean9 == false){
			if (GUI.Button(Rect(480, 0, 50, 25), "" + ran9 + letter9)){
				buttonScript.economy --;
				if(letter9 == "A"){
					resA = resA + ran9;
				}
				else if(letter9 == "B"){
					resB = resB + ran9;
				}
				else if(letter9 == "C"){
					resC = resC + ran9;
				}
				else if(letter9 == "D"){
					resD = resD + ran9;
				}
				else if(letter9 == "E"){
					resE = resE + ran9;
				}
				ranBoolean9 = true;
				print("Letter: " +letter9);
			}
		}
		
		if (ranBoolean10 == false){
			if (GUI.Button(Rect(540, 0, 50, 25), "" + ran10 + letter10)){
				buttonScript.economy --;
				if(letter10 == "A"){
					resA = resA + ran10;
				}
				else if(letter10 == "B"){
					resB = resB + ran10;
				}
				else if(letter10 == "C"){
					resC = resC + ran10;
				}
				else if(letter10 == "D"){
					resD = resD + ran10;
				}
				else if(letter10 == "E"){
					resE = resE + ran10;
				}
				ranBoolean10 = true;
				print("Letter: " +letter10);
			}
		}
//--------end of Articles-----------
		GUI.EndGroup ();
	}
	else
		{
			if (GUI.Button(Rect(Screen.width/1.3, 570, 140, 60), "Forfeit"))
				{
					hexDes = GameObject.FindGameObjectsWithTag("hexagon");
					ballDes = GameObject.FindGameObjectsWithTag("ball");
					conDes = GameObject.FindGameObjectsWithTag("constituent");
					displayLegislate = false;
					articleBUT = false;
					singleplanetscript.turnOffPlanet = false;
					planetGuiScript.showPlanetDetails = true;
					hoverTextScript.showPlanetTexture = false;
					//planetGuiScript.showPlanetDetails = true;
					//show = true;//turns on add to bank button
					buttonScript.legislate = false;
					legislate02 = false;
					show2 = true; //turns on bill resources
					ship.position = mouseOrbitScript.target.position;
					RandomizeArticles();
					
					for(var b = 0; b < hexDes.length; b++){
						Destroy(hexDes[b]);
					}
					for(var n = 0; n < conDes.length; n++){
						Destroy(conDes[n]);
					}
					for(var r = 0; r < ballDes.length; r++){
						Destroy(ballDes[r]);
					}
					camera02.rect = new Rect(0,0,-1,-1);
					//camera02.depth++;
					//Camera.main.rect = new Rect(0,0,1,1);
					resA = 0;
					resB = 0;
					resC = 0;
					resD = 0;
					resE = 0;
					hexCount = 0;
					hexCountthird = 0;
					cybCount = 0;
					eldCount = 0;
					virCount = 0;
					natCount = 0;
					humCount = 0;
					evoCount = 0;
					cybCountminus = 0;
					eldCountminus = 0;
					virCountminus = 0;
					natCountminus = 0;
					humCountminus = 0;
					evoCountminus = 0;
					fixBug = true;
				}
		}
	if (show2 ==true)
		{ //shows the values of the bill
			GUI.Label (Rect (Screen.width-120, 30,120,400),"Bill:  \nResource A: " + resA + 
				"\nResourceB: " + resB + "\nResoourceC: " +resC + "\nResourceD: " + resD + "\nResourceE: " + resE);
		}
		GUI.Label (Rect (Screen.width-120, 150,120,400),"Bank: " + Bank+ "\nAll Resource A: " + BankA + 
			"\nAll ResourceB: " + BankB + "\nAll ResoourceC: " +BankC + "\nAll ResourceD: " + BankD + "\nAll ResourceE: " + BankE);
		
		//print(cybCounthalf2);
		// find 2/3 of the hex grid
		hexCountthird = (hexCount *2)/3;
//		//find half of each constituents
		cybCounthalf = cybCount/2;
		eldCounthalf = eldCount/2;
		virCounthalf = virCount/2;
		humCounthalf = humCount/2;
		natCounthalf = natCount/2;
		evoCounthalf = evoCount/2;

if (havewon == true){
	//first win condition, if half of each constituent
	if(cybCounthalf <= cybCountminus && eldCounthalf <= eldCountminus && virCounthalf <= virCount && natCounthalf<= natCountminus && humCounthalf <= humCountminus && evoCounthalf <= evoCountminus)
	{
		if(cybCount != 0 && eldCount != 0 && virCount != 0 && natCount != 0 && humCount != 0 && evoCount != 0)
		{
			print("u have won half of all constituents");
			if (GUI.Button(Rect(Screen.width/1.3, 500,90,40),"Pass Bill"))
			{
				displayLegislate = false;
					articleBUT = false;
					//show = true;//turns on add to bank button
					buttonScript.legislate = false;
					legislate02 = false;
					show2 = true; //turns on bill resources
				AddUpBank(); //calls AddUpBank() function
				show2 = false; //turns off bill resources
				//show = false; //turns off 'add to bank' button
				singleplanetscript.turnOffPlanet = false;
				planetGuiScript.showPlanetDetails = true;
				hexDes = GameObject.FindGameObjectsWithTag("hexagon");
				ballDes = GameObject.FindGameObjectsWithTag("ball");
				conDes = GameObject.FindGameObjectsWithTag("constituent");
				
				for(var p = 0; p < hexDes.length; p++){
					Destroy(hexDes[p]);
				}
				for(var l = 0; l < conDes.length; l++){
					Destroy(conDes[l]);
				}
				for(var hr = 0; hr < ballDes.length; hr++){
					Destroy(ballDes[hr]);
				}
				camera02.rect = new Rect(0,0,0,0);
				Camera.main.rect = new Rect(0,0,1,1);
				hexCount = 0;
				hexCountthird = 0;
				cybCount = 0;
				eldCount = 0;
				virCount = 0;
				natCount = 0;
				humCount = 0;
				evoCount = 0;
				cybCountminus = 0;
				eldCountminus = 0;
				virCountminus = 0;
				natCountminus = 0;
				humCountminus = 0;
				evoCountminus = 0;
        		havewon = false;
        		tripDisplay = true;
        		fixBug = true;
        		
			}
		}	
	}
	
	// second win condition, if all 2/3 of hexes
	if(greenHexCount == hexCountthird && greenHexCount != 0)
	{
		print("you are winnar!");
		if (GUI.Button(Rect(Screen.width/1.3, 500,90,40),"Pass Bill"))
		{
			displayLegislate = false;
					articleBUT = false;
					buttonScript.legislate = false;
					legislate02 = false;
					show2 = true; //turns on bill resources
				AddUpBank(); //calls AddUpBank() function
				show2 = false; //turns off bill resources
				singleplanetscript.turnOffPlanet = false;
				planetGuiScript.showPlanetDetails = true;
			
			hexDes = GameObject.FindGameObjectsWithTag("hexagon");
			ballDes = GameObject.FindGameObjectsWithTag("ball");
			conDes = GameObject.FindGameObjectsWithTag("constituent");
			
			for(var q = 0; q < hexDes.length; q++){
				Destroy(hexDes[q]);
			}
			for(var z = 0; z < conDes.length; z++){
				Destroy(conDes[z]);
			}
			for(var h = 0; h < ballDes.length; h++){
				Destroy(ballDes[h]);
				}
			camera02.rect = new Rect(0,0,0,0);
			Camera.main.rect = new Rect(0,0,1,1);
			hexCount = 0;
			hexCountthird = 0;
			cybCount = 0;
			eldCount = 0;
			virCount = 0;
			natCount = 0;
			humCount = 0;
			evoCount = 0;
			cybCountminus = 0;
			eldCountminus = 0;
			virCountminus = 0;
			natCountminus = 0;
			humCountminus = 0;
			evoCountminus = 0;
    		havewon = false;
    		tripDisplay = true;
    		fixBug = true;
		}
	}
}

		// second win condition, if all 2/3 of hexes
//		if(greenHexCount == hexCountthird && greenHexCount != 0)
//		{
//			print("you are winnar!");
//			havewon = true;
//		}
		
		//display values of the half constituent counts and 2/3 board
		GUI.Label (Rect (Screen.width-150, (Screen.height-(Screen.height/3)),120,24),"HexCount: " + hexCount + " " + hexCountthird);
		GUI.Label (Rect (Screen.width-160, (Screen.height/2.7),200,400),"Cyberean (magenta): " + (cybCount/2) + " " +cybCountminus +"\nElderean (light grey): " +(eldCount/2) + " " + eldCountminus + "\nVirtualist (orange): " +(virCount/2) + " " + virCountminus + "\nNaturalistn (green): " +(natCount/2) + " " + natCountminus +"\nHumanist (black): " +(humCount/2) + " " + humCountminus +"\nEvolutionist (yellow): " +(evoCount/2) + " " + evoCountminus);
	}
}//ends OnGUI

	
function AddUpBank(){
//called when show = true, this adds resources to bank
	BankA = BankA + resA;
	BankB = BankB + resB;
	BankC = BankC + resC;
	BankD = BankD + resD;
	BankE = BankE + resE;
	Bank = BankA+ BankB + BankC +BankD + BankE;
	
}

function CreateHexes()
{
	//creates hexes
	for( var i=0; i<61; i++) //makes hexes
	{
		Instantiate(hex, hexVectors[i],Quaternion.Euler(270, 180, 0));
	}
	
}
// randomizes articles used for Bill
function RandomizeArticles()
	{
		//rerolls article numbers
		ran1 = Random.Range(1,11);
		ran2 = Random.Range(1,11);
		ran3 = Random.Range(1,11);
		ran4 = Random.Range(1,11);
		ran5 = Random.Range(1,11);
		ran6 = Random.Range(1,11);
		ran7 = Random.Range(1,11);
		ran8 = Random.Range(1,11);
		ran9 = Random.Range(1,11);
		ran10 = Random.Range(1,11);
		
		//rerolls article letters
		ranLetter1 = Random.Range(1,11);
		ranLetter2 = Random.Range(1,11);
		ranLetter3 = Random.Range(1,11);
		ranLetter4 = Random.Range(1,11);
		ranLetter5 = Random.Range(1,11);
		ranLetter6 = Random.Range(1,11);
		ranLetter7 = Random.Range(1,11);
		ranLetter8 = Random.Range(1,11);
		ranLetter9 = Random.Range(1,11);
		ranLetter10 = Random.Range(1,11);
		article();
		
		//resets article buttons
		ranBoolean1 = false;
		ranBoolean2 = false;
		ranBoolean3 = false;
		ranBoolean4 = false;
		ranBoolean5 = false;
		ranBoolean6 = false;
		ranBoolean7 = false;
		ranBoolean8 = false;
		ranBoolean9 = false;
		ranBoolean10 = false;
		
	}

function Update()
	{
	}