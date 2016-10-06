// alert("linked");
var grade =  prompt("What is the grade?");
grade = grade.toUpperCase();

// Grade check

// If loop
if(grade == "A") {
	console.log("if statement: Awesome");
} else if (grade=="B"){
	console.log("if statement: Good");
} else{
		console.error("if statement: error: Awesome");
}

// Switch example
switch (grade) {
  case "A":
    console.log("Switch statement: Awesome");
    break;
  case "B":
    console.log("Switch statement:Good");
    break;
  case "C":
	console.log("Switch statement: Try harder");
    break;
  default:
    console.error("Switch statement: error: Awesome");
}

// Switch to use consolidated variables into one

switch (grade) {
  case "A":
  case "B":
  case "C":
  case "D":
    console.log("Switch2statement: Pass");
    break;
  case "F":
  	console.log("FSwitch2statement: ail");
  	break;
  default:
    console.error("Switch2statement: error: Awesome");
}


