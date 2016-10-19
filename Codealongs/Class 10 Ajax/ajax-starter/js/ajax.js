

// get a random gif
function getGif(tag){
var url = "http://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC" +tag;
jQuery.getJSON(url,handleCats);	
}

// callback function
	function handleCats(json){
	console.log("handleCats", json);

// create and append image element
	var img =document.createElement("img");
	img.src = "";
	document.body.appendChild(img);
	img.src = json.data.image_url;
	document.body.appendChild(img);




}