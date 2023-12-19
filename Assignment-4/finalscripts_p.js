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
