//global variables
var compGuess = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var userScore = 0;
var wins = 0;
var message = "";
var losses = 0;
var isDone = false; //ensures crystals cannot be clicked after game is over and before new game has begun
var notYet = false; //ensures crystals cannot be clicked until game has begun
var game = 0; //counter for amount of games played

//refreshes the game window, generates new numbers for computer guess and crystal values, resets win/loss message.
function reset (){
    isDone = false;
   compGuess = Math.floor(Math.random()* 102 )+19;
   console.log(compGuess);
   userScore = 0;
   game++;
   gem1 = Math.floor(Math.random()* 12)+1;
   gem2 = Math.floor(Math.random()* 12)+1;
   gem3 = Math.floor(Math.random()* 12)+1;
   gem4 = Math.floor(Math.random()* 12)+1;
   $(".computer-score").html(compGuess); 
   $("#score").html(userScore);
   $(".message").html("");
   $(".game-count").html(game);
   notYet = true;
}
//calls the rest function at the click of the start button
$(".btn").on("click", function start(){
    reset();
});
//image 1 click function, increases player score and calls score check
$("#gem1").on("click", function g1() {
    if (notYet) {
    userScore = userScore + gem1;
    $("#score").html(userScore);
    if (isDone === false){
    scoreCheck();
    }
}
})
//image 2 click function, increases player score and calls score check
$("#gem2").on("click", function g2() {
    if (notYet) {
    userScore = userScore + gem2;
    $("#score").html(userScore);
    if (isDone === false) {
    scoreCheck();
    }
}
})
//image 3 click function, increases player score and calls score check
$("#gem3").on("click", function g3() {
    if (notYet) {
    userScore = userScore + gem3;
    $("#score").html(userScore);
    if (isDone === false) {
    scoreCheck();
    }
}
})
//image 4 click function, increases player score and calls score check
$("#gem4").on("click", function g4() {
    if (notYet) {
    userScore = userScore + gem4;
    $("#score").html(userScore);
    if (isDone === false) {
    scoreCheck();
    }
}
})
//score check function is called every crystal click, increases necessary values, and ends game.
function scoreCheck() { 
    if (userScore === compGuess) {
        $(".message").html("You Win! Click Start To Play Again!");
        gem1 = 0;
        gem2 = 0;
        gem3 = 0;
        gem4 = 0;
        wins++;
        isDone = true;
        $("#wins").html(wins);
    }if (userScore > compGuess) {
        $(".message").html("You Lose! Click Start To Play Again!");
        gem1 = 0;
        gem2 = 0;
        gem3 = 0;
        gem4 = 0;
        losses++;
        isDone = true;
        $("#losses").html(losses);
    }
}