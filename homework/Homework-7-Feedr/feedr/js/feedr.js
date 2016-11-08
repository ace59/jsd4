/*
  Please add all Javascript code to this file.
*/


var hbTemplate = document.querySelector('#diggTemplate');
var articleContent = document.querySelector('.articleContent');
var url = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";  
$.getJSON(url, updateNews);

// Update page
// ------------------------------------
	function updateNews(json) {
// Compiles the handlebars template
	var diggTemplateFn = Handlebars.compile(hbTemplate.innerHTML);	
	// Handlebars step 3:
	var html = diggTemplateFn(json);
	articleContent.innerHTML = html;
	
}

