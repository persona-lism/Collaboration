// let slideIndex = 0;

// const Imglist = document.querySelector(".image-slider-third");
// const Prev = document.getElementById("left-slider");
// const Next = document.getElementById("right-slider");
// // console.log(Imglist);

// showSlide(slideIndex)

// Prev.addEventListener("click",function(){
//     plusDivs(-1);
// });

// Next.addEventListener("click",function(){
//     plusDivs(1);
// })

// function plusDivs(n) {
//     slideIndex += n;
//     showSlide(slideIndex);
// }

// function showSlide(n) {
//     if (n >= Imglist.length) {
//         slideIndex = 0;
//     } else if (n < 0) {
//         slideIndex = Imglist.length - 1
//     }

//     for (let i = 0; i < Imglist.length; i++) {
//         Imglist[i].style.display = "none";
//     }

//     Imglist[slideIndex].style.display = "block"
// }

// var slider = new Swiper('.third-content-image-slider', {
//     slidesPerView: 1,
//     centeredSlides: true,
//     loop: true,
//     loopedSlides: 1,
//     navigation: {
//         nextEl: '.right-slider',
//         prevEl: '.left-slider',
//     },
// });

// document.querySelector('.right-slider').addEventListener('click', function () {
//     slider.slideNext();
// });

// document.querySelector('.left-slider').addEventListener('click', function () {
//     slider.slidePrev();
// });


// var slider = new Swiper('.third-content-image-slider', {
//     slidesPerView: 1,
//     centeredSlides: true,
//     loop: true,
//     loopedSlides: 3, 
//     navigation: {
//         nextEl: '.left-slider',
//         prevEl: '.right-slider',
//     },
// });

// document.querySelector('.left-slider').addEventListener('click', function () {
//     slideNextOrRestart();
// });

// document.querySelector('.right-slider').addEventListener('click', function () {
//     slidePrevOrRestart();
// });

// function slideNextOrRestart() {
//     var currentIndex = slider.activeIndex;
//     if (currentIndex < slider.slides.length - 1) {
//         slider.slideNext();
//     } else {
//         slider.slideTo(0);
//     }
// }

// function slidePrevOrRestart() {
//     var currentIndex = slider.activeIndex;
//     if (currentIndex > 0) {
//         slider.slidePrev();
//     } else {
//         slider.slideTo(slider.slides.length - 1);
//     }
// }



const slider = document.querySelector(".items");
    const slides = document.querySelectorAll(".item");
    const button = document.querySelectorAll(".button");

    let current = 0;
    let prev = 4;
    let next = 1;

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    }

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
      current = number;
      prev = current - 1;
      next = current + 1;

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
      }

      if (next == 5) {
        next = 0;
      }

      if (prev == -1) {
        prev = 4;
      }

      slides[current].classList.add("active");
      slides[prev].classList.add("prev");
      slides[next].classList.add("next");
    }