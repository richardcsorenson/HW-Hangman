// String array variables
var alphapet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Number variables
var guessesRemaining = 15, numWins = 0, numLosess = 0;
// String variables
var currentGameGuesses = "", userGuess = "", computerGuess = alphapet[Math.floor(Math.random() * alphapet.length)];
// cheat for developers :P
console.log(computerGuess);
// function to do something when a key is pressed
document.onkeyup = function(event) {
    //logs key pressed into a variable
    userGuess = event.key;
    //converts key to lowercase just in case
    userGuess = userGuess.toLowerCase();
    var check = alphapet.indexOf(userGuess);
    //checks to see if the user had already guessed that letter
    if (alphapet[check] === "null"){
            console.log("That letter was alreay chosen");
            alert("The letter " + userGuess + " was already chosen");
    }
    //check to see if user has won
    else if(userGuess === computerGuess){
        alert("You got it");
        alert("Get ready to play again");
        alphapet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        computerGuess = alphapet[Math.floor(Math.random() * alphapet.length)];
        guessesRemaining = 15;
        currentGameGuesses = "";
        numWins++;
    }
    //branch for wrong guesses
    else{
        guessesRemaining--;
        //reseting value of guess to null to be able to check for multiple guesses on the same letter
        var temp = alphapet.indexOf(userGuess);
        alphapet[temp] = "null";
        //check to see if they have lost
        if (guessesRemaining === 0){
            console.log("Game Over");
            console.log("Get ready to play again");
            alphapet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            computerGuess = alphapet[Math.floor(Math.random() * alphapet.length)];
            guessesRemaining = 15;
            currentGameGuesses = "";
            numLosess++;
        }
        else{
            console.log("You guessed wrong, you have " + guessesRemaining + " guesses remaining");
            currentGameGuesses = currentGameGuesses + " " + userGuess;
        }
    }
    //convert to html code to display on screen
    var html = 
    "<p> Number of Guesses left: " + guessesRemaining + "</p>" +
    "<p> Current Guesses: " + currentGameGuesses + "</p>" +
    "<p> Wins: " + numWins + "</p>" +
    "<p> Losess: " + numLosess + "</p>" +
    "<p></p>";
    document.getElementById("game").innerHTML = html;
}