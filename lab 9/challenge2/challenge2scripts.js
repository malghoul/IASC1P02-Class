var savedAge = prompt("What is your age?");
//pops up the prompt
//the code below converts the entered age into a number
var age = parseInt(savedAge);

//this gets the current year as a variable
var findCurrentYear = new Date().getFullYear();

//this calculates the input birth year with current year subtracted by age
var birthYear = findCurrentYear - age;


//this will input the result
document.getElementById('yearResult').innerHTML = "Your estimated birth year: " + birthYear;
