//create the characters
//background
//creating the data structure - two players, creating a round field which tracks what rounds the players are in
//create the weapons
//making them move/jump
//when ever weapons touch the other character, they lose health points
//Both health points will start at 100 and each hit will say be 10 or 15
//whoever hits 0 first is the loser and the other player wins

var database;
var playerCount, gameState = 0, player;
var game, form, allPlayers;
var charImage1, charImage2;

function preload(){
  charImage1 = loadImage("character 1.jpg");
  charImage2 = loadImage("character 2.jpg");
}

function setup() {
  database = firebase.database();
  game = new Game();
  game.readGameState();

  createCanvas(800,400);
  game.start();

}

function draw() {
  console.log(playerCount);
  if (playerCount===2){
    game.updateGameState(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }
}