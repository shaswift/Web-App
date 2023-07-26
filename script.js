var generateBtn = document.getElementById("generateBtn")
var result = document.getElementById("result")
generateBtn.addEventListener("click", function(){
   result.innerHTML= Math.floor(Math.random() * 3);
} );