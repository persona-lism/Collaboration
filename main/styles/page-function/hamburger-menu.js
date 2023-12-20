
function hamburgerMenu() {
    var menu = document.getElementById("hamburger-content");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function hamburgerMenuAnimation() {
    var animation = document.getElementById("hamburger-menu");
    if (animation.style.transform === "matrix(0, 1, 1, 0, 0, 0)") {
      animation.style.transform = "none";
    } else {
      animation.style.transform = "matrix(0, 1, 1, 0, 0, 0)";
    }
}

function responsiveMenu(x) {
  var animation = document.getElementById("hamburger-menu");
  var menu = document.getElementById("hamburger-content");
  if (responsiveWidth768px.matches) {
    menu.style.display = "none";
    animation.style.transform = "none";
  } else {
    menu.style.display = "none";
    animation.style.transform = "none";
  }
}

var responsiveWidth768px = window.matchMedia("(min-width: 768px)");

responsiveMenu(responsiveWidth768px);
responsiveWidth768px.addListener(responsiveMenu)