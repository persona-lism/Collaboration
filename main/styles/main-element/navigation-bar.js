const darkToogle = document.querySelector(".light-dark-switch");
const ToogleTitle = document.querySelector(".light-dark-switch span");

darkToogle.addEventListener("click",function() {
    darkToogle.classList.toggle("active");
    ToogleTitle.style.display = "none"
})

