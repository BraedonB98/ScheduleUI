//HERE IS THE JAVASCRIPT CODE------------------------------------------------------------------------------
window.onscroll = function() {topNavBarStick()};// When the user scrolls the page, execute myFunction
let navbar = document.getElementById("navbar");
let sticky = 0.1;// Get the offset position of the navbar


function topNavBarStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var memStorage = window.sessionStorage;
var locStorage = window.localStorage;

function defaultPage()
{
    if(memStorage.getItem('user')!=null)
    {
        document.getElementById('rightAlignNav').innerHTML = ("<a href=\"#\"type=\"button\" onclick=\"logout();\" id = logoutNavButton>Log Out</a> <a href=\"https://jj2628.netlify.app/pages/manage/manage\">Manage</a>");
    }
    else{
      document.getElementById('rightAlignNav').innerHTML = ("<a href=\"https://jj2628.netlify.app/pages/login/login\" id = loginNavButton >Log In</a>");
    }
    //check if there is already a user saved in memory, if so enter in values to forms
}

function logout()
{
  console.log("logging out");
  memStorage.removeItem('user');
  location.reload();
}

defaultPage();

//document.querySelector("#logoutNavButton").addEventListener("click", logout);