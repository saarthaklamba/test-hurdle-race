var canvas, backgroundImage;
//gameState and playerCount are variables to read andwrite the database field.
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allplayers;
var track,runner1img,runner2img,runner3img,runner4img;

var runner1,runner2,runner3,runner4,runners;
function preload(){
 // track=loadImage("images/track.jpg")
  runner1img=loadImage("Running-Female-Transparent-File.png")
  runner2img=loadImage("Running-Man-Black-Transparent-PNG.png")
  runner3img=loadImage("Running-Man-Transparent-Background.png")
  runner4img=loadImage("Running-Man-Transparent-Free-PNG.png")
  
}
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  //creating an object of class game
 
  game = new Game();
   //getState function to update global var gameState from db.
  game.getState();
  //to update playerCount global var and display the form.
  game.start();
}


function draw(){
  if(playerCount==4){
    game.update(1)
  }
  if(gameState==1){
   
    clear ()
    
    game.play()
  }
 if(gameState==2){
   console.log("game ended")
 }
}


