// Generate random number onload

// function reset(randomNumber){
// var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
// console.log (randomNumber);

// var temp = '';
// var guess = '';
// };

// reset(randomNumber);

var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log (randomNumber);

var temp = '';
var guess = '';



// Submitting user input

$(document).ready(function (){
  $('#playerGuess').focus();
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
  validation(guess);
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
    if (guess === "" || isNaN(guess)){
    shake();
    temp = "Invalid Guess";
    return
  }

    else if (guess > 100 || guess <= 0) {
    shake();
    temp = "Invalid Guess";
    return
  }
    else addGuesses (guess);
        comparison(guess);

};

  var guesses = [];
  function addGuesses (guess){
  guesses.push(guess);
  $("#guesses").append("<p>" + guess + "   " + "</p>");
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


// Subsequest guesses
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
    $("#guesses p").last().addClass('hot');

  }
  else {
    temp = "Getting Colder";
    $("#guesses p").last().addClass('cold');
  }
};



  if (guesses.length >= 2) {
    subsequestGuess();
  }


  if (randomNumber == guess) {
    if (guesses.length == 1) {
      temp = "WOW, got it first time!";
    }
    else temp = "Correct! in" + " " + guesses.length + " " + "tries";

  $("#guesses p").last().addClass('correct');
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




















