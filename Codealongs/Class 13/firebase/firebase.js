// Setup

var json = 

{
  "active": "green",
  "colors": ["green","skyblue","purple"]

};


// Establish a conneciton with firebase
// (create a new firebase db reference)

var firebaseRef = new Firebase("https://jsd4intro.firebaseio.com");


console.log("connected");

// Elements
var button = document.querySelector("button");

// Events
button.addEventListener('click', saveChanges);

function saveChanges(e){
	console.log("saveChanges");
	firebaseRef.set(json);

}

firebaseRef.on('value',updateApp);

function updateApp(snapshot){
	console.log(snapshot.val());
	var value = snapshot.val();
	document.body.style.background = value.active;

}