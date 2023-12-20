
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