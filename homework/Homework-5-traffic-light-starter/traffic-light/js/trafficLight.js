// Setup
// ----------------------------------------------
var divTl =	document.getElementById("traffic-light");
var flashSlow= 1;

var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var runButton = document.querySelector(".run-button");
// console.log(stopButton);
var stopLight = document.querySelector(".stop-light");
var slowLight = document.querySelector(".slow-light");
var goLight = document.querySelector(".go-light");

stopButton.addEventListener("click", function(){
	// slowLight.style.background = "";
	// goLight.style.background = "";
	// stopLight.style.background = "red";
	divTl.classList.add("stop");
	divTl.classList.remove("slow");
	divTl.classList.remove("go");


});

slowButton.addEventListener("click", function(){
	// stopLight.style.background = ""
	// goLight.style.background = "";
	// slowLight.style.background = "Yellow";
	divTl.classList.remove("stop");
	divTl.classList.add("slow");
	divTl.classList.remove("go");
	
});

// goButton.addEventListener("click", function(){
// 	slowLight.style.background = "";
// 	stopLight.style.background = "";
// 	goLight.style.background = "Green";
// });

goButton.addEventListener("click", function(){
	// slowLight.style.background = "";
	// stopLight.style.background = "";
	// console.log("clicked");
	divTl.classList.remove("stop");
	divTl.classList.remove("slow");
	divTl.classList.add("go");

	// goLight.classList.remove("light");
});

cautionButton.addEventListener("click",function(){
	setInterval(flashslowlight,1000);

});
	
function flashstoplight(){
	divTl.classList.toggle("stop");
	console.log("stop");
	}
function flashslowlight(){
	divTl.classList.remove("stop");
	divTl.classList.toggle("slow");
	divTl.classList.remove("go");
	console.log("slow");
	}
function flashgolight(){
	divTl.classList.toggle("go");
	console.log("go");
	}
	
runButton.addEventListener("click", function(){
	setInterval(flashalllight,3000);
})

function flashalllight(){
	setInterval(flashstoplight,3000);
	setInterval(flashslowlight,3000);
	setInterval(flashgolight,3000);
	}

function reset(){
	divTl.classList.remove("stop");
	divTl.classList.remove("slow");
	divTl.classList.remove("go");
}

123
456
789
// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
