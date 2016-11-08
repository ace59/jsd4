
function initMap(){
	console.log('initMap');
}



console.log("connected");
var button = document.querySelector('button');
var myLocation = document.querySelector('.myLocation');


// setup the callback when the position is determined
// use the geolocation api



button.addEventListener('click',getPosition);


function getPosition(e){
	navigator.geolocation.getCurrentPosition(updateLocation);
}



// callback function
function updateLocation(position){
	console.log('updateLocation');
	console.log(position);

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	myLocation.textContent = longitude + ',' + latitude;

	createGoogleMap(latitude,longitude);
}




// Gogole maps API part1

function createGoogleMap(latitude,longitude){
	var el = document.querySelector('#google-map');

	var options = {
	center: { lat: latitude, lng: longitude},
          zoom: 8
	};
	var map = new google.maps.Map(el, options);
	// debugger;
	var marker = new google.maps.Marker({
		map: map,
		position: { lat: latitude, lng: longitude}

	});

}








