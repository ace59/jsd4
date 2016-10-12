console.log("Elements");

// Get the ul fron the DOM
var brands = document.querySelector(".brands");

// create a new li element
var li = document.createElement("li");

// set the text content of the new li
li.innerHTML = "reebok";

// add the new li to the DOM
brands.appendChild(li);

