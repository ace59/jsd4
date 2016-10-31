// alert("liked");
var body = document.querySelector("body");
var ul = document.querySelector("ul");
// Elements
// var green = document.querySelector(".green");
// var red = document.querySelector(".red");
// var rebeccablue = document.querySelector(".rebeccablue");
// var skyblue = document.querySelector(".skyblue");




// Events
// green.addEventListener("click", changeGreen);
// // red.addEventListener("click", changeRed);
// rebeccablue.addEventListener("click", changeRebeccablue);
// skyblue.addEventListener("click", skyblue);

ul.addEventListener("click",changeColor);



// Callback functions
function changeRed(){
	body.className = "red";

}
function changeRebeccablue(event){
	body.className = "rebeccablue";
	console.log("class", event.target.className);
	body.className = event.target.className;
}	
function changeSkyblue(){
	body.className = "skyblue";
}
function changeGreen(){
	body.className = "green";
}

function changeColor(event){
	console.log("changeColor");
	console.log("class", event.target.className);
	// return early if li wasnt clicked
	if (event.target.tagName != "LI") {
		return;
	}
	console.log("changeColor", event);
	console.log("class", event.target.className);
	body.className = event.target.className;



}