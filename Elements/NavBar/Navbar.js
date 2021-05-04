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

