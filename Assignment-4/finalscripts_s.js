function Navigation(takeAway)
{
  var pageDestination;

  if (takeAway === 'about')
  {
    pageDestination = 'final_assignment_about.html';
    console.log("About Page");
  }
  else if (takeAway === 'portfolio')
  {
    pageDestination = 'final_assignment_portfolio.html';
    console.log("Art Page");
  }
  else if (takeAway === 'shop')
  {
    pageDestination = 'final_assignment_shop.html';
    console.log("Shop Page");
  }
  else if (takeAway === 'contact')
  {
    pageDestination = 'final_assignment_contact.html';
    console.log("Contact Page");
  }

  window.location.href = pageDestination;
}

function addToCart()
{
  var confirmationPopUp = confirm("Are you sure you want to add this item into your cart? It doesn't ACTUALLY exist.");

  if (confirmationPopUp)
  {
    alert("Added to your cart!");
  }
  else
  {
    alert("Good choice, you don't wanna get scammed after all!");
  }
}

var endingDate = new Date();

var storedTime = localStorage.getItem('saleEndTime');

endingDate.setHours(endingDate.getHours() + 24);

var countingDown = document.getElementById('countdown');

if (storedTime)
{
  endingDate = new Date(storedTime);
}
else
{
  endingDate = new Date();
  endingDate.setHours(endingDate.getHours() + 24);

  localStorage.setItem('saleEndTime', endingDate.toString());
}

function updateCountDown()
{
  var rightNow = new Date();
  var difference = endingDate - rightNow;

  if (difference > 0)
  {
    var hours = Math.floor(difference / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countingDown.innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's';
  }
  else
  {
    countingDown.innerHTML = 'SALE ENDED!';
  }
}

setInterval(updateCountDown, 1000);
updateCountDown();
