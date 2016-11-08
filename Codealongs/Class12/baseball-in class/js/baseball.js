// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');
var dateTemplate = document.querySelector("#date-template");


// Templates
// ------------------------------------------
// ------------------------------------


// Update page
// ------------------------------------
	function updateResult(json) {
	console.log('updateResult',json);


	//Handlebars step 2: compie the template from HTML source
	var templateFn= Handlebars.compile(dateTemplate.innerHTML);
	
	// Handlebars step 3:
	var html = templateFn(json);
	games.innerHTML = html;

}

updateResult(date);