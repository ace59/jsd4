// alert("linked");
/* Javascript timers:
Two types:
	1. One time
	2. Repeat infinite times

-Methods or window objec
-Return a unique ID


1. Once 
	-Timeout
	-Method
		setTimeout() - takes 2 args (call back function, delay in ms)
2. Repeat
	-Internal
	-Method: setInterval()
		setInterval() - takes 2 args (call back function, delay in ms
*/

// setTimeout(changeGreen, 3000);

// setInterval(changeRed, 3000);

var color = "red";
var timeId = null;

function changeColor() {
	if (color == "red") {
		changeGreen();
	} else if (color == "green") {
		changeYellow();
	} else if (color == "yellow") {
		changeRed();
	}

}

var time = prompt("enter day or night");

function start(time) {
	if (time == "day") {
	timeId = 	setInterval(changeColor, 3000);	
	} else if (time == "night") {
	return redLight();
    }
}


function stop() {
	return clearInterval(timeId);
}


	function changeGreen() {
		console.log("Green");
		return color = "green";
	 }

	function changeYellow() {
		console.log("Yellow");
		return  color =  "yellow";
	 }

	function changeRed() {
		console.log("Red");
		return  color = "red";
	 }


function nightMode() {
	if (color == "yellow") {
		changeOff();
	} else {
		color = changeYellow;
	}
}


function flash() {
		changeYellow;
		stop();
		flashId = setInterval(nightMode, 1500);
}