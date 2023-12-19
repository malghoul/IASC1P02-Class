/*document.addEventListener('DOMContentLoaded', function()
{
  window.onscroll = function()
  {
    //grabs the distance scrolled from the top of the page
    var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    var whenToReveal = 50; //when to reveal content

    var scrollableContents = document.getElementById('ScrollableContents');

    if (scrollDistance > whenToReveal && scrollableContents.style.opacity !== '1')
    {
      scrollableContents.style.opacity = 1;
    }
    else if (scrollDistance <= whenToReveal && scrollableContents.style.opacity !== '0')
    {
      scrollableContents.style.opacity = 0;
    }
  };
});
when i had fading in content before i decided against it*/

function Navigation(takeAway)
{
  //function is set up to check which button was pressed
  var pageDestination;

  if (takeAway === 'about')
  {
    pageDestination = '#hopDown';
    console.log("Already on About Page");
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

  //actually changes the page after the if or else if runs
  window.location.href = pageDestination;
}
