// Create Elements

var counter = 0;
var main = document.querySelector("main");

// Create Elements
var p = document.createElement("p");
p.innerHTML = counter;
main.appendChild(p);


// Create Event
var me= document.createEvent('MouseEvent');
me.initEvent("click")

// Listen for an Event
// main.addEventListener("click", count);


// Event Listener
p.addEventListener("click", clickCircle);


// Event handler callback function
function clickCircle(event){
	console.log(event);
	console.log("type",event.type);
	console.log("target",event.target.innerHTML);
	// console.log("content",);

	console.log("count", counter);
	counter ++;
	p.innerHTML = counter;
	console.log("count", counter);
}