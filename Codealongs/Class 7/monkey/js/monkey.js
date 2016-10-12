/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/


var monkey1 ={

name :"fido",
species : "Capuchin Monkey",
foodsEaten : ["banana", "peanut","watermelon"],
eatSomething: function() {
	var val1 = "Hello" + " My name is  " + this.name + " , ";
	var val2 = "My species is " + this.species+ " and ";
	var val3 = "I eat " + this.foodsEaten;
return val1 + val2 + val3 ;	

 }
}

// monkey1.eatSomething()

var monkey2 ={

name :"lido",
species : "Dapuchin Monkey",
foodsEaten : ["strawberry", "berry"],
eatSomething: function() {
	var val1 = "Hello" + " My name is  " + this.name + " , ";
	var val2 = "My species is " + this.species+ " and ";
	var val3 = "I eat " + this.foodsEaten;
return val1 + val2 + val3 ;	

 }
}
var monkey3={

name :"mido",
species : "Eapuchin Monkey",
foodsEaten : ["melon"],
eatSomething: function() {
	var val1 = "Hello" + " My name is  " + this.name + " , ";
	var val2 = "My species is " + this.species+ " and ";
	var val3 = "I eat " + this.foodsEaten;
return val1 + val2 + val3 ;	

 }
}

 function Monkey(name, species, foodsEaten) {
      this.name = name;
      this.species = species;
      this.foodsEaten =foodsEaten;
}

Monkey.prototype = {
eatSomething: function(){
    var val1 = "Hello" + " My name is  " + this.name + " , ";
	var val2 = "My species is " + this.species+ " and ";
	var val3 = "I eat " + this.foodsEaten;
return val1 + val2 + val3 ;	
    }
}

// Monkey.prototype = {
//  drinkSomething: function(){
//  	var val1 = "eat";
//  	var val2 = "drink";
//  	var val3 = "sleep";
// return val1 + val2 + val3 ;	

//  }

// }

var monkey4 = new Monkey("Sido", "newSpecies", "Berries");

/*

constructor can be defined like this:
function Monkey(name, species){
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
};
Monkey.prototype = {
	eatSomething: function(food){
		console.log("eat Something", food);
		this.foodsEaten.push(food);
	},
	introduce: function(){
		console.log("fn eat Something");
		return  "Hello" + " My name is  " + this.name + " , ";

	}
}

}

To return the length of a key you can use Object.keys(objectName).length

*/

