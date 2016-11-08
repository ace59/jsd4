// Firebase application setup
// ------------------------------------------------



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBR7OoS-t2zz795qDHXbS0xBzXLaohEdq4",
    authDomain: "gocubsfan-4aa3d.firebaseapp.com",
    databaseURL: "https://gocubsfan-4aa3d.firebaseio.com",
    storageBucket: "gocubsfan-4aa3d.appspot.com",
    messagingSenderId: "368134466848"
  };
  firebase.initializeApp(config);

// Create Firebase application reference
// ------------------------------------------------

var db = firebase.database()

// Elements
// ------------------------------------------------

var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");

// Events
// ------------------------------------------------

form.addEventListener("submit", submitForm);

document.addEventListener('DOMContentLoaded', loadState);

function submitForm(event){
	event.preventDefault();
	var messageText = messageEl.value;
	console.log(messageText);

	messageEl.value='';

	var ref = db.ref('messages');
	// console.log(ref);
	var messageObj ={
		content: messageText,
		votes:0

	};

	ref.push(messageObj)

}


function loadState(){
	db.ref('messages').on('value',createMessages)
}

function createMessages(results){
	console.log('createMessages', results.val());
	var newMessages = results.val();

// reset message board
	messageBoard.innerHTML = '';

	for (var i in newMessages){
		// console.log(newMessages[i]);
		createMessage(id,newMessages[i])
	}


}

function createMessage(message){
	var li = document.createElement("li");
	li.innerHTML = message.content;
	li.id = message.id;
	messageBoard.appendChild(li);
}


function destroyMessage(id){
	var ref = db.ref('messages/' + id);
	ref.remove();
}









