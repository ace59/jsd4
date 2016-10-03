// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)

streetNumber = [12,23,29,34,47,46];
streetCity = ["Rkl","SDl","Mys","KWR","SDA","LAS"];
state = ["CA","DS","WS","AS","PS","QS"];

/*
USING MATH.RANDOM
var numberOfRecords = 0;
var arr = [];
	arr[i]=	var streetNumber = Math.ceil(Math.random()*20);
	console.log(streetNumber);
*/

// Event Listeners
// ------------------------------------------
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function generateAddress(e) {
	var addressLineOne = streetNumber[randomIntFromInterval(1,6)] ;
	var addressLineTwo = streetCity[randomIntFromInterval(1,6)] ;
	var addressLineThree = state[randomIntFromInterval(1,6)] ;

	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
console.log(addressLineOne);
console.log(addressLineTwo);
console.log(addressLineThree);

}






// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}




