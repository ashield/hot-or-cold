// Generate random number onload

var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log (randomNumber);

var temp = '';
var guess = '';



// Submitting user input

$(document).ready(function (){
  $('#submit').click(submit);
    $('#playerGuess').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      }
    });
}); 

// Storing user input 

function submit(guess){
  var guess = document.getElementById("playerGuess").value;
  console.log(guess);
  addGuesses(guess);
  validation(guess);
  comparison(guess);
  feedback();


 // Reset form   
    $("#playerGuess").val('');
  }

  
// Validating user input

var shake = function(){
    $("#playerGuess").addClass('shake animated').delay(1000).queue(function(next){
    $(this).removeClass('shake animated');
    next();
    });
  };

    var validation = function (guess) {
    if (guess == "" || isNaN(guess)){
    shake();
    temp = "Invalid Guess";
    // return false;
  }

    else if (guess > 100 || guess <= 0) {
    shake();
    temp = "Invalid Guess";
    // return false;
  }

};

  var guesses = [];
  function addGuesses (guess){
  guesses.push(guess);
  $("#guesses").append("<p>" + guess + "   " + "</p>");
  if (temp = "Getting Hotter") {
    guessesColor();
  };
  }


// Compare number guessed back to number generated
var comparison = function (guess) {

// First guess
var howClose = function(){
  if (guess - randomNumber < 0) {
    temp = "Too Low";
  }
  if (guess - randomNumber > 0) {
    temp = "Too High";
  }
}; 

if (guesses.length <= 1) {
  howClose();
}

// var numericRange = function(guess){
//  Math.abs(guess - randomNumber)
//   console.log ("Boiling");
// };

// numericRange(guess);

// Subsequest guessesß
var subsequestGuess = function(){
  
  var lastNum = guesses.length;
  var finalNum = (lastNum - 1);
  guesses[finalNum];

  var nextGuess = (lastNum - 2);
  guesses[nextGuess];


  var guessDifference =  Math.abs(randomNumber-guesses[finalNum]); 
  var previousGuessDifference = Math.abs(randomNumber - guesses[nextGuess] );

  if (guessDifference <= previousGuessDifference) {
    temp = "Getting Hotter";

  }
  else {
    temp = "Getting Colder";
  }
};

  if (guesses.length >= 2) {
    subsequestGuess();
  }


  if (randomNumber == guess) {
  temp = "Correct! in" + " " + guesses.length + " " + "attepmts";
  // randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  // console.log (randomNumber);
  }
};

// UI

var feedback = function() {
  $("#reply").empty();
  $("#reply").append("<h3>" + temp + "</h3>");
    $("#reply").addClass('pulse animated').delay(1000).queue(function(next){
    $(this).removeClass('pulse animated');
    next();
    });
};

guessesColor = function (){
  if (temp = "Getting Hotter") {
     $("#guesses p").addClass("hot");
  }
}

















