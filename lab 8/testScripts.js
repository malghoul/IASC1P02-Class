document.write("Hello World!");
console.log("wrote helo world");

function function1()
{
  document.getElementById("f1Ref").innerHTML="Look, it worked!";
  document.getElementById("f1Ref").style.color="green";

  console.log("made f1Ref green and overwrote them");
}

function changeIntro()
{
  document.getElementById("annoy").style.color="red";
}



var numX, numY;
numX=2;
numY=5;
//establishing number variables
var numZ=0;

function addXandY()
{
  document.getElementById("result").innerHTML=(numX+numY); //adds the variables together
}

function incx() //increment (add 1)
{
  numX++; //increases it by one
  document.getElementById("x").innerHTML=numX;
}

function incy()
{
  numY++;
  document.getElementById("y").innerHTML=numY;
}

function add(x, y)
{
  document.getElementById("result").innerHTML=(x+y);
}
