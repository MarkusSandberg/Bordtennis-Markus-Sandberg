/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function ChangeResponsive() {
  var x = document.getElementById("navID");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

var slideIndex = 0;
swap();

function swap() {
  var i;
  var x = document.getElementsByClassName("slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(swap, 6000);
}
