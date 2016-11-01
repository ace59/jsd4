// Setup
// ----------------------------------------------
var form = document.querySelector("form");
var searchBtn = document.querySelector("#searchBtn");
var results = document.querySelector(".results");
var inputField = document.querySelector("input");
var details = $(".details")



// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit',movie);




function movie(tag){
	tag.preventDefault();
	var inputFieldValue = inputField.value;
	var url = "http://www.omdbapi.com/?s=" +inputFieldValue;
	jQuery.getJSON(url,getMovies);	
	// console.log("testing");
	// console.log(url);
}

function getMovies(json){
	results.innerHTML = '';
	json.Search.forEach(displayMovies);

}


function displayMovies(Search){
	// Step 1 - create elements
	var li = document.createElement("li");
	var img = document.createElement("img");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");

		// Step 2 - add content / attributes
	img.src = Search.Poster;
	h2.textContent = Search.Title;


	// Step 3 - append to parents
	results.appendChild(li);
	li.appendChild(img);
	li.appendChild(h2);
	li.appendChild(p);

}

// accessing the clicked element
$(".results").on("click","li",function(){
	var text = $(this).text();
	console.log(text);
	// Pass the clicked element to the url
	var url = "http://www.omdbapi.com/?t=" +text;
	// console.log(url);
	// used postman to test that spaces in the API is working, might be good to research how to remove those

     // function showDetails(Search){
     // 	details.innerHTML='';
     // 	console.log("details is cleared");


     function detailsMovie(json1){
     	results.innerHTML = '';
		json.Search.forEach(mainMovie);	
     }


});





function detailView(movSelect){
	movSelect.preventDefault();
	
	var url = "http://www.omdbapi.com/?s=" +inputFieldValue;
	jQuery.getJSON(url,getMovies);	
	// console.log("testing");
	// console.log(url);





}




// Event handlers
// ----------------------------------------------


// Update page
// ----------------------------------------------


	




