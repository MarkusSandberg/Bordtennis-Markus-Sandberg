/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function ChangeResponsive() {
  var x = document.getElementById("navID");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
