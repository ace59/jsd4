// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Elements
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Init
// ------------------------------------------
generateStartup();


// Event Listeners
// ------------------------------------------


// the generateStartup function is called when
// the "Generate New Startup" button is clicked

function randomNumGen(min,max){
    return Math.floor(Math.random()*(max-min)+min);
	}

function generateStartup() {
	
	var	indexOne =[randomNumGen(1,startupX.length)] ;
	var indexTwo =[randomNumGen(1,startupY.length)] ;

	 startupIdea = "A startup that is " +startupX[indexOne] +" but for "+startupY[indexTwo];

	// TODO: generate two random index numbers, one for each array

	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	// startupIdea = "A startup that is Apple, but for Trello";
	// DONE: Update page with new startup idea
	startup.innerHTML = startupIdea;
}



// the saveFavorite function is called when
// the "Save Favorite" button is clicked
function saveFavorite() {
	favorites.push(startupIdea);

	// TODO: add the new idea to the array

}



// the Print Favorites function is called when
// the "Print Favorites" button is clicked
function printFavorites() {
	// DONE: clear out favorites section each time
	// before displaying new list of favorites
	list.innerHTML = '';

	var favoritesText = [];
	for (var i = 0; i < favorites.length; i++) {
		favoritesText += "<br>"+ favorites[i]+"</br>"
	}


	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")



	// DONE: update the list element with the
	// new list of favorites
	list.innerHTML = favoritesText;
}
