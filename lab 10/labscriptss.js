function loadFunc()
{
  console.log("Page has loaded"); //console loads this

  document.getElementById("overwrite").innerHTML="working"; //writes to the html site

  var sampleNum = 12;

  var maxNumber = Math.max(sampleNum, 6, 8, 20.2, -0.7, 109.8);
  console.log(maxNumber); //writes the answer to the console

  var roundedMaxNum = Math.round(maxNumber);
  console.log(roundedMaxNum); //writes the answer 2 console

  var squareRootNum = Math.sqrt(roundedMaxNum);
  console.log(squareRootNum); //sends the answer to the console

  var roundDownTensDigit = maxNumber/10; //for 101.8 it would be 10.98
  roundDownTensDigit = Math.floor(); //floor = rounding down, ceiling = rounding up
  roundDownTensDigit = roundDownTensDigit*10; //we have a whole number multiple of 10
  console.log(roundDownTensDigit);

  var diceRoll = Math.random()*7+1; //always from 0-1 if theres no specifications
  //multiply 7 add 1 gives this parameters: random num between 1 and almost 8
  diceRoll = Math.floor(diceRoll); //whole numbers of the random generator
  console.log("die: " + diceRoll); //posts the answer 2 console

  //i already know this!!!! yipeeee :)
  if(diceRoll == 1)
  {
    console.log("You lost!");
  }
  else if(diceRoll == 5 || diceRoll == 6)
  {
    console.log("You won!");
  }
  else if(1==2)
  {
    console.log("secret numerz");
  }
  else
  {
    if(diceRoll == 3)
    {
      console.log("kachow");
    }
    console.log("Tie!");
  }
}
/*var storedRolls[5]; //5 is the length of this array if u wanna use it for dice rolls

//loop time ! for loops in js is rlly similar to c#
//arrays are generally the same as c#
for (var i = 0; i < storedRolls.length; i++)
{
  storedRolls[i]
}*/

for(var i=0; i < 5; i++)
{
  diceRoll = Math.random()*7+1;
  diceRoll = Math.floor(diceRoll);
  console.log("die: " + diceRoll);
}

console.log("finished");

setTimeout(callback1, 1000);

//these two functions don't break the page because of their delay
function callback1()
{
  console.log("callback1");
  setTimeout(callback2, 500);
}

function callback2()
{
  console.log("cb2");
  setTimeout(callback1, 500);
}
