var gameState = 0;
var database, form, game, player;
var playerCount;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);

    }
    if(gameState === 1){
        clear();
        game.play();
    }
}