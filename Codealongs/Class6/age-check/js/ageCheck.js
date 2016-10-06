// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here


function getPrivilege(age){
  if(age >= 16 && age <= 20) {
	return("You can drive");
} else if (age >=18 && age<=24){
	return("you can vote");
}
  else if (age >=25 && age<=34){
	return("you can rent a car");
 }
  else if (age >=35 && age<=61){
	return("you can run for president");
 }
  else if (age >=62){
	return("you collect social security benefits");
}
  else{
  	alert("Please enter age greater than 16");
  }
}

