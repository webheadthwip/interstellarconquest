//constituent number
var constituent1 : Texture;
var constituent2 : Texture;
var constituent3 : Texture;
var constituent4 : Texture;
var constituent5 : Texture;

//string value of constituent
var constituent1Str : String = "";
var constituent2Str : String = "";
var constituent3Str : String = "";
var constituent4Str : String = "";
var constituent5Str : String = "";


//boolean for constituent select screen
var varb: boolean = false;

//holds the value of player's constituent identity
var yourConst: int =0;

//colllects the value from the theStamina variable from the Stamina();
var stamina1: int;
var stamina2: int;
var stamina3: int;
var stamina4: int;
var stamina5: int;

//takes in a random value and gets passed through stamina();
var stamRan1: int;
var stamRan2: int;
var stamRan3: int;
var stamRan4: int;
var stamRan5: int;

//takes in random value between 1 and 10 (11)
var resources1: int;
var resources2: int;
var resources3: int;
var resources4: int;
var resources5: int;

//resource# gets converted into a string
var resources1Str: String;
var resources2Str: String;
var resources3Str: String;
var resources4Str: String;
var resources5Str: String;

//disables lesgislate button
var disabled: boolean = false;
//is a value from the stamina() function
var theStamina: int;

//the economy value
var economy: int;

//stamina bar length
static var staminaShort: int = 30;

//the image of the stamina bar
var staminaGauge: Texture2D;

//counts each constituent
var cybereanCount: int;
var eldereanCount: int;
var virtualistCount: int;
var naturalistCount: int;
var humanistCount: int;
var evolutionistCount: int;

//counts each constituent for each constituent and hold value for count
var cybereanCandidateCount: int;
var eldereanCandidateCount: int;
var virtualistCandidateCount: int;
var naturalistCandidateCount: int;
var humanistCandidateCount: int;
var evolutionistCandidateCount: int;

//holds numerical value of resource
var resourceNum1: int;
var resourceNum2: int;
var resourceNum3: int;
var resourceNum4: int;
var resourceNum5: int;

//controls layers for the hover over in onGUI
var guiDepth : int =1;

//toggle/radio button variables
private var toggle01Img: boolean = false;
private var toggle02Img: boolean = false;
private var toggle03Img: boolean = false;
private var toggle04Img: boolean = false;
private var toggle05Img: boolean = false;
private var toggle06Img: boolean = false;
private var toggle07Img: boolean = false;
private var toggle08Img: boolean = false;
private var toggle09Img: boolean = false;
private var toggle10Img: boolean = false;

//start script usage
var start: Start;

var constitPrompt: int =1;

//canidate variables
private var canidateId: int;
var canidateStr: Texture;
//private var canStamina: int;
//This is the amount the computer can spend on clout when making decisions in election box
private var temCanidateClout: int;
private var clout01: int;
private var clout02: int;
private var clout03: int;
private var clout04: int;
private var clout05: int;

//compares clouts
var countArray = new Array();
var constituentArray = new Array();

//var line01 = new Line();
var randomConstituent: Texture;

var highlight01: boolean = false;
var highlight02: boolean = false;
var highlight03: boolean = false;
var highlight04: boolean = false;
var highlight05: boolean = false;
var greenstuff: Texture;

var toggle01Array = new Array();
var toggle02Array = new Array();
var toggle03Array = new Array();
var toggle04Array = new Array();
var toggle05Array = new Array();

var playerTurn: boolean = true;

var legislate: boolean = false;
static var endTurnOn: boolean = false;
var roundCount: int;
var penaltyCount: int;
var totalSelectedStamina: int;//Stamina sum of all selected constituents
static var line01: boolean = true;
static var line02: boolean = true;
static var line03: boolean = true;
static var line04: boolean = true;
static var line05: boolean = true;
var randomClout1: int;
var randomClout2: int;
var randomClout3: int;
var randomClout4: int;
var randomClout5: int;
//this is a potential modifier to alter what the canidate can spend on constituents in future code
private var canidateCloutMod: int = 0;
var cybereanProfile: Texture;
var eldereanProfile: Texture;
var virtualistProfile: Texture;
var naturalistProfile: Texture;
var humanistProfile: Texture;
var evolutionistProfile: Texture;
function Start ()
{
//randomizes constituents values for each action box
	Constituent();
	constituent1 = randomConstituent;
	Constituent();
	constituent2 = randomConstituent; 
	Constituent();
	constituent3 = randomConstituent;
	Constituent();
	constituent4 = randomConstituent; 
	Constituent();
	constituent5 = randomConstituent; 
//calls the constituent function
	
	
//randomizes the resource (A, B, C, D, E)
	resources1 = Random.Range(1,11);
	resources2 = Random.Range(1,11);
	resources3 = Random.Range(1,11);
	resources4 = Random.Range(1,11);
	resources5 = Random.Range(1,11);
//calls randomResources()
	randomResources();
	
//randomizes values of resources
	resourceNum1 = Random.Range(5,11);
	resourceNum2 = Random.Range(5,11);
	resourceNum3 = Random.Range(5,11);
	resourceNum4 = Random.Range(5,11);
	resourceNum5 = Random.Range(5,11);

	//randomizes clout
	randomClout1 = Random.Range(1,4);
	randomClout2 = Random.Range(1,4);
	randomClout3 = Random.Range(1,4);
	randomClout4 = Random.Range(1,4);
	randomClout5 = Random.Range(1,4);
	Clout();
	
	roundCount = Random.Range(3,8);
	temCanidateClout = 6 + canidateCloutMod;
	economy += 10;
} //end start function

function CanidateIdentity(){
//randomize canidate constitency
	canidateId = Random.Range(1,7);
	//set values to a string
	if (canidateId ==1){
		canidateStr = cybereanProfile;
	}
	
	else if (canidateId ==2){
		canidateStr = eldereanProfile;
	}
	else if (canidateId ==3){
		canidateStr = virtualistProfile;
	}
	else if (canidateId ==4){
		canidateStr = naturalistProfile;
	}
	else if (canidateId ==5){
		canidateStr = humanistProfile;
	}
	else if (canidateId ==6){
		canidateStr = evolutionistProfile;
	}
	
	Clout();
}

function  Clout(){
	//first row
	if (canidateId ==1){ //if canidate is a cyberean
		if (constituent1 ==cybereanProfile || constituent1 == virtualistProfile || constituent1 == evolutionistProfile )
		{
			clout01 = randomClout1;
		}
		else if (constituent1 == eldereanProfile)
		{
			clout01 = randomClout1 + 1;
		}
		else if (constituent1 == naturalistProfile || constituent1 == humanistProfile)
		{
			clout01 = randomClout1 + 2;
		}
	}
	else if (canidateId ==2){ // if canidate is a elderean
		if (constituent1 == eldereanProfile || constituent1 == virtualistProfile )
		{
			clout01 = randomClout1;
		}
		else if (constituent1 == cybereanProfile)
		{
			clout01 = randomClout1 + 1;
		}
		else if (constituent1 == naturalistProfile || constituent1 == humanistProfile  || constituent1 == evolutionistProfile)
		{
			clout01 = randomClout1 + 2;
		}
	}
	
	else if (canidateId ==3){ // if canidate is a virtualist
		if (constituent1 == cybereanProfile || constituent1 == eldereanProfile ||constituent1 == virtualistProfile){
			clout01 = randomClout1;
		}
		else if (constituent1 == naturalistProfile){
			clout01 = randomClout1 + 1;
		}
		else if (constituent1 == humanistProfile || constituent1 == evolutionistProfile){
			clout01 = randomClout1 + 2;
		}
	}
	else if (canidateId ==4){ // if canidate is a naturalist
		if (constituent1 == naturalistProfile || constituent1 == humanistProfile ){
			clout01 = randomClout1;
		}
		else if (constituent1 == virtualistProfile ){
			clout01 = randomClout1 + 1;
		}
		else if (constituent1 == cybereanProfile || constituent1 == eldereanProfile){
			clout01 = randomClout1 + 2;
		}
	}
	else if (canidateId ==5){ // if canidate is a humanist
		if (constituent1 == naturalistProfile || constituent1 == humanistProfile || constituent1 == evolutionistProfile){
			clout01 = randomClout1 + 1;
		}

		else if (constituent1 == cybereanProfile || constituent1 == eldereanProfile || constituent1 == virtualistProfile){
			clout01 = randomClout1 + 2;
		}
	}
	else if (canidateId ==6){ // if canidate is a evolutionist
		if (constituent1 == cybereanProfile || constituent1 == humanistProfile || constituent1 == evolutionistProfile){
			clout01 = randomClout1 + 1;
		}

		else if (constituent1 == naturalistProfile || constituent1 == eldereanProfile || constituent1 == virtualistProfile ){
			clout01 = randomClout1 + 2;
		}
	}
	
	
	//second row
	if (canidateId ==1){ //if canidate is a cyberean
		if (constituent2 == cybereanProfile || constituent2 == virtualistProfile || constituent2 == evolutionistProfile ){
			clout02 = randomClout2;
		}
		else if (constituent2 == eldereanProfile){
			clout02 = randomClout2 + 1;
		}
		else if (constituent2 == naturalistProfile || constituent2 == humanistProfile){
			clout02 = randomClout2 + 2;
		}
	}
	else if (canidateId ==2){ // if canidate is a elderean
		if (constituent2 == eldereanProfile || constituent2 == virtualistProfile ){
			clout02 = randomClout2;
		}
		else if (constituent2 == cybereanProfile){
			clout02 = randomClout2 + 1;
		}
		else if (constituent2 == naturalistProfile || constituent2 == humanistProfile  || constituent2 == evolutionistProfile){
			clout02 = randomClout2 + 2;
		}
	}
	
	else if (canidateId ==3){ // if canidate is a virtualist
		if (constituent2 == cybereanProfile || constituent2 == eldereanProfile ||constituent2 == virtualistProfile){
			clout02 = randomClout2;
		}
		else if (constituent2 == naturalistProfile){
			clout02 = randomClout2 + 1;
		}
		else if (constituent2 == humanistProfile || constituent2 == evolutionistProfile){
			clout02 = randomClout2 + 2;
		}
	}
	else if (canidateId ==4){ // if canidate is a naturalist
		if (constituent2 == naturalistProfile || constituent2 == humanistProfile ){
			clout02 = randomClout2;
		}
		else if (constituent2 == virtualistProfile ){
			clout02 = randomClout2 + 1;
		}
		else if (constituent2 == cybereanProfile || constituent2 == eldereanProfile){
			clout02 = randomClout2 + 2;
		}
	}
	else if (canidateId ==5){ // if canidate is a humanist
		if (constituent2 == naturalistProfile || constituent2 == humanistProfile || constituent2 == evolutionistProfile){
			clout02 = randomClout2;
		}

		else if (constituent2 == cybereanProfile|| constituent2 == eldereanProfile || constituent2 == virtualistProfile){
			clout02 = randomClout2 + 2;
		}
	}
	else if (canidateId ==6){ // if canidate is a evolutionist
		if (constituent2 == cybereanProfile || constituent2 == humanistProfile || constituent2 == evolutionistProfile){
			clout02 = randomClout2;
		}

		else if (constituent2 == naturalistProfile || constituent2 == eldereanProfile || constituent2 == virtualistProfile ){
			clout02 = randomClout2 + 2;
		}
	}
	
	//third row
	if (canidateId ==1){ //if canidate is a cyberean
		if (constituent3 == cybereanProfile || constituent3 == virtualistProfile || constituent3 == evolutionistProfile ){
			clout03 = randomClout3;
		}
		else if (constituent3 == eldereanProfile){
			clout03 = randomClout3 + 1;
		}
		else if (constituent3 == naturalistProfile || constituent3 == humanistProfile){
			clout03 = randomClout3 + 2;
		}
	}
	else if (canidateId ==2){ // if canidate is a elderean
		if (constituent3 == eldereanProfile || constituent3 == virtualistProfile ){
			clout03 = randomClout3;
		}
		else if (constituent3 ==cybereanProfile){
			clout03 = randomClout3 + 1;
		}
		else if (constituent3 == naturalistProfile || constituent3 == humanistProfile  || constituent3 == evolutionistProfile){
			clout03 = randomClout3 + 2;
		}
	}
	
	else if (canidateId ==3){ // if canidate is a virtualist
		if (constituent3 == cybereanProfile || constituent3 == eldereanProfile ||constituent3 == virtualistProfile){
			clout03 = randomClout3;
		}
		else if (constituent3 == naturalistProfile){
			clout03 = randomClout3 + 1;
		}
		else if (constituent3 == humanistProfile || constituent3 == evolutionistProfile){
			clout03 = randomClout3 + 2;
		}
	}
	else if (canidateId ==4){ // if canidate is a naturalist
		if (constituent3 == naturalistProfile || constituent3 == humanistProfile ){
			clout03 = randomClout3;
		}
		else if (constituent3 == virtualistProfile ){
			clout03 = randomClout3 + 1;
		}
		else if (constituent3 == cybereanProfile || constituent3 == eldereanProfile){
			clout03 = randomClout3 + 2;
		}
	}
	else if (canidateId ==5){ // if canidate is a humanist
		if (constituent3 == naturalistProfile || constituent3 == humanistProfile || constituent3 == evolutionistProfile){
			clout03 = randomClout3;
		}

		else if (constituent3 == cybereanProfile || constituent3 == eldereanProfile || constituent3 == virtualistProfile){
			clout03 = randomClout3 + 2;
		}
	}
	else if (canidateId ==6){ // if canidate is a evolutionist
		if (constituent3 == cybereanProfile || constituent3 == humanistProfile || constituent3 == evolutionistProfile){
			clout03 = randomClout3 + 1;
		}

		else if (constituent3 == naturalistProfile || constituent3 == eldereanProfile || constituent3 == evolutionistProfile ){
			clout03 = randomClout3 + 2;
		}
	}
	
	//fourth row
	if (canidateId ==1){ //if canidate is a cyberean
		if (constituent4 == cybereanProfile || constituent4 == virtualistProfile || constituent4 == evolutionistProfile ){
			clout04 = randomClout4;
		}
		else if (constituent4 == eldereanProfile){
			clout04 = randomClout4 + 1;
		}
		else if (constituent4 == naturalistProfile || constituent4 == humanistProfile){
			clout04 = randomClout4 + 2;
		}
	}
	else if (canidateId ==2){ // if canidate is a elderean
		if (constituent4 == eldereanProfile || constituent4 == virtualistProfile ){
			clout04 = randomClout4;
		}
		else if (constituent4 == cybereanProfile){
			clout04 = randomClout4 + 1;
		}
		else if (constituent4 == naturalistProfile || constituent4 == humanistProfile  || constituent4 == evolutionistProfile){
			clout04 = randomClout4 + 2;
		}
	}
	
	else if (canidateId ==3){ // if canidate is a virtualist
		if (constituent4 == cybereanProfile || constituent4 == eldereanProfile ||constituent4 == virtualistProfile){
			clout04 = randomClout4;
		}
		else if (constituent4 == naturalistProfile){
			clout04 = randomClout4 + 1;
		}
		else if (constituent4 == humanistProfile || constituent4 == evolutionistProfile){
			clout04 = randomClout4 + 2;
		}
	}
	else if (canidateId ==4){ // if canidate is a naturalist
		if (constituent4 == naturalistProfile || constituent4 == humanistProfile ){
			clout04 = randomClout4;
		}
		else if (constituent4 == virtualistProfile ){
			clout04 = randomClout4 + 1;
		}
		else if (constituent4 == cybereanProfile || constituent4 == eldereanProfile){
			clout04 = randomClout4 + 2;
		}
	}
	else if (canidateId ==5){ // if canidate is a humanist
		if (constituent4 == naturalistProfile || constituent4 == humanistProfile || constituent4 == evolutionistProfile){
			clout04 = randomClout4;
		}

		else if (constituent4 == cybereanProfile || constituent4 == eldereanProfile || constituent4 == virtualistProfile){
			clout04 = randomClout4 + 2;
		}
	}
	else if (canidateId ==6){ // if canidate is a evolutionist
		if (constituent4 == cybereanProfile || constituent4 == humanistProfile || constituent4 == evolutionistProfile){
			clout04 = randomClout4;
		}

		else if (constituent4 == naturalistProfile || constituent4 == eldereanProfile || constituent4 == virtualistProfile ){
			clout04 = randomClout4 + 2;
		}
	}
	
		//fifth row
	if (canidateId ==1){ //if canidate is a cyberean
		if (constituent5 == cybereanProfile || constituent5 == virtualistProfile || constituent5 == evolutionistProfile ){
			clout05 = randomClout5;
		}
		else if (constituent5 == eldereanProfile){
			clout05 = randomClout5 + 1;
		}
		else if (constituent5 == naturalistProfile || constituent5 == humanistProfile){
			clout05 = randomClout5 + 2;
		}
	}
	else if (canidateId ==2){ // if canidate is a elderean
		if (constituent5 == eldereanProfile || constituent5 == virtualistProfile ){
			clout05 = randomClout5;
		}
		else if (constituent5 == cybereanProfile){
			clout05 = randomClout5 + 1;
		}
		else if (constituent5 == naturalistProfile || constituent5 == humanistProfile  || constituent5 == evolutionistProfile){
			clout05 = randomClout5 + 2;
		}
	}
	
	else if (canidateId ==3){ // if canidate is a virtualist
		if (constituent5 == cybereanProfile || constituent5 == eldereanProfile ||constituent5 == virtualistProfile){
			clout05 = randomClout5;
		}
		else if (constituent5 == naturalistProfile){
			clout05 = randomClout5 + 1;
		}
		else if (constituent5 == humanistProfile || constituent5 == evolutionistProfile){
			clout05 = randomClout5 + 2;
		}
	}
	else if (canidateId ==4){ // if canidate is a naturalist
		if (constituent5 == naturalistProfile || constituent5 == humanistProfile ){
			clout05 = randomClout5;
		}
		else if (constituent5 == virtualistProfile ){
			clout05 = randomClout5 + 1;
		}
		else if (constituent5 == cybereanProfile || constituent5 == eldereanProfile){
			clout05 = randomClout5 + 2;
		}
	}
	else if (canidateId ==5){ // if canidate is a humanist
		if (constituent5 == naturalistProfile || constituent5 == humanistProfile || constituent5 == evolutionistProfile){
			clout05 = randomClout5;
		}

		else if (constituent5 == cybereanProfile || constituent5 == eldereanProfile || constituent5 == virtualistProfile){
			clout05 = randomClout5 + 2;
		}
	}
	else if (canidateId ==6){ // if canidate is a evolutionist
		if (constituent5 == cybereanProfile || constituent5 == humanistProfile || constituent5 == evolutionistProfile){
			clout05 = randomClout5;
		}

		else if (constituent5 == naturalistProfile || constituent5 == eldereanProfile || constituent5 == virtualistProfile ){
			clout05 = randomClout5 + 2;
		}
	}
}

function StaminaValues() {
//this function is called when the player selects their constituents
	varb = true;
	
//stamin value of randomized
	stamRan1 = Random.Range(1,4); 
//stamina() function passes previous variable
	Stamina(stamRan1);
//the stamina() function outputs a value (theStamina) which is set to each of values
	stamina1 = theStamina;
	
	stamRan2 = Random.Range(1,4);
	Stamina(stamRan2);
	stamina2 = theStamina;
	
	stamRan3 = Random.Range(1,4);
	Stamina(stamRan3);
	stamina3 = theStamina;
	
	stamRan4 = Random.Range(1,4);
	Stamina(stamRan4);
	stamina4 = theStamina;
	
	stamRan5 = Random.Range(1,4);
	Stamina(stamRan5);
	stamina5 = theStamina;

}// ends StaminaValues

function OnGUI(){	 

	if(legislate == false){
		GUI.depth = guiDepth;
		guiDepth=1;
		//display stamina bar
		GUI.Label(Rect(5, 20, 65, 30), "Short: " +staminaShort/3);
		//GUI.Label(Rect(5, 55, 65, 30), "Long: " +staminaLong);
		GUI.BeginGroup (new Rect (70, 20, (staminaShort), 30));
	
			GUI.DrawTexture(Rect(0,0,300,30),staminaGauge);   
	
		GUI.EndGroup ();
		//if line is visible and it should be highlighted this highlights the line
		if(highlight01 == true && line01 == true)
		{
			GUI.BeginGroup(new Rect(20, Screen.height-150, 500, 30));
				GUI.DrawTexture(Rect(0,0,500,30),greenstuff);
			GUI.EndGroup ();
			toggle06Img = true;
		}
		if(highlight02 == true && line02 == true)
		{
			GUI.BeginGroup(new Rect(20, Screen.height-120, 500, 30));
				GUI.DrawTexture(Rect(0,0,500,30),greenstuff);
			GUI.EndGroup ();
			
			toggle07Img = true;
		}
		if(highlight03 == true && line03 == true)
		{
			GUI.BeginGroup(new Rect(20, Screen.height-90, 500, 30));
				GUI.DrawTexture(Rect(0,0,500,30),greenstuff);
			GUI.EndGroup ();
			
			toggle08Img = true;
			
		}
		if(highlight04 == true && line04 == true)
		{
			GUI.BeginGroup(new Rect(20, Screen.height-60, 500, 30));
				GUI.DrawTexture(Rect(0,0,500,30),greenstuff);
			GUI.EndGroup ();
			
			toggle09Img = true;
			
		}
		if(highlight05 == true && line05 == true)
		{
			GUI.BeginGroup(new Rect(20, Screen.height-30, 500, 30));
				GUI.DrawTexture(Rect(0,0,500,30),greenstuff);
			GUI.EndGroup ();
			toggle10Img = true;
//			print (toggle10Img);
		}
	
		if (varb ==false){
			if (constitPrompt== 1){
				//code to choose your constituent
				if (GUI.Button(Rect(Screen.width/2, 100, 75, 30), "Cyberean")){
				//your consituent value is saved to a variable
				yourConst = 1;
				constitPrompt = 2;
				
				}
				if (GUI.Button(Rect(Screen.width/2, 150, 75, 30), "elderean")){
					yourConst = 2;
					constitPrompt = 2;
				}
				if (GUI.Button(Rect(Screen.width/2, 200, 75, 30), "virtualist")){
					yourConst = 3;
					constitPrompt = 2;
				}
				if (GUI.Button(Rect(Screen.width/2, 250, 75, 30), "naturalist")){
					yourConst = 4;
					constitPrompt = 2;
				
				}
				if (GUI.Button(Rect(Screen.width/2, 300, 75, 30), "humanist")){
					yourConst = 5;
					constitPrompt = 2;
				}
				if (GUI.Button(Rect(Screen.width/2, 350, 75, 30), "evolutionist")){
					yourConst = 6;
					constitPrompt = 2;
				}
			
			}
			else if (constitPrompt ==2){
				GUI.Label (Rect (Screen.width/2, (Screen.height/2 + 30), 120, 20), "What party are you?");
			
				if (GUI.Button (Rect (Screen.width/2, (Screen.height/2)+60,50,50), "Blue")) {
					start.showArticles=true;
					StaminaValues();
					constitPrompt =0;
					CanidateIdentity();
				}
			
				if (GUI.Button (Rect ((Screen.width/2)+60, (Screen.height/2)+60,50,50), "Red")) {
					//print ("You clicked the Red button!");
					playerparty = 1;
					start.showArticles=true;
					StaminaValues();
					constitPrompt =0;
					CanidateIdentity();
				}
			}
		}
		else{
	
			if(endTurnOn == true)
			{
				if (GUI.Button( Rect(Screen.width/2 -130, Screen.height-80, 75, 25), "End Turn"))
				{
					staminaShort = 30;
					start.RandomizeArticles();
					endTurnOn = false;
					if (penaltyCount > 0){
						penaltyCount --; //this brings the stack back up one level for the poor governing penalty
					}
					print(penaltyCount);
					roundCount = Random.Range(3,8);
					
				}
			}
			GUI.BeginGroup (new Rect (20, Screen.height-160, 500, 250));
			//action buttons appear
			if (line01 == true){
//				toggle01Img = GUI.Toggle(Rect(Screen.width/2, 480, 50, 50), toggle01Img, aTexture);
				if (toggle01Img == false){
					if (GUI.Button(Rect(0, 4, 70, 20),GUIContent ("Select"))){ 
						toggle01Img = true;
					}
				}
				else{
					if (GUI.Button(Rect(0, 4, 70, 20),GUIContent ("Unselect"))){ 
						toggle01Img = false;
					}
				}
				// display constituent string, economy, stamina value, and resource number and letter
				GUI.Label(Rect(100, 0, 32, 32), constituent1); 
				GUI.Label(Rect(142, 0, 80, 20), "Stamina: " +stamina1); 
				GUI.Label(Rect(242, 0, 90, 20), "Clout: " + clout01);
				GUI.Label(Rect(300, 0, 100, 20), "Resource: " + resourceNum1 + " " + resources1Str);
			}
			//2nd action button
			if (line02 == true){
				if (toggle02Img == false){
					if (GUI.Button(Rect(0, 36, 70, 20), "Select")){
						toggle02Img = true;
					}
				}
				else{
					if (GUI.Button(Rect(0, 36, 70, 20), "Unselect")){
						toggle02Img = false;
					}
				}
		
				GUI.Label(Rect(100, 32, 32, 32), constituent2); 
				GUI.Label(Rect(142, 32, 80, 20), "Stamina: " +stamina2); 
				GUI.Label(Rect(242, 32, 90, 20), "Clout: " + clout02);
				GUI.Label(Rect(300, 32, 100, 20), "Resource: " + resourceNum2 + " " + resources2Str);
			}
		//3rd action button
		if (line03 == true){
			if (toggle03Img == false){
				if (GUI.Button(Rect(0, 68, 70, 20), "Select")){
					toggle03Img = true;
	 			}
	 		}
	 		else{
	 			if (GUI.Button(Rect(0, 68, 70, 20), "Unselect")){
					toggle03Img = false;
	 			}
	 		}
			GUI.Label(Rect(100, 64, 32, 32), constituent3);
			GUI.Label(Rect(142, 64, 80, 20), "Stamina: " +stamina3); 
			GUI.Label(Rect(242, 64, 90, 20), "Clout: " + clout03);
			GUI.Label(Rect(300, 64, 100, 20), "Resource: " + resourceNum3 + " " +resources3Str);
		}
		//4th action button
		if (line04 == true){
			if (toggle04Img == false){
				if (GUI.Button(Rect(0, 100, 70, 20), "Select")){
					toggle04Img = true;
				}
			}
			else{
				if (GUI.Button(Rect(0, 100, 70, 20), "Unselect")){
					toggle04Img = false;
				}
			}
			GUI.Label(Rect(100, 96, 32, 32), constituent4);
			GUI.Label(Rect(142, 96, 80, 20), "Stamina: " +stamina4); 
			GUI.Label(Rect(242, 96, 90, 20), "Clout: " + clout04);
			GUI.Label(Rect(300, 96, 100, 20), "Resource: " + resourceNum4 + " " + resources4Str);
		}
		//5thaction button
		if (line05 == true){

			if (toggle05Img ==false){
				if (GUI.Button(Rect(0, 132, 70, 20), "Select")){
					toggle05Img = true;
				}
			}
			else{
				if (GUI.Button(Rect(0, 132, 70, 20), "Unselect")){
					toggle05Img = false;
				}
			}
			GUI.Label(Rect(100, 128, 32, 32), constituent5);
			GUI.Label(Rect(142, 128, 80, 20), "Stamina: " +stamina5); 
			GUI.Label(Rect(242, 128, 90, 20), "Clout: " + clout05);
			GUI.Label(Rect(300, 128, 100, 20), "Resource: " + resourceNum5 + " " + resources5Str);
		
		}
		GUI.EndGroup();
		//keepts track of constituent count
		GUI.Label(Rect(20,50, 100, 30), "Economy: " + economy);
		GUI.Label(Rect(50,80, 100, 30), "You | Opponent");
		GUI.Label(Rect(20,110, 100, 30), "Cyberean: " + cybereanCount + " | " + cybereanCandidateCount);
		GUI.Label(Rect(20,140, 100, 30), "Elderean: " + eldereanCount + " | " + eldereanCandidateCount);
		GUI.Label(Rect(20,170, 100, 30), "Virtualist: " + virtualistCount + " | " + virtualistCandidateCount);
		GUI.Label(Rect(20,200, 100, 30), "Naturalist: " + naturalistCount + " | " + naturalistCandidateCount);
		GUI.Label(Rect(20,230, 100, 30), "Humanist: " + humanistCount + " | " + humanistCandidateCount);
		GUI.Label(Rect(20,260, 110, 30), "Evolutionist: " + evolutionistCount + " | " + evolutionistCandidateCount);
		GUI.Label(Rect(20,290, 100, 30), "Rounds Left: " + roundCount);
		GUI.Label(Rect(20,320, 100, 30), "Canidate Clout: " + temCanidateClout);
	if(playerTurn == true){
		//the Button for changing "turns" between player and opponent
		if (GUI.Button(Rect(Screen.width/2 - 130, Screen.height-150, 75, 25), "Campaign ")){
	
			playerTurn = false;
			
			
			if (toggle05Img == true){
				staminaShort = staminaShort-(stamina5*3);				
				CountConstituents(constituent5);
				line05 = false;
				totalSelectedStamina = totalSelectedStamina + stamina5;//adds up total stamina cost for use in poor governing penalty
			}
			
			if (toggle04Img == true){
				staminaShort = staminaShort-(stamina4*3);		
				CountConstituents(constituent4);
				line04 = false;	
				totalSelectedStamina = totalSelectedStamina + stamina4; //adds up total stamina cost for use in poor governing penalty
			}
			if (toggle03Img == true){
				staminaShort = staminaShort-(stamina3*3);				
				CountConstituents(constituent3);
				line03 = false;	
				totalSelectedStamina = totalSelectedStamina + stamina3; //adds up total stamina cost for use in poor governing penalty
			}
			if (toggle02Img == true){
				staminaShort = staminaShort-(stamina2*3);		
				CountConstituents(constituent2);
				line02 = false;
				totalSelectedStamina = totalSelectedStamina + stamina2; //adds up total stamina cost for use in poor governing penalty
			}
			if (toggle01Img == true){
				//the stamina bar is altered due to stamina value
				staminaShort = staminaShort-(stamina1*3);				
				//Constituent function passes constituent string
				CountConstituents(constituent1);
				line01 = false;		
				totalSelectedStamina = totalSelectedStamina + stamina1;//adds up total stamina cost for use in poor governing penalty
			}
			
			Persuasion();
	//poor governing penalty math		
			if((staminaShort/3) <= totalSelectedStamina)
				{
					penaltyCount++;
				}
			
			if(penaltyCount == 1)
				{
					economy--;
				}
				
			if(penaltyCount == 2)
				{
					economy = economy - 3 ;
				}
			if(penaltyCount == 3)
				{
					economy = economy - 5;
				}
			if(penaltyCount == 4)
				{
					economy = economy - 8;
				}
			if(penaltyCount == 5)
				{
					economy = economy - 11;
				}
			if(penaltyCount == 6)
				{
					economy = economy - 14;
				}
			if(penaltyCount == 7)
				{
					economy = economy - 18;
				}
			if(penaltyCount == 8)
				{
					economy = economy - 22;
				}
			if(penaltyCount == 9)
				{
					economy = economy - 26;
				}
			if(penaltyCount >= 10)
				{
					economy = economy - 30;
				}
			
		}
	}
	else {
//////////////////////////////////////////////////////////////////////////////////////////////////	
			if (GUI.Button(Rect(Screen.width/2 - 130, Screen.height-150, 75, 25), "Canidate's select"))
			{
				temCanidateClout = 6 + canidateCloutMod;
				
				if(toggle10Img == true)
					{
						CountConstituentCandidate(constituent5);
					}
				if(toggle09Img == true)
					{
						CountConstituentCandidate(constituent4);
					}
				if(toggle08Img == true)
					{
						CountConstituentCandidate(constituent3);
					}
				if(toggle07Img == true)
					{
						CountConstituentCandidate(constituent2);
					}
				if(toggle06Img == true)
					{
						CountConstituentCandidate(constituent1);
					}
				
				//counts down the from the allotted number of rounds
				roundCount--;
				
				//stacks clout for next round for unbought constituents
				if(line01 == false && highlight01 == false)
					{
						clout01 = clout01+ clout01;
					}
				if(line02 == false && highlight02 == false)
					{
						clout02 = clout02+ clout02;
					}
				if(line03 == false && highlight03 == false)
					{
						clout03 = clout03+ clout03;
					}
				if(line04 == false && highlight04 == false)
					{
						clout04 = clout04+ clout04;
					}
				if(line05 == false && highlight05 == false)
					{
						clout05 = clout05+ clout05;
					}
				//randomizes new set of constituents
				randomizeRows();
				
				if(roundCount == 0)
					{
						endTurnOn = true;
					}
				playerTurn = true;
				highlight01 = false;
				highlight02 = false;
				highlight03 = false;
				highlight04 = false;
				highlight05 = false;
			
			}
		}
	}
}
}//end of onGUI

function CountConstituents(constituentString: Texture){
//count constituents for each constituent
	if(constituentString == cybereanProfile)
		{
			cybereanCount++;
		}
	if(constituentString == eldereanProfile)
		{
			eldereanCount++;
		}
	if(constituentString == virtualistProfile)
		{
			virtualistCount++;
		}
	if(constituentString == naturalistProfile)
		{
			naturalistCount++;
		}
	if(constituentString == humanistProfile)
		{
			humanistCount++;
		}
	if(constituentString == evolutionistProfile)
		{
			evolutionistCount++;
		}
} //end CountConstituents

function CountConstituentCandidate(constituentCandidateString: Texture){
//count constituents for each constituent
	if(constituentCandidateString == cybereanProfile)
		{
			cybereanCandidateCount++;
		}
	if(constituentCandidateString == eldereanProfile)
		{
			eldereanCandidateCount++;
		}
	if(constituentCandidateString == virtualistProfile)
		{
			virtualistCandidateCount++;
		}
	if(constituentCandidateString == naturalistProfile)
		{
			naturalistCandidateCount++;
		}
	if(constituentCandidateString == humanistProfile)
		{
			humanistCandidateCount++;
		}
	if(constituentCandidateString == evolutionistProfile)
		{
			evolutionistCandidateCount++;
		}
} //end CountConstituents
function randomResources(){
// resource letter is associated with the random number
	if ( resources1 == 1 || resources1 == 2 || resources1 == 3)
		{
			resources1Str = "A";
		}
	else if ( resources1 == 4 || resources1 == 5 || resources1 == 6)
		{
			resources1Str = "B";
		}
	else if ( resources1 == 7|| resources1 == 8 )
	{
		resources1Str = "C";
	}
	else if ( resources1 == 9)
		{
			resources1Str = "D";
		}
	else if ( resources1 == 10)
	{
		resources1Str = "E";
	}
	
	if ( resources2 == 1 || resources2 == 2 || resources2 == 3)
	{
		resources2Str = "A";
	}
	else if ( resources2 == 4 || resources2 == 5 || resources2 == 6)
		{
			resources1Str = "B";
		}
	else if ( resources2 == 7|| resources2 == 8 )
	{
		resources2Str = "C";
	}
	else if ( resources2 == 9)
		{
			resources2Str = "D";
		}
	else if ( resources2 == 10)
	{
		resources2Str = "E";
	}
	
	if ( resources3 == 1 || resources3 == 2 || resources3 == 3)
		{
			resources3Str = "A";
		}
	else if ( resources3 == 4 || resources3 == 5 || resources3 == 6)
		{
			resources3Str = "B";
		}
	else if ( resources3 == 7|| resources3 == 8)
	{
		resources3Str = "C";
	}
	else if ( resources3 == 9)
		{
			resources3Str = "D";
		}
	else if ( resources3 == 10)
	{
		resources3Str = "E";
	}
	
	if ( resources4 == 1 || resources4 == 2 || resources4 == 3)
		{
			resources4Str = "A";
		}
	else if ( resources4 == 4 || resources4 == 5 || resources4 == 6)
		{
			resources4Str = "B";
		}
	else if ( resources4 == 7|| resources4 == 8)
	{
		resources4Str = "C";
	}
	else if ( resources4 == 9)
		{
			resources4Str = "D";
		}
	else if ( resources4 == 10)
	{
		resources4Str = "E";
	}
	
	if ( resources5 == 1 || resources5 == 2 || resources5 == 3)
		{
			resources5Str = "A";
		}
	else if ( resources5 == 4 || resources5 == 5 || resources5 == 6)
		{
			resources5Str = "B";
		}
	else if ( resources5 == 7|| resources5 == 8)
	{
		resources5Str = "C";
	}
	else if ( resources5 == 9)
		{
			resources5Str = "D";
		}
	else if ( resources5 == 10)
	{
		resources5Str = "E";
	}
} //end randomResource 

function Stamina(StaminaRand: int){
//take in the radnom stamina value
//	if (StaminaRand ==1){
//if you are a cyberean	
		if (yourConst ==1){
//the value the constituent in the action button if they are your ally
			if (constituent1 == cybereanProfile||constituent1 == virtualistProfile || constituent1 == evolutionistProfile){
			 theStamina = StaminaRand;
			}		
//if they are neutral
			else if (constituent1 == eldereanProfile){
			 theStamina = StaminaRand + 1;
			}
//if they are opposition
			else if (constituent1 == naturalistProfile || constituent1 == humanistProfile){
			 theStamina = StaminaRand +2;
			}
		}
//if you are an elderean
		else if (yourConst == 2){
			if (constituent1 == eldereanProfile||constituent1 == virtualistProfile ){
			 theStamina = StaminaRand;
			}
			else if (constituent1 ==cybereanProfile){
			 theStamina = StaminaRand + 1;
			}
			else if (constituent1 == naturalistProfile || constituent1 == humanistProfile || constituent1 == evolutionistProfile){
			 theStamina = StaminaRand +2;
			}
		}
//if you are an virtualist
		else if (yourConst ==3){ 
			if (constituent1 ==cybereanProfile||constituent1 == eldereanProfile ||constituent1 == virtualistProfile) //ally
			{
			 theStamina = StaminaRand;
			}
			else if (constituent1 == naturalistProfile)//neutral
			{
			 theStamina = StaminaRand + 1;
			}
			else if (constituent1 == humanistProfile || constituent1 == evolutionistProfile)//rival
			{
			 theStamina = StaminaRand +2;
			}
		}
//if you are an naturalist
		else if (yourConst ==4){
			if (constituent1 == naturalistProfile||constituent1 == humanistProfile) //ally
			{
			 theStamina = StaminaRand;
			}
			else if (constituent1 == virtualistProfile )//neutral
			{
			 theStamina = StaminaRand + 1;
			}
			else if (constituent1 ==cybereanProfile || constituent1 == eldereanProfile)//rival
			{
			 theStamina = StaminaRand +2;
			}
		}
//if you are an humanist
		else if (yourConst ==5){
			if (constituent1 == naturalistProfile||constituent1 == humanistProfile || constituent1 == evolutionistProfile) //ally
			{
			 theStamina = StaminaRand;
			}
			
			else if (constituent1 ==cybereanProfile || constituent1 == eldereanProfile || constituent1 == virtualistProfile)//rival
			{
			 theStamina = StaminaRand +2;
			}
		}
//if you are an evolutionist
		else if (yourConst == 6){
			if (constituent1 ==cybereanProfile||constituent1 == humanistProfile  || constituent1 == evolutionistProfile) //ally
			{
			 theStamina = StaminaRand;
			}
			
			else if ( constituent1 == eldereanProfile || constituent1 == virtualistProfile || constituent1 == naturalistProfile)//rival
			{
			 theStamina = StaminaRand +2;
			}
		}
} //end of stamina()

function Constituent(){
	var constArray : Texture[] = [cybereanProfile, eldereanProfile,virtualistProfile,virtualistProfile,virtualistProfile,naturalistProfile, humanistProfile, humanistProfile, humanistProfile, humanistProfile, evolutionistProfile, evolutionistProfile];
	randomConstituent = constArray[Random.Range(0, constArray.Length)];
} //end constituent
//


function Persuasion(){
	
	//temCanidateClout = temCanidateClout + canidateCloutMod;
	print("clout " + temCanidateClout);
	
	//this array holds the value clout from each row
	var temArr = new Array();
	
	//setting the values of rows to corresponding position in array
	temArr[0] = clout01;
	temArr[1] = clout02;
	temArr[2] = clout03;
	temArr[3] = clout04;
	temArr[4] = clout05;
	
	//empty array that will hold 0 or 1. if 1, the highlight# variables will turn true depending on corresponding position
	var emArr = new Array();
	
	var lineArr = new Array();
	
	lineArr[0] = line01;
	lineArr[1] = line02;
	lineArr[2] = line03;
	lineArr[3] = line04;
	lineArr[4] = line05;
	
	//if statement that checks canidate clout is greater than 0
	if (temCanidateClout > 0){
		//loop through temArr which holds clout values
		for (var k =0; k <5; k++){
			//if any value is equal to 1, then do action
			if (temArr[k] ==1 && lineArr[k]){
				//action is setting value 1 to emArr. Value 1, means the computer will highlight this slot
				emArr[k] =1;
				//subtract the value of clout from temCanidateclout
				temCanidateClout = temCanidateClout - 1;
				print ("fdsf " + temCanidateClout);
			} 
			else{
				//if clout is not equal to 1, put a zero in the equivalent position in the emArray
				emArr[k] = 0;
			}	
		}
		
		//go through emArray, if 1, highlight, if 1, don't highlight
		if (emArr[0] == 1 && lineArr[0] ==true){
			highlight01 = true;
		}
		if (emArr[1] == 1 && lineArr[1] ==true){
			highlight02 = true;
		}
		if (emArr[2] == 1 && lineArr[2] ==true){
			highlight03 = true;
		}
		if (emArr[3] == 1 && lineArr[3] ==true){
			highlight04 = true;
		}
		if (emArr[4] == 1 && lineArr[4] ==true){
			highlight05 = true;
		}
		//now repeat but check for clouts of value 2
		if (temCanidateClout >= 0){
			for(var z =0; z < 5; z++){
				if(temCanidateClout -2 >= 0){
					if (temArr[z] ==2 && lineArr[z]){
						emArr[z] = 1;
						temCanidateClout = temCanidateClout -2;
					}
				}
			}
			if (emArr[0] == 1){
				highlight01 = true;
			}
			if (emArr[1] == 1){
				highlight02 = true;
			}
			if (emArr[2] == 1){
				highlight03 = true;
			}
			if (emArr[3] == 1){
				highlight04 = true;
			}
			if (emArr[4] == 1){
				highlight05 = true;
			}
			//now repeat but check for clouts of value 3
			if (temCanidateClout >= 0){
				for(var zz =0; zz < 5; zz++){
					if(temCanidateClout -3 >=0){
						if (temArr[zz] ==3 && lineArr[zz]){
							emArr[zz] = 1;
							temCanidateClout = temCanidateClout -3;
						}
					}
				}
				if (emArr[0] == 1 && lineArr[0] ==true){
					highlight01 = true;
				}
				if (emArr[1] == 1 && lineArr[1] ==true){
					highlight02 = true;
				}
				if (emArr[2] == 1 && lineArr[2] ==true){
					highlight03 = true;
				}
				if (emArr[3] == 1 && lineArr[3] ==true){
					highlight04 = true;
				}
				if (emArr[4] == 1 && lineArr[4] ==true){
					highlight05 = true;
				}
				//now repeat but check for clouts of value 4
				if (temCanidateClout >= 0){
					for(var zzz =0; zzz < 5; zzz++){
						if(temCanidateClout -4 >=0){
							if (temArr[zzz] ==4 && lineArr[zzz]){
								emArr[zzz] = 1;
								temCanidateClout = temCanidateClout -4;
							}
						}
					}
					if (emArr[0] == 1 && lineArr[0] ==true){
						highlight01 = true;
					}
					if (emArr[1] == 1 && lineArr[1] ==true){
						highlight02 = true;
					}
					if (emArr[2] == 1 && lineArr[2] ==true){
						highlight03 = true;
					}
					if (emArr[3] == 1 && lineArr[3] ==true){
						highlight04 = true;
					}
					if (emArr[4] == 1 && lineArr[4] ==true){
						highlight05 = true;
					}
					//now repeat but check for clouts of value 5
					if (temCanidateClout >= 0){
						for(var zzzz =0; zzzz < 5; zzzz++){
							if(temCanidateClout -5 >=0){
								if (temArr[zzzz] ==5 && lineArr[zzzz]){
									emArr[zzzz] = 1;
									temCanidateClout = temCanidateClout -5;
								}
							}
						}
						if (emArr[0] == 1 && lineArr[0] ==true){
							highlight01 = true;
						}
						if (emArr[1] == 1 && lineArr[1] ==true){
							highlight02 = true;
						}
						if (emArr[2] == 1 && lineArr[2] ==true){
							highlight03 = true;
						}
						if (emArr[3] == 1 && lineArr[3] ==true){
							highlight04 = true;
						}
						if (emArr[4] == 1 && lineArr[4] ==true){
							highlight05 = true;
						}
						//now repeat but check for clouts of value 6
						if (temCanidateClout >= 0){
							for(var zzzzz =0; zzzzz < 6; zzzzz++){
								if(temCanidateClout -6 >=0){
									if (temArr[zzzzz] ==6 && lineArr[zzzzz]){
										emArr[zzzzz] = 1;
										temCanidateClout = temCanidateClout -6;
									}
								}
							}
							if (emArr[0] == 1 && lineArr[0] ==true){
								highlight01 = true;
							}
							if (emArr[1] == 1 && lineArr[1] ==true){
								highlight02 = true;
							}
							if (emArr[2] == 1 && lineArr[2] ==true){
								highlight03 = true;
							}
							if (emArr[3] == 1 && lineArr[3] ==true){
								highlight04 = true;
							}
							if (emArr[4] == 1 && lineArr[4] ==true){
								highlight05 = true;
							}		
						}
					}	
				}	
			}
		}
	}
}


	

function randomizeRows()
{
	//randomizes constituents values for each action box
	Constituent();
	constituent1 = randomConstituent; //Random.Range(1,13);
	Constituent();
	constituent2 = randomConstituent; //Random.Range(1,13);
	Constituent();
	constituent3 = randomConstituent; //Random.Range(1,13);
	Constituent();
	constituent4 = randomConstituent; //Random.Range(1,13);
	Constituent();
	constituent5 = randomConstituent; //Random.Range(1,13);
//calls the constituent function
	
	
//randomizes the resource (A, B, C, D, E)
	resources1 = Random.Range(1,11);
	resources2 = Random.Range(1,11);
	resources3 = Random.Range(1,11);
	resources4 = Random.Range(1,11);
	resources5 = Random.Range(1,11);
//calls randomResources()
	randomResources();
	
//randomizes values of resources
	resourceNum1 = Random.Range(5,11);
	resourceNum2 = Random.Range(5,11);
	resourceNum3 = Random.Range(5,11);
	resourceNum4 = Random.Range(5,11);
	resourceNum5 = Random.Range(5,11);
	
//randomizes clout
	randomClout1 = Random.Range(1,4);
	randomClout2 = Random.Range(1,4);
	randomClout3 = Random.Range(1,4);
	randomClout4 = Random.Range(1,4);
	randomClout5 = Random.Range(1,4);
	

//resets visiblity of all rows
	line01 = true;
	line02 = true;
	line03 = true;
	line04 = true;
	line05 = true;

//toggles selection boxes	
	toggle01Img = false;
	toggle02Img = false;
	toggle03Img = false;
	toggle04Img = false;
	toggle05Img = false;
	toggle06Img = false;
	toggle07Img = false;
	toggle08Img = false;
	toggle09Img = false;
	toggle10Img = false;
Clout();
StaminaValues();
}