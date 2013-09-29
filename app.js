// Generate random number onload
var randomNumber = Math.floor(Math.random()*101);
	console.log (randomNumber);

// Prompt user to guess number
var guess = function () {
	var userGuess = prompt ("Guess a number between 1 - 100");
	console.log (userGuess);

// Compare number guessed back to number generated
if (randomNumber == userGuess) {
	console.log ("Correct!");
}	

else if (randomNumber < userGuess) {
	console.log ("Guess lower");
	guess ();

}

else if (randomNumber > userGuess) {
	console.log ("Guess higher");
	guess();
}

};

guess();


