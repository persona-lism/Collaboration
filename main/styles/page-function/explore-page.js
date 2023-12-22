function changeImage(step) {
  const imgContainer = document.querySelector(".image-slider-container-first");
  const imgContents = imgContainer.querySelectorAll(".image-cont-first");
  const imgBig = document.querySelector("#FirstImgExplore");
  const BigTitle = document.querySelector("#TitleExploreFirst");
  const Description = document.querySelector("#DescriptionExploreFirst");

  imgContents.forEach((imgContent) => {
    const imgSmall = imgContent.querySelector(".img-dlm img");
    const span = imgContent.querySelector(".p-1");
    const paragraph = imgContent.querySelector(".span-1");

    let currentIndex = parseInt(span.innerText) - 1;
    currentIndex =
      (currentIndex + step + imgContents.length) % imgContents.length;

    // pertama: 2-1 = 1, 6 % 4 = (2) + 1 = 3
    // kedua: 3-1 = 2, 7 % 4 = (3) + 1 = 4
    // ketiga = 4-1 = 3, 8 % 4 = (0) + 1 = 1
    // keempat = 5-1 = 4 , 9 % 4 = (1) + 1 = 2

    span.innerText = currentIndex + 1;
    imgSmall.src = getImagePath(currentIndex);

    let nextIndex = (currentIndex + 2) % imgContents.length;
    let prevIndex =
      (currentIndex - 6 + imgContents.length) % imgContents.length;

    if (step > 0) {
      imgBig.src = getImagePath(nextIndex);
      paragraph.innerText = getTitle(currentIndex);
      BigTitle.innerText = getTitle(
        (currentIndex + step + imgContents.length + 1) % imgContents.length
      );
      Description.innerText = getDesc(
        (currentIndex + step + imgContents.length + 1) % imgContents.length
      );
    } else if (step < 0) {
      imgBig.src = getImagePath(prevIndex);
      paragraph.innerText = getTitle(currentIndex);
      BigTitle.innerText = getTitle(
        (currentIndex - 6 + imgContents.length) % imgContents.length
      );
      Description.innerText = getDesc(
        (currentIndex - 6 + imgContents.length) % imgContents.length
      );
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
    "../main/styles/assets/explore_rawon-removebg-preview.png",
  ];
  return imagePath[index];
}

function getTitle(indeks) {
  const titleText = [
    "Bubur Pedas",
    "Sate Lilit",
    "Soto Banjar",
    "Empek Empek",
    "Gudeg",
    "Mie Aceh",
    "Seblak",
    "Rawon",
  ];
  return titleText[indeks];
}

function getDesc(indek) {
  const deskripsi = [
    "Makanan tradisional khas orang Melayu Sambas dari Kalimantan Barat. Terbuat dari beras yang ditumbuk halus, bubur ini disajikan dalam bentuk sejenis bubur dengan campuran rempah dan sayuran",
    "Sate lilit adalah salah satu sate khas Bali yang berbeda dari sate pada umumnya. Sate lilit awalnya berasal dari Klungkung, salah satu kabupaten di Bali.. Sate ini terbuat dari daging cincang yang dicampur dengan bumbu genep dan parutan kelapa. Sate lilit dililitkan pada batang serai atau bambu. Sate lilit memiliki rasa gurih dan pedas yang khas, serta aroma yang menggugah selera.",
    "Hidangan khas suku Banjar di Kalimantan Selatan. Soto ini terbuat dari daging ayam yang dimasak dengan kuah gurih yang khas. Aromanya yang harum, dihasilkan oleh rempah-rempah seperti kayu manis, biji pala, dan cengkeh Soto Banjar terkenal karena rasa kuahnya yang gurih.",
    "Makanan khas Palembang yang terbuat dari adonan tepung sagu, ikan tenggiri, dan beberapa bahan lainnya yang disajikan bersama kuah cuko",
    "Hidangan khas Indonesia, terutama berasal dari Yogyakarta dan Jawa Tengah. Hidangan ini terbuat dari nangka muda yang dimasak dalam santan dan gula merah, memberikan rasa manis khas. Gudeg biasanya disajikan dengan nasi, ayam, telur, sambal, dan krecek.",
    "Masakan mie pedas khas Aceh, Indonesia. Mie ini memiliki ciri khas berupa mi kuning tebal yang disajikan dengan irisan daging sapi, daging kambing, atau makanan laut seperti udang dan cumi. Mie Aceh dikenal sebagai sajian yang hanyut dalam racikan bumbu yang tajam dan kaya rempah",
    "Hidangan tradisional Indonesia yang berasal dari Bandung, Jawa Barat. Hidangan ini terkenal dengan rasa pedas dan gurih. Seblak umumnya terbuat dari berbagai bahan dimasak bersama dengan bumbu pedas yang khas, seperti cabai, bawang, dan berbagai rempah-rempah.",
    "Makanan yang dibuat dari aneka bumbu, rempah, dan potongan daging sapi. Salah satu rempah yang digunakan untuk membuat rawon adalah kluwek atau keluak.Rempah hitam ini merupakan ciri khas utama rawon",
  ];
  return deskripsi[indek];
}

let isExpanded = false;
const all = document.querySelector(".showall");
const less = document.querySelector(".showless");

const imgContainer = document.querySelector(".image-slider-container-first");
const imgContents = imgContainer.querySelectorAll(".image-cont-first");
const imgBig = document.querySelector("#FirstImgExplore");
const BigTitle = document.querySelector("#TitleExploreFirst");
const Description = document.querySelector("#DescriptionExploreFirst");
const paragraph = document.querySelector(".image-cont-first span");


all.addEventListener("click", function () {
  imgContainer.style.overflow = "visible";
  imgContainer.classList.add("active1");
  less.style.marginTop = "12em";


  imgContents.forEach((imgContent) => {
    imgContent.style.opacity = 1;
    imgContent.style.cursor = "pointer";


    imgContent.addEventListener("click", function () {
      const currentIndex = parseInt(imgContent.querySelector("p").innerText) - 1;
      imgBig.src = getImagePath(currentIndex);
      paragraph.innerText = getTitle(currentIndex);
      BigTitle.innerText = getTitle(currentIndex);
      Description.innerHTML = getDesc(currentIndex);
    });
  });

  document.querySelector(".button-explore-slider").style.display = "none";

  all.style.display = "none";
  less.style.display = "block";

  isExpanded = true;
});

less.addEventListener("click", function () {
  const imgContents = imgContainer.querySelectorAll(".image-cont-first");

  if (isExpanded) {
    imgContainer.style.overflow = "hidden";
    imgContainer.classList.remove("active1");

    imgContents.forEach((imgContent) => {
      imgContent.style.opacity = imgContent.classList.contains("actives") ? 1 : 0.5;
    });

    document.querySelector(".button-explore-slider").style.display = "flex";

    all.style.display = "block";
    less.style.display = "none";

    isExpanded = false;
  }
});








// Art & Music
function changeImage2(step2) {
  const imgContainer2 = document.querySelector(".image-slider-container-first-2");
  const imgContents2 = imgContainer2.querySelectorAll(".image-cont-first-2");
  const imgBig2 = document.querySelector("#FirstImgExplore-2");
  const BigTitle2 = document.querySelector("#TitleExploreFirst-2");
  const Description2 = document.querySelector("#DescriptionExploreFirst-2");

  imgContents2.forEach((imgContent2) => {
    const imgSmall2 = imgContent2.querySelector(".img-dlm-2 img");
    const span2 = imgContent2.querySelector(".p-2");
    const paragraph2 = imgContent2.querySelector(".span-2");

    let currentIndex2 = parseInt(span2.innerText) - 1;
    currentIndex2 =
      (currentIndex2 + step2 + imgContents2.length) % imgContents2.length;

    // pertama: 2-1 = 1, 6 % 4 = (2) + 1 = 3
    // kedua: 3-1 = 2, 7 % 4 = (3) + 1 = 4
    // ketiga = 4-1 = 3, 8 % 4 = (0) + 1 = 1
    // keempat = 5-1 = 4 , 9 % 4 = (1) + 1 = 2

    span2.innerText = currentIndex2 + 1;
    imgSmall2.src = getImagePath2(currentIndex2);

    let nextIndex2 = (currentIndex2 + 2) % imgContents2.length;
    let prevIndex2 =
      (currentIndex2 - 6 + imgContents2.length) % imgContents2.length;

    if (step2 > 0) {
      imgBig2.src = getImagePath2(nextIndex2);
      paragraph2.innerText = getTitle2(currentIndex2);
      BigTitle2.innerText = getTitle2(
        (currentIndex2 + step2 + imgContents2.length + 1) % imgContents2.length
      );
      Description2.innerText = getDesc2(
        (currentIndex2 + step2 + imgContents2.length + 1) % imgContents2.length
      );
    } else if (step2 < 0) {
      imgBig2.src = getImagePath2(prevIndex2);
      paragraph2.innerText = getTitle2(currentIndex2);
      BigTitle2.innerText = getTitle2(
        (currentIndex2 - 6 + imgContents2.length) % imgContents2.length
      );
      Description2.innerText = getDesc2(
        (currentIndex2 - 6 + imgContents2.length) % imgContents2.length
      );
    }
  });
}

function getImagePath2(index2) {
  const imagePath2 = [
    /*1 */ "../main/styles/assets/explore_sasando-removebg-preview.png",
    /*2 */ "../main/styles/assets/explore_wayang_kulit-removebg-preview.png",
    /*3 */ "../main/styles/assets/explore_tari_piring-removebg-preview.png",
    /*4- */ "../main/styles/assets/explore_empek_empek-removebg-preview.png",
    /*5 */ "../main/styles/assets/explore-gudeg-removebg-preview.png",
    /*6 */ "../main/styles/assets/explore-mie_aceh-removebg-preview.png",
    /*7 */ "../main/styles/assets/explore-seblak-removebg-preview.png",
    /*8 */ "../main/styles/assets/explore_rawon-removebg-preview.png",
  ];
  return imagePath2[index2];
}

function getTitle2(indeks2) {
  const titleText2 = [
    "Sasando",
    "Wayang",
    "Tari Piring",
    "Kain Batik",
    "Tari Saman",
    "Angklung",
    "Tari Jaipong",
    "Tato Dayak",
  ];
  return titleText2[indeks2];
}

function getDesc2(indek2) {
  const deskripsi2 = [
    "Sasando adalah salah satu alat musik tradisional dari Pulau Rote, Nusa Tenggara Timur (NTT). Sasando ini merupakan alat musik berdawai tanpa mempunyai cord dan dimainkan dengan cara dipetik dengan menggunakan jari.",
    "Wayang kulit adalah bentuk seni tradisional Indonesia yang berasal dari budaya Jawa. Kesenian ini menggunakan karakter mitologi yang umumnya terbuat dari lembaran kulit binatang, seperti kerbau. Wayang kulit bukan hanya sekadar pertunjukan, tetapi juga memiliki nilai adiluhung dan merupakan bagian integral dari masyarakat Jawa.",
    "Tari piring adalah tarian tradisional Minangkabau yang menampilkan atraksi menggunakan piring. Para penari mengayunkan piring di tangan mengikuti gerakan-gerakan cepat yang teratur, tanpa satu pun piring terlepas dari tangan.",
    "Kain batik adalah kain bergambar khas Indonesia yang dihasilkan melalui seni dan teknologi perpaduan. Proses pembuatan batik melibatkan penggunaan lilin malam dan canting.",
    "Tari Saman adalah sebuah bentuk tarian tradisional yang berasal dari suku Gayo, Aceh, Indonesia. Tarian ini memiliki ciri khas yang unik dan penuh semangat, serta merupakan salah satu tari tradisional paling terkenal di Indonesia.",
    "Angklung adalah alat musik tradisional Indonesia yang berasal dari Jawa Barat, terdiri dari dua sampai empat tabung bambu yang digantung dalam rangka bambu.Dengan menggoyangkannya akan menghasilkan bunyi yang khas.",
    "Tari Jaipong adalah salah satu tarian tradisional yang berasal dari Jawa Barat, Indonesia.Tari Jaipong memiliki ciri khas gerakan yang dinamis, energetik, dan sensual.",
    "Tato Dayak adalah seni ukir atau rajah pada tubuh yang memiliki makna dan nilai budaya mendalam bagi suku Dayak, terutama suku Dayak Iban di Kalimantan.Motif-motif tato Dayak memiliki beragam makna, mulai dari simbol spiritual, keseimbangan alam, hingga status sosial.",
  ];
  return deskripsi2[indek2];
}

let isExpanded2 = false;
const all2 = document.querySelector(".showall-2");
const less2 = document.querySelector(".showless-2");

const imgContainer2 = document.querySelector(".image-slider-container-first-2");
const imgContents2 = imgContainer2.querySelectorAll(".image-cont-first-2");
const imgBig2 = document.querySelector("#FirstImgExplore-2");
const BigTitle2 = document.querySelector("#TitleExploreFirst-2");
const Description2 = document.querySelector("#DescriptionExploreFirst-2");
const paragraph2 = document.querySelector(".image-cont-first-2 span");

all2.addEventListener("click", function () {
  imgContainer2.style.overflow = "visible";
  imgContainer2.classList.add("active2");
  less2.style.marginTop = "19.5em";

  imgContents2.forEach((imgContent) => {
    imgContent.style.opacity = 1;
    imgContent.style.cursor = "pointer";

    imgContent.addEventListener("click", function () {
      const currentIndex2 = parseInt(imgContent.querySelector(".p-2").innerText) - 1;
      imgBig2.src = getImagePath(currentIndex2);
      paragraph2.innerText = getTitle(currentIndex2);
      BigTitle2.innerText = getTitle(currentIndex2);
      Description2.innerHTML = getDesc(currentIndex2);
    });
  });

  document.querySelector(".button-explore-slider-2").style.display = "none";

  all2.style.display = "none";
  less2.style.display = "block";

  isExpanded2 = true;
});

less2.addEventListener("click", function () {
  const imgContents2 = imgContainer2.querySelectorAll(".image-cont-first-2");

  if (isExpanded2) {
    imgContainer2.style.overflow = "hidden";
    imgContainer2.classList.remove("active2");

    imgContents2.forEach((imgContent) => {
      imgContent.style.opacity = imgContent.classList.contains("actives-2") ? 1 : 0.5;
    });

    document.querySelector(".button-explore-slider-2").style.display = "flex";

    all2.style.display = "block";
    less2.style.display = "none";

    isExpanded2 = false;
  }
});







// Games

function changeImage3(step) {
  const imgContainer3 = document.querySelector(".image-slider-container-first-3");
  const imgContents3 = imgContainer3.querySelectorAll(".image-cont-first-3");
  const imgBig3 = document.querySelector("#FirstImgExplore-3");
  const BigTitle3 = document.querySelector("#TitleExploreFirst-3");
  const Description3 = document.querySelector("#DescriptionExploreFirst-3");

  imgContents3.forEach((imgContent) => {
    const imgSmall3 = imgContent.querySelector(".img-dlm-3 img");
    const span3 = imgContent.querySelector(".p-3");
    const paragraph3 = imgContent.querySelector(".span-3");

    let currentIndex3 = parseInt(span3.innerText) - 1;
    currentIndex3 = (currentIndex3 + step + imgContents3.length) % imgContents3.length;

    span3.innerText = currentIndex3 + 1;
    imgSmall3.src = getImagePath3(currentIndex3);

    let nextIndex3 = (currentIndex3 + 2) % imgContents3.length;
    let prevIndex3 = (currentIndex3 - 6 + imgContents3.length) % imgContents3.length;

    if (step > 0) {
      imgBig3.src = getImagePath3(nextIndex3);
      paragraph3.innerText = getTitle3(currentIndex3);
      BigTitle3.innerText = getTitle3((currentIndex3 + step + imgContents3.length + 1) % imgContents3.length);
      Description3.innerText = getDesc3((currentIndex3 + step + imgContents3.length + 1) % imgContents3.length);
    } else if (step < 0) {
      imgBig3.src = getImagePath3(prevIndex3);
      paragraph3.innerText = getTitle3(currentIndex3);
      BigTitle3.innerText = getTitle3((currentIndex3 - 6 + imgContents3.length) % imgContents3.length);
      Description3.innerText = getDesc3((currentIndex3 - 6 + imgContents3.length) % imgContents3.length);
    }
  });
}

function getImagePath3(index) {
  const imagePath3 = [
    "../main/styles/assets/20231222_214822_0000.png",
    "../main/styles/assets/explore rangku alu_20231222_214130_0000.png",
    "../main/styles/assets/20231222_214748_0000.png",
    "../main/styles/assets/20231222_214839_0000.png",
    "../main/styles/assets/20231222_214932_0000.png",
    "../main/styles/assets/20231222_214904_0000.png",
    "../main/styles/assets/20231222_214944_0000.png",
  ];
  return imagePath3[index];
}

function getTitle3(indeks) {
  const titleText3 = [
    "Congklak",
    "Rangku Alu",
    "Egrang",
    "Permainan gundu",
    "Permainan karet gelang",
    "Gasing",
    "Injit-injit semut",
  ];
  return titleText3[indeks];
}

function getDesc3(indek) {
  const deskripsi3 = [
    "Congklak adalah permainan tradisional yang kuno dan dikenal dengan berbagai nama di seluruh Indonesia. Permainan ini umumnya menggunakan papan berlubang yang terbuat dari kayu atau bahan lainnya. Lubang-lubang pada papan mewakili tempat untuk meletakkan biji atau batu sebagai permainan.",
    "Rangku Alu adalah permainan tradisional yang berasal dari Manggarai, Flores, Nusa Tenggara Timur. Permainan ini menggunakan alat berupa batang bambu dan melibatkan lompatan-lompatan sebagai bagian dari cara bermainnya. Selain menyenangkan, Rangku Alu juga memiliki nilai edukasi, melatih ketangkasan, dan meningkatkan konsentrasi pemain. Alat utama permainan ini adalah batang bambu, dan sering dimainkan pada bulan purnama sebagai bentuk rasa syukur dan bahagia.",
    "Egrang adalah sebuah permainan tradisional berasal dari Jawa Barat yang menggunakan sepasang bambu untuk berjalan. Bambu dibentuk seperti tongkat yang memiliki tumpuan kaki yang terbuat dari kayu.",
    "Permainan gundu, juga dikenal sebagai permainan kelereng, adalah salah satu jenis permainan tradisional di Indonesia. Permainan ini sangat diminati oleh laki-laki.",
    "Permainan karet gelang adalah permainan tradisional yang melibatkan penggunaan gelang karet yang dikepang menjadi tali sebagai alat utama. Kita harus melompati atau menghindari tali karet gelang yang ditarik oleh pemain.",
    "Gasing, merupakan mainan tradisional yang telah bertahan selama berabad-abad dan memiliki akar budaya yang kuat di berbagai masyarakat. Gasing adalah mainan yang dirancang untuk berputar pada porosnya dan mencapai keseimbangan pada suatu titik tertentu.",
    "Injit-injit semut adalah Permainan ini bisa dimainkan dua orang atau lebih. Ini akan membuat anak-anak merasa sakit, lucu, dan ingin berada paling atas.",
  ];
  return deskripsi3[indek];
}

let isExpanded3 = false;
const all3 = document.querySelector(".showall-3");
const less3 = document.querySelector(".showless-3");

const imgContainer3 = document.querySelector(".image-slider-container-first-3");
const imgContents3 = imgContainer3.querySelectorAll(".image-cont-first-3");
const imgBig3 = document.querySelector("#FirstImgExplore-3");
const BigTitle3 = document.querySelector("#TitleExploreFirst-3");
const Description3 = document.querySelector("#DescriptionExploreFirst-3");
const paragraph3 = document.querySelector(".image-cont-first-3 span");


all3.addEventListener("click", function () {
  imgContainer3.style.overflow = "visible";
  imgContainer3.classList.add("active3");
  less3.style.marginTop = "28em";


  imgContents3.forEach((imgContent3) => {
    imgContent3.style.opacity = 1;
    imgContent3.style.cursor = "pointer";


    imgContent3.addEventListener("click", function () {
      const currentIndex3 = parseInt(imgContent3.querySelector("p").innerText) - 1;
      imgBig3.src = getImagePath3(currentIndex3);
      paragraph3.innerText = getTitle3(currentIndex3);
      BigTitle3.innerText = getTitle3(currentIndex3);
      Description3.innerHTML = getDesc3(currentIndex3);
    });
  });

  document.querySelector(".button-explore-slider-3").style.display = "none";

  all3.style.display = "none";
  less3.style.display = "block";

  isExpanded3 = true;
});

less3.addEventListener("click", function () {
  const imgContents3 = imgContainer3.querySelectorAll(".image-cont-first-3");

  if (isExpanded3) {
    imgContainer3.style.overflow = "hidden";
    imgContainer3.classList.remove("active3");

    imgContents3.forEach((imgContent3) => {
      imgContent3.style.opacity = imgContent3.classList.contains("actives-3") ? 1 : 0.5;
    });

    document.querySelector(".button-explore-slider-3").style.display = "flex";

    all3.style.display = "block";
    less3.style.display = "none";

    isExpanded3 = false;
  }
});