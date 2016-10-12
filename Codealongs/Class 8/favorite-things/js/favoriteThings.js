// Elements
// ------------------------------------------
var form = document.querySelector("body form");





// Events
// ------------------------------------------
form.addEventListener('submit', createThing);





// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');

	// TODO: take value typed into input box and 
	// add to list

	// Get the ul fron the DOM

// Create the element
var li = document.createElement("li");

var thing = document.querySelector(".new-thing");
console.log(thing);
console.log(thing.value);

// get the parent list from the document
var things = document.querySelector(".things");

// set the text content of the new li
li.innerHTML = thing.value;


// add the new li to the DOM
things.appendChild(li);

// clear value
thing.value = "";

}



things.removechild(document.querySelector"things)