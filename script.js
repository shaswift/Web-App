var generateBtn = document.getElementById("generateBtn")
var result = document.getElementById("result")
var computerChoiceDisplay = document.getElementById("computerChoice");
var Round = document.getElementById("Round")
var RoundNumber = 0
generateBtn.addEventListener("click", function(){
   var randomNumber= Math.floor(Math.random() * 3);
   result.innerHTML = randomNumber ;
   if (randomNumber === 0) {
      computerChoiceDisplay.innerHTML = "Computer chooses: Rock";
  } else if (randomNumber === 1) {
      computerChoiceDisplay.innerHTML = "Computer chooses: Paper";
  } else if (randomNumber === 2) {
      computerChoiceDisplay.innerHTML = "Computer chooses: Scissor";
  }
  RoundNumber = RoundNumber + 1
  Round.innerHTML = "Round " +  parseInt(RoundNumber)
  Round.style.color ="green"
});




