// String array variables
alert("Press any key to begin, this will be counted as your first guess");
var alphapet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphapetChecker = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChocies = ["rock", "paper", "scissors", "risk", "sorry", "monopoly", "life", "uno", "pit", "solitaire", "poker", "dominion", "codenames", "pokemon", "farkle", "battleship", "clue", "frag", "chess", "checkers", "scrabble", "pandemic", "mancala", "operation", "blockus", "backgammon", "parcheesi"];
var blankAnswer = [];
var computerChociesArray = [];
var hangmanPicture = "";
// Number variables
var guessesRemaining = 6, numWins = 0, numLosess = 0, winCounter = 0;
// String variables
var currentGameGuesses = "", userGuess = "", computerGuess = computerChocies[Math.floor(Math.random() * computerChocies.length)];
// Boolean variable
var turnLoss = true;
computerChociesArray = computerGuess.split("");
for (var i = 0; i < computerChociesArray.length; i++){
    blankAnswer[i] = "_ ";
}
winCounter = computerChociesArray.length;
document.getElementById("guessesRemain").innerHTML = guessesRemaining;
document.getElementById("currentGameGuess").innerHTML = currentGameGuesses;
document.getElementById("numberWins").innerHTML = numWins;
document.getElementById("numberLosess").innerHTML = numLosess;
document.getElementById("currentWord").innerHTML = blankAnswer.join(" ");

// cheat for developers :P
console.log(computerGuess);

function resetGuess(){
    computerGuess = computerChocies[Math.floor(Math.random() * computerChocies.length)];
    computerChociesArray = [" "," "," "," "," "," "," "," "," "," "," "," "," ",];
    computerChociesArray.length = 0;
    computerChociesArray = computerGuess.split("");
    blankAnswer.length = 0;
    for (var i = 0; i < computerChociesArray.length; i++){
        blankAnswer[i] = "_ ";
    }
    alphapetChecker = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    guessesRemaining = 6;
    currentGameGuesses = "";
    numWins++;
    winCounter = computerGuess.length;
    userGuess = "";

}

// function to change Hangman picture based on guesses remaining, will reset to base image on win
function changeImage(a){
    var image = document.getElementById("selfDrawn");
    if(a === 5){
        image.src = "assets/images/head.jpg";
    }
    else if(a === 4){
        image.src = "assets/images/body.jpeg";
    }
    else if(a === 3){
        image.src = "assets/images/rightArm.jpeg";
    }
    else if(a === 2){
        image.src = "assets/images/leftArm.jpeg";
    }
    else if(a === 1){
        image.src = "assets/images/rightLeg.jpeg";
    }
    else if(a === 0){
        image.src = "assets/images/leftLeg.jpeg";
    }
    else{
        image.src = "assets/images/base.jpg";
    }
}
// function to do something when a key is pressed
document.onkeyup = function(event) {
    //logs key pressed into a variable
    userGuess = event.key;
    //converts key to lowercase just in case
    userGuess = userGuess.toLowerCase();
    var check = alphapet.indexOf(userGuess);
    //checks to see if the user had already guessed that letter
    if (alphapetChecker[check] === "null"){
            console.log("That letter was alreay chosen");
            alert("The letter " + userGuess + " was already chosen");
    }
    else{
        for (var i = 0; i < computerChociesArray.length; i++){
            if (userGuess === computerChociesArray[i]){
                turnLoss = false;
                blankAnswer[i] = userGuess + " ";
                winCounter--;
                var temp = alphapet.indexOf(userGuess);
                alphapetChecker[temp] = "null";
                if (winCounter === 0){
                    changeImage(1500);
                    alert("You Won!");
                    alert("Get ready to play again");
                    resetGuess();
                    // cheat for developers :P
                    console.log(computerGuess);
                }          
            }
        }
        if (turnLoss){
            guessesRemaining--;
            var temp = alphapet.indexOf(userGuess);
            alphapetChecker[temp] = "null";
            changeImage(guessesRemaining);
            currentGameGuesses = currentGameGuesses + " " + userGuess;
            if (guessesRemaining === 0){
                alert("Game Over");
                alert("Get ready to play again");
                resetGuess();
                changeImage(guessesRemaining);
                // cheat for developers :P
                console.log(computerGuess);
            }
        }
        turnLoss = true;
    }
    document.getElementById("guessesRemain").innerHTML = guessesRemaining;
    document.getElementById("currentGameGuess").innerHTML = currentGameGuesses;
    document.getElementById("numberWins").innerHTML = numWins;
    document.getElementById("numberLosess").innerHTML = numLosess;
    document.getElementById("currentWord").innerHTML = blankAnswer.join(" ");
    //document.getElementById("game").innerHTML = html;
}