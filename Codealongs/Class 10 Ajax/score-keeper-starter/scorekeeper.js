// alert("linked");

var increaseButton = document.querySelector("#increase-5");
var decreaseButton = document.querySelector("#decrease-5");
var score = document.querySelector("#score");
var scorePoints = 0;
var body = document.querySelector("body");
var setScoreButton = document.querySelector("#submit-custom-score");

increaseButton.addEventListener("click", function() {
	scorePoints += 5;
	updateScore(scorePoints);

});



decreaseButton.addEventListener("click", function() {
	if (parseInt(score.innerHTML) < 5) {
		alert("Score cannot be negative!");
 		body.style.background = "red";
	} else {
		scorePoints -= 5;
		updateScore(scorePoints);
	}
});


setScoreButton.addEventListener("click", function(){
	scorePoints = parseInt(document.querySelector("#custom-score").value);
	updateScore(scorePoints);

});

function updateScore(x){
	score.innerHTML = x + " Points";
	body.style.background = "white";
}