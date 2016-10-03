
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////


function calcLongestSide(A,B) {
 return Math.sqrt((A*A)+B*B);
}

function calcCircumference(r){
 return (2*Math.PI*r);

}

function calcFahrenheitToCelcius(TinF) {
 return ((TinF - 32) * 5/9);

}

function calcCelciusToFarenheit(TinC) {
 return (TinC * (9/5) + 32);

}
