var exactDate = new Date();
var startTime = exactDate.getTime();

console.log("Page load began...");

function nothing()
{
  console.log("User pressed the date button");
  document.getElementById("DATE").innerHTML = year+"."+month+"."+date;
}

console.log(exactDate);
console.log("Pull pieces from exactDate");

var month = exactDate.getMonth() + 1; //to avoid 0-based indexing error
var year = exactDate.getFullYear();
var date = exactDate.getDate();
var time = exactDate.getTime();



console.log("Month: "+month);
console.log("Year: "+year);
console.log("Date: "+date);

// var myAlert = alert("HHHHHHHHHH");
// console.log(myAlert);

// var myConfirm = confirm("is clifford red?");
// console.log(myConfirm);

// var myPrompt = prompt("Who is Blue's friend? (from blue's clues)");
// console.log(myPrompt);

function sellSoul()
{
  console.log(document.getElementById("paramName").value);
  console.log(document.getElementById("paramPassword").value);
}

exactDate = new Date();
var endTime = exactDate.getTime();
console.log("Page load took "+(endTime-startTime)+"ms");
