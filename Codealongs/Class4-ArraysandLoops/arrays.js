// class 4
// creates a new array

// var a = [1,2,3,4];
var arr = [1,2,3,4,5,6,7,8,9,0];
arr.length; //There is no function bracket at the end
alert("I'm an array and this is my value " + arr);
console.log("this is the array " + arr);



// add new item to the array
// Push adds new array item at the end of the array
arr.push(10,11,12,13);

// add new item to the beginning of the array
arr.unshift(0);

// removing one item from the array
// To remove the last item from array we can use array.pop()
// To remove the first item of the array we can use array.shift

arr.pop(); 
// takes no argument, removes last item from the array
// returns the item
arr.shift();
/* This items are returned by the console and could thus be stored
 in a variable */
var b = arr.pop();
var c = arr.shift();

var total = 0;
a.foreach(add);

/* takes one argument
lang is part of callback function
runs the function 1 time for each item in the array
callback function takes upto 3 arguments
1st argument is the 

*/

function add(number, index) {
	total = total+ number;
	console.log(index,number);
}

console.log("total",total);

// anonymous function

days = ["mon","tue","wed"];
days.foreach(funciton(day){
 	console.log(day);


});

// generic variable name


// Loops Technique #2 - for loop

// Example of a for loop to return the elements of an array


var colors =[];
colors [0]= "red";
colors [1]= "green";
colors [2]= "yellow";
colors [3]= "orange";

var moreColor = ["indigo","sapphire","violet"];

// To Concat two arrays use arr1.concat(arr2) as shown below
newColors = colors.concat(moreColor);
console.log(colors);
console.log(moreColor);
console.log(newColors);

// For loop to retun index and name of the array
for(var i=0; i<newColors.length; i++){
	console.log("index of the color is " +i, "Color of array is " +newColors[i]);
}


/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/


// Write a for loop to increment an array by 1
 
 var arr1 = [0,1,2,3,4,5,6,7,8];
 var arr2 = [];

 for(var i=0; i<arr1.length; i++){
 	arr2[i]=arr1[i]+1;
 }
 console.log("arr1 was", arr1);
 console.log("arr2 is", arr2);





// Define a function to increment an array by 1
var numbers =	[1,2,3,4];
var numberInc = [];
function incArr(){
// var b = numbers.length -1;
	for(var i=0; i<b; i++){
		numberInc[i] = numbers[i] +1;
	}
	return numberInc;
}


// Example done in the class below
var arr1 = [1,2,3,4];
var arr2 = [];
for(var i=0; i< arr1.length; i++){
	arr2[i] = arr1[i]+1;
}
console.log("arr1", arr1);
console.log("arr2", arr2);


/*
Incomplete work below
function increment1(x) {
	var y = x+1;
}

var arr3 = [];
arr1.forEach(incremnet1);
/*
/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/

console.log("arr2", arr2);
var average = 0;
var sum = 0;
 for( var i=0; i<arr2.length; i++){
 	sum = sum + arr2[i];
 }
average = sum/ arr2.length;

 console.log("Average=", average );
// Done again after class

var sum =0;
var num =0;
var avg =0;

for(var i=0; i<arr2.length; i++){
	sum = sum + arr2[i];
}

avg = sum/i;
console.log("sum =", sum )
console.log("count =", i )
console.log("Average = sum/count=", avg )





/**
* Arrays
* Most of your answers should be stored in variables called q1, q2 etc..
* and the variables printed to the console.
*
* For example:
* var q0 = "abc"
* console.log("Question 0" , q0)
*/

/** Question 1
* Create an array of image source filenames.
* Use "image1.png", "image2.png", and "image3.png" as the array values.
*/
 
 var q1 = ["image1.png", "image2.png", "image3.png"];


/** Question 2
* Using the array from Question 1, store the first element of the array
* in variable q2.
*/

var q2 = q1[0];


/** Question 3
* Get the length of the first array (number of elements in the array)
* and store it in variable q3
*/

var q3 = q1.length;


/** Question 4
* Using the array from Question 1, store the last element of the array
* in variable q4. Hint: How can we get the number of elements in the array?
*/

var q4 = q1[(q1.length-1)];
console.log(q4);


// Callback

/*
Function: declare, call reference
Calling a function by name at a later point
Eg: events, ajax, timer, foreach loop
Call by browser/js engine
Pass a function as an argument to another function


*/

var a1 = [1,2,3,4,5,5,6,7,8,9,9,7,6,5,5,44,4];


a.foreach()

