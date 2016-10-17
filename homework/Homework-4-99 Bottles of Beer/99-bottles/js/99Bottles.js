 var lyrics;
 var bottles, bottle;
 var ul = document.querySelector("#songs");
 

 for (var i = 99; i >= 0; i--) {
 	if (i>1) { 	
		var li = document.createElement("li");	 	
	 	li.innerHTML = lyricsGenPlural(i);
	 	ul.appendChild(li);
  }
    else if(i==1){
	    var li = document.createElement("li");
	    li.innerHTML = lyricsGenSingle();
	 	ul.appendChild(li); 
  }	
 	else{
 		var li = document.createElement("li");
 		li.innerHTML = lyricsGenZero();
 		ul.appendChild(li); 
 	}
}

function lyricsGenPlural(x){
	output99 = x + " " +" bottles of beer on the wall, " + x +" bottles of beer.\n" +
	"Take one down and pass it around, "+ x + " bottles of beer on the wall.";
	return output99;
}
function lyricsGenSingle(){
	return("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
}
function lyricsGenZero(){
	return("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}