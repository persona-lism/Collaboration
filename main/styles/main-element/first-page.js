let slideIndex = 0;

const Imglist = document.querySelectorAll(".imgSlider");
const Prev = document.getElementById("left-slider");
const Next = document.getElementById("right-slider");


showSlide(slideIndex)

Prev.addEventListener("click",function(){
    plusDivs(-1);
});

Next.addEventListener("click",function(){
    plusDivs(1);
})

function plusDivs(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(n) {
    if (n >= Imglist.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = Imglist.length - 1
    }

    // for (let i = 0; i < Imglist.length; i++) {
    //     Imglist[i].style.display = "none";
    // }

    

    Imglist[slideIndex].style.display = "flex"
}





