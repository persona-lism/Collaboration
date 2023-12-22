const less = document.querySelector(".showless");
const imgContainer = document.querySelector(".image-slider-container-first");
const imgContents = imgContainer.querySelectorAll(".image-cont-first");
const imgBig = document.querySelector("#FirstImgExplore");
const BigTitle = document.querySelector("#TitleExploreFirst");
const Description = document.querySelector("#DescriptionExploreFirst");
const paragraph = document.querySelector(".image-cont-first span");

function myFunction(x) {
  if (x.matches) {
  
    
    all.addEventListener("click",function() {
        less.style.marginTop = "32rem";
    })
  } else {
    less.addEventListener("click", function () {
      imgContents.forEach((imgContent) => {
        imgContent.style.opacity = 0;
      });
    });
  }
}

let xm = window.matchMedia("(max-width: 568px)");
myFunction(xm);

xm.addEventListener("change", function (event) {
  myFunction(event.currentTarget);
});

