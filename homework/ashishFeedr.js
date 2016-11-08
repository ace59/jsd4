
var hbTemplate = document.querySelector('#diggTemplate');
var newsContent = document.querySelector('.newsContent');
var url = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";  
$.getJSON(url, updateNews);

// Update page
// ------------------------------------
	function updateNews(json) {
// Compiles the handlebars template
	var diggTemplateFn = Handlebars.compile(hbTemplate.innerHTML);	
	// Handlebars step 3:
	var html = diggTemplateFn(json);
	newsContent.innerHTML = html;
	
}

