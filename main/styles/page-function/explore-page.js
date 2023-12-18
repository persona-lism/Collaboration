function changeImage(step) {
    const imgContainer = document.querySelector(".image-slider-container-first");
    const imgContents = imgContainer.querySelectorAll(".image-cont-first");
    const imgBig = document.querySelector("#FirstImgExplore");
    const BigTitle = document.querySelector("#TitleExploreFirst");

    imgContents.forEach(imgContent => {
        const imgSmall = imgContent.querySelector(".img-dlm img");
        const span = imgContent.querySelector("p");
        const paragraph = imgContent.querySelector("span");

        let currentIndex = parseInt(span.innerText) - 1;
        currentIndex = (currentIndex + step + imgContents.length) % imgContents.length;

        // pertama: 2-1 = 1, 6 % 4 = (2) + 1 = 3
        // kedua: 3-1 = 2, 7 % 4 = (3) + 1 = 4
        // ketiga = 4-1 = 3, 8 % 4 = (0) + 1 = 1
        // keempat = 5-1 = 4 , 9 % 4 = (1) + 1 = 2
       

        span.innerText = currentIndex + 1;
        imgSmall.src = getImagePath(currentIndex);


        let nextIndex = (currentIndex + 2) % imgContents.length;
        let prevIndex = (currentIndex - 1 + imgContents.length) % imgContents.length;

        if (step > 0) {
            imgBig.src = getImagePath(nextIndex);
            paragraph.innerText = getTitle(currentIndex);
            BigTitle.innerText = getTitle(currentIndex );
        } else if (step < 0) {
            imgBig.src = getImagePath(prevIndex);
            paragraph.innerText = getTitle(currentIndex);
            BigTitle.innerText = getTitle(currentIndex);
        }
    });
}

function getImagePath(index) {
    const imagePath = [
        "../main/styles/assets/explore_bubur_pedas-removebg-preview.png",
        "../main/styles/assets/explore_sate_lilit-removebg-preview.png",
        "../main/styles/assets/explore_soto-removebg-preview.png",
        "../main/styles/assets/explore_empek_empek-removebg-preview.png"
    ];
    return imagePath[index];
}

function getTitle(indeks) {
    const titleText = ["Bubur Pedas", "Sate Lilit", "Soto Banjar", "Empek Empek"];
    return titleText[indeks];
}
