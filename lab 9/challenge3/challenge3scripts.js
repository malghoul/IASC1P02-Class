function simpleAddition()
{
  //makes variables as floats for the inputs in the forum
  var num1 = parseFloat(document.getElementById('number1').value);
  var num2 = parseFloat(document.getElementById('number2').value);

  //this if statement checks if the inputs are valid
  //i dont know if using an if & else statement is alright or if you wanted a different way
  if(!isNaN(num1) && !isNaN(num2))
  {
    var totalAdded = num1 + num2;
    document.getElementById('theTotal').innerHTML = totalAdded;
  }
  //if the inputs are not valid floats, it'll generate this instead of an answer
  else
  {
    document.getElementById('theTotal').innerHTML = "Use a number, ok!!";
  }
}
