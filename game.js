//make array
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guesses = [];
// make standard variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;
let userGuess = " ";
let answer = 0;

 //have computer choose random letter
 function makeRandomLetter() {
    answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Answer = " + answer);
};

makeRandomLetter()

document.onkeyup = function () {

    //record users guess
    userGuess = (event.key);
    console.log("User Guessed: " + userGuess);
   
    //check to see if answer is equal too userGuess
    if (userGuess === answer) {
        document.getElementById("wrong").innerHTML = "Congratulations! You're smarter than me!";
        //track wins
        wins++;
        console.log("You won " + wins);
        guesses.push(userGuess);
    }
    else {
        guessesRemaining--;
        guesses.push(userGuess);
        document.getElementById("wrong").innerHTML = "Wrong answer dumbass!"
    }
    if (guessesRemaining === 0) {
        alert("You lose!");
        losses++;
        console.log("You lost " + losses);
    }
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses-remaining").textContent = guessesRemaining;
    document.getElementById("user-guess").textContent = guesses;
}