function performOperation(operation)
{
  var num1 = parseFloat(document.getElementById('number1').value);
  var num2 = parseFloat(document.getElementById('number2').value);
  if (!isNaN(num1) && !isNaN(num2))
  {
    document.getElementById('theTotals').innerHTML = operation(num1, num2);
  }
  else document.getElementById('theTotals').innerHTML = "Those are not numbers...";
}

//functions for the operatiosn
function addition()
{
  performOperation((num1, num2) => num1 + num2);
}

function subtraction()
{
  performOperation((num1, num2) => num1 - num2);
}

function multiplication()
{
  performOperation((num1, num2) => num1 * num2);
}

function division()
{
  performOperation((num1, num2) => num1 / num2);
}
