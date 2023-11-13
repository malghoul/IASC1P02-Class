var start = new Date(); //captures the start time

function updateTimer()
{
  const now = new Date();
  const secondsPassed = Math.floor((now - start) / 1000); //calculates the seconds
}

var timerInterval = setInterval(updateTimer, 1000);
//sets up a timer that calls the update function every 1000 milliseconds (1 sec)
//stores the interval in our variable 'timerInterval'

function stopTime()
{
  clearInterval(timerInterval); //stops the timer
  const now = new Date(); //constant var to get the current time

  //subtracts start time from current time & divides 1000 to convert to seconds
  //stores result in our constant variable 'secondsPassed'
  const secondsPassed = ((now - start) / 1000);

  //displays the pop up alert with the amount of time
  alert("You have been on this page for: " + secondsPassed + " seconds");
}
