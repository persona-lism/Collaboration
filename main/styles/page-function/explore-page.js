function changeImage(step) {
    const imgContainer = document.querySelector(".image-slider-container-first");
    const imgContents = imgContainer.querySelectorAll(".image-cont-first");
    const imgBig = document.querySelector("#FirstImgExplore");
    const BigTitle = document.querySelector("#TitleExploreFirst");
    const Description = document.querySelector("#DescriptionExploreFirst");

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
        let prevIndex = (currentIndex - 2 + imgContents.length) % imgContents.length;

        if (step > 0) {
            imgBig.src = getImagePath(nextIndex);
            paragraph.innerText = getTitle(currentIndex);
            BigTitle.innerText = getTitle((currentIndex + step + imgContents.length + 1) % imgContents.length);
            Description.innerText = getDesc((currentIndex + step + imgContents.length + 1) % imgContents.length);
        } else if (step < 0) {
            imgBig.src = getImagePath(prevIndex);
            paragraph.innerText = getTitle(currentIndex);
            BigTitle.innerText = getTitle((currentIndex -2 + imgContents.length) % imgContents.length);
            Description.innerText = getDesc((currentIndex -2 + imgContents.length) % imgContents.length)
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

function getDesc(indek) {
    const deskripsi = [
        "bubur pedas",
        "Sate lilit adalah salah satu sate khas Bali yang berbeda dari sate pada umumnya. Sate lilit awalnya berasal dari Klungkung, salah satu kabupaten di Bali.. Sate ini terbuat dari daging cincang yang dicampur dengan bumbu genep dan parutan kelapa. <br> <br> Sate lilit dililitkan pada batang serai atau bambu. Sate lilit memiliki rasa gurih dan pedas yang khas, serta aroma yang menggugah selera.",
        "soto banjar",
        "empek empek"
    ]
    return deskripsi[indek]
}

const all = document.querySelector(".showall");
const less = document.querySelector(".showless");
const imgContainer = document.querySelector(".image-slider-container-first");

let isExpanded = false;

all.addEventListener("click", function() {
    const imgContents = imgContainer.querySelectorAll(".image-cont-first");

    imgContainer.style.overflow = "visible";
    imgContainer.classList.add("active1");
    less.style.marginTop = "12em";

    imgContents.forEach(imgContent => {
        imgContent.style.opacity = 1;
    });

    document.querySelector(".button-explore-slider").style.display = "none"; 

    all.style.display = "none";
    less.style.display = "block";

    isExpanded = true;
});

less.addEventListener("click", function() {
    const imgContents = imgContainer.querySelectorAll(".image-cont-first");
    const contentImg = imgContainer.querySelector(".actives");

    if (isExpanded) {
        imgContainer.style.overflow = "hidden";
        imgContainer.classList.remove("active1");

        imgContents.forEach(imgContent => {
            imgContent.style.opacity = imgContent.classList.contains("actives") ? 1 : 0.5;
        });

        document.querySelector(".button-explore-slider").style.display = "flex"; 

        all.style.display = "block";
        less.style.display = "none";

        isExpanded = false;
    }
});
