// Generate random number onload

var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log (randomNumber);

var temp = '';


// Submitting user input

$(document).ready(function (){
  $('#submit').click(submit);
    $('#playerGuess').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      }
    });
$("#reply").append("<h3>" + temp + "</h3>");
}); 

// Storing user input 

  function submit(guess){
    var guess = document.getElementById("playerGuess").value;
    console.log(guess);
    addGuesses (guess);
    validation(guess);
    feedback();


 // Reset form   
    $("#playerGuess").val('');
  }

var guesses = [];
  function addGuesses (guess){
    guesses.push(guess);
    
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
  }

    else if (guess > 100 || guess <= 0) {
    shake();
  }


// Compare number guessed back to number generated

  if (randomNumber == guess) {
  feedback();
  temp = "CORRECT";
  randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log (randomNumber);
  }

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

// var numericRange = function(){
// if (Math.abs(guess - randomNumber <=10)) {
//   console.log ("Boiling");
// };
// };

// numericRange();

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

  }
  else {
    temp = "Getting Colder";
  }
};

  if (guesses.length >= 2) {
    subsequestGuess();
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















