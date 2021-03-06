// Elements
var searchBx = document.querySelector("form .search");
var searchBtn = document.getElementById("searchBtn");
var form = document.querySelector("form");
var results = document.querySelector(".results")
var details = document.querySelector(".details")

var detailsTemplate = document.querySelector("#detailsTemplate");
var resultsTemplate = document.querySelector("#resultsTemplate");


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);
results.addEventListener('click', getDetails);


// Event handlers
// ----------------------------------------------
function getMovies(event) {
	event.preventDefault();
	var search = searchBx.value;
	// console.log(searchBx);
	var url = "http://www.omdbapi.com/?s=" + search;
	$.getJSON(url, fetchMovies);
	searchBx.value='';
}

function getDetails(event) {
	var target = event.target.closest("LI");
	var targetId = target.id;
	var url = "https://www.omdbapi.com/?i=" + targetId;
	$.getJSON(url, updateDetails);
}


// Update page
// ------------------------------------
function fetchMovies(json) {
	console.log('fetchMovies',json);
		results.innerHTML = '';
	var templateFn = Handlebars.compile(resultsTemplate.innerHTML);
	results.innerHTML = templateFn(json);

}

function updateDetails(json) {
	console.log('updateDetails', json);
	details.innerHTML = '';
	var templateFn = Handlebars.compile(detailsTemplate.innerHTML);
	details.innerHTML = templateFn(json);
}