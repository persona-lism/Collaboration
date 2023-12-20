function changeImage(step) {
    const imgContainer = document.querySelector(".image-slider-container-first");
    const imgContents = imgContainer.querySelectorAll(".image-cont-first");
    const imgBig = document.querySelector("#FirstImgExplore");
    const BigTitle = document.querySelector("#TitleExploreFirst");
    const Description = document.querySelector("#DescriptionExploreFirst");

    imgContents.forEach(imgContent => {
        const imgSmall = imgContent.querySelector(".img-dlm img");
        const span = imgContent.querySelector(".p-1");
        const paragraph = imgContent.querySelector(".span-1");

        let currentIndex = parseInt(span.innerText) - 1;
        currentIndex = (currentIndex + step + imgContents.length) % imgContents.length;

        // pertama: 2-1 = 1, 6 % 4 = (2) + 1 = 3
        // kedua: 3-1 = 2, 7 % 4 = (3) + 1 = 4
        // ketiga = 4-1 = 3, 8 % 4 = (0) + 1 = 1
        // keempat = 5-1 = 4 , 9 % 4 = (1) + 1 = 2
       

        span.innerText = currentIndex + 1;
        imgSmall.src = getImagePath(currentIndex);


        let nextIndex = (currentIndex + 2) % imgContents.length;
        let prevIndex = (currentIndex - 6 + imgContents.length) % imgContents.length;

        if (step > 0) {
            imgBig.src = getImagePath(nextIndex);
            paragraph.innerText = getTitle(currentIndex);
            BigTitle.innerText = getTitle((currentIndex + step + imgContents.length + 1) % imgContents.length);
            Description.innerText = getDesc((currentIndex + step + imgContents.length + 1) % imgContents.length);
        } else if (step < 0) {
            imgBig.src = getImagePath(prevIndex);
            paragraph.innerText = getTitle(currentIndex);
            BigTitle.innerText = getTitle((currentIndex -6 + imgContents.length) % imgContents.length);
            Description.innerText = getDesc((currentIndex -6 + imgContents.length) % imgContents.length)
        }
    });
}

function getImagePath(index) {
    const imagePath = [
        "../main/styles/assets/explore_bubur_pedas-removebg-preview.png",
        "../main/styles/assets/explore_sate_lilit-removebg-preview.png",
        "../main/styles/assets/explore_soto-removebg-preview.png",
        "../main/styles/assets/explore_empek_empek-removebg-preview.png",
        "../main/styles/assets/explore-gudeg-removebg-preview.png",
        "../main/styles/assets/explore-mie_aceh-removebg-preview.png",
        "../main/styles/assets/explore-seblak-removebg-preview.png",
        "../main/styles/assets/explore_rawon-removebg-preview.png"
    ];
    return imagePath[index];
}

function getTitle(indeks) {
    const titleText = ["Bubur Pedas", "Sate Lilit", "Soto Banjar", "Empek Empek","Gudeg","Mie Aceh","Seblak","Rawon"];
    return titleText[indeks];
}

function getDesc(indek) {
    const deskripsi = [
        "Makanan tradisional khas orang Melayu Sambas dari Kalimantan Barat. Terbuat dari beras yang ditumbuk halus, bubur ini disajikan dalam bentuk sejenis bubur dengan campuran rempah dan sayuran",
        "Sate lilit adalah salah satu sate khas Bali yang berbeda dari sate pada umumnya. Sate lilit awalnya berasal dari Klungkung, salah satu kabupaten di Bali.. Sate ini terbuat dari daging cincang yang dicampur dengan bumbu genep dan parutan kelapa.\n\n Sate lilit dililitkan pada batang serai atau bambu. Sate lilit memiliki rasa gurih dan pedas yang khas, serta aroma yang menggugah selera.",
        "Hidangan khas suku Banjar di Kalimantan Selatan. Soto ini terbuat dari daging ayam yang dimasak dengan kuah gurih yang khas.\n\nAromanya yang harum, dihasilkan oleh rempah-rempah seperti kayu manis, biji pala, dan cengkeh Soto Banjar terkenal karena rasa kuahnya yang gurih.",
        "Makanan khas Palembang yang terbuat dari adonan tepung sagu, ikan tenggiri, dan beberapa bahan lainnya yang disajikan bersama kuah cuko",
        "Hidangan khas Indonesia, terutama berasal dari Yogyakarta dan Jawa Tengah.\n\nHidangan ini terbuat dari nangka muda yang dimasak dalam santan dan gula merah, memberikan rasa manis khas. Gudeg biasanya disajikan dengan nasi, ayam, telur, sambal, dan krecek.",
        "Masakan mie pedas khas Aceh, Indonesia. Mie ini memiliki ciri khas berupa mi kuning tebal yang disajikan dengan irisan daging sapi, daging kambing, atau makanan laut seperti udang dan cumi.\n\nMie Aceh dikenal sebagai sajian yang hanyut dalam racikan bumbu yang tajam dan kaya rempah",
        "Hidangan tradisional Indonesia yang berasal dari Bandung, Jawa Barat.\n\nHidangan ini terkenal dengan rasa pedas dan gurih. Seblak umumnya terbuat dari berbagai bahan dimasak bersama dengan bumbu pedas yang khas, seperti cabai, bawang, dan berbagai rempah-rempah.",
        "Makanan yang dibuat dari aneka bumbu, rempah, dan potongan daging sapi. Salah satu rempah yang digunakan untuk membuat rawon adalah kluwek atau keluak.Rempah hitam ini merupakan ciri khas utama rawon"
    ];
    return deskripsi[indek];
}


const all = document.querySelector(".showall");
const less = document.querySelector(".showless");
const imgContainer = document.querySelector(".image-slider-container-first");

let isExpanded = false;

const imgContents = imgContainer.querySelectorAll(".image-cont-first");
const imgBig = document.querySelector("#FirstImgExplore");
const BigTitle = document.querySelector("#TitleExploreFirst");
const Description = document.querySelector("#DescriptionExploreFirst");
const paragraph = document.querySelector(".image-cont-first span");

imgContents.forEach(imgContent => {
    imgContent.addEventListener("click", function () {
        const currentIndex = parseInt(this.querySelector("p").innerText) - 1;
        imgBig.src = getImagePath(currentIndex);
        paragraph.innerText = getTitle(currentIndex);
        BigTitle.innerText = getTitle(currentIndex);
        Description.innerHTML = getDesc(currentIndex);
    });
});


all.addEventListener("click", function() {
    imgContainer.style.overflow = "visible";
    imgContainer.classList.add("active1");
    less.style.marginTop = "12em";

    imgContents.forEach(imgContent => {
        imgContent.style.opacity = 1;
        imgContent.style.cursor = "pointer";
    });

    document.querySelector(".button-explore-slider").style.display = "none"; 

    all.style.display = "none";
    less.style.display = "block";

    isExpanded = true;
});


less.addEventListener("click", function() {
    const imgContents = imgContainer.querySelectorAll(".image-cont-first");

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

