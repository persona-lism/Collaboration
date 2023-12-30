const less = document.querySelector(".showless");
const all = document.querySelector(".showall");
const imgContainer = document.querySelector(".image-slider-container-first");
const imgContents = imgContainer.querySelectorAll(".image-cont-first");
const imgBig = document.querySelector("#FirstImgExplore");
const BigTitle = document.querySelector("#TitleExploreFirst");
const Description = document.querySelector("#DescriptionExploreFirst");
const paragraph = document.querySelector(".image-cont-first span");

function myFunction(x) {
  if (x.matches) {
    less.addEventListener("click", function () {
        imgContents.forEach((imgContent) => {
          imgContent.style.opacity = 0;
        });
      });
    
    all.addEventListener("click",function() {
        less.style.marginTop = "32rem";
    })
  } 
}

let x = window.matchMedia("(max-width: 568px)");
myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});
