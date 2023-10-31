//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color = "blue";
document.getElementById("green").style.color = "green";
document.getElementById("red").style.color = "red";

var first, second, third;
first = "#00BB00";
second = "#BB9320";
third = "#AB00FF";

//A function to change colours of elements when called
function mix()
{
	console.log("your mom");
	document.getElementById("blue").style.color = first;
	document.getElementById("green").style.color = second;
	document.getElementById("red").style.color = third;
}
