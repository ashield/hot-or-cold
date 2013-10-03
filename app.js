// Generate random number onload
var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log (randomNumber);

// Submitting user input
$(document).ready(function (){
  $('#submit').click(submit);
    $('#guess').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      };
    });
}); 

// Storing user input
  function submit(){
    var guess = $('#guess').val();
    console.log(guess);
    validation(guess);

// Reset form   
    $( "#guess" ).val('')
  }
  
// Validating user input
var shake = function(){
    $("#guess").addClass('shake animated').delay(1000).queue(function(next){
    $(this).removeClass('shake animated');
    next();
    });
  }

  
  var validation = function (guess) {
    if (this == "" || isNaN(this))
    shake()

    else if (this > 100 || this <= 0) {
    shake()

  }

// Compare number guessed back to number generated
  if (randomNumber == guess) {
	alert("Correct!");
  randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log (randomNumber);
  }
  else if (randomNumber < guess) {
	 console.log("Guess lower");
  }

  else if (randomNumber > guess) {
	console.log("Guess higher");
  }
}
















