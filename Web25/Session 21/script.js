var carouselSection = document.querySelector("article section.carousel");
var carouselButton = document.querySelector("article section.carousel button");

var buttonTexts = [
    "2025 ibsf world billiards championship",
    "Muhammad Asif Clinches Historic Third IBSF World Men's Snooker Title",
];

var sectionBackgroundImages = [
    "./assets/images/banner1.jpg",
    "./assets/images/men-winner.jpg",
];

var counter = 0;
setInterval(function () {
    if (counter == 0) {
        counter = 1;
        carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
        carouselButton.innerHTML = buttonTexts[counter];
    } else {
        counter = 0;
        carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
        carouselButton.innerHTML = buttonTexts[counter];
    }
}, 5000);

var chevrons = document.querySelectorAll("article section.carousel i");

chevrons[0].onmouseover = function () {
    chevrons[0].style.color = "#fff";
};

chevrons[1].onmouseover = function () {
    chevrons[1].style.color = "#fff";
};

chevrons[0].onmouseout = function () {
    chevrons[0].style.color = "#ddd";
};

chevrons[1].onmouseout = function () {
    chevrons[1].style.color = "#ddd";
};

for (var i = 0; i < 2; i++) {
    chevrons[i].onclick = function () {
        if (counter == 0) {
            counter = 1;
            carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
            carouselButton.innerHTML = buttonTexts[counter];
        } else {
            counter = 0;
            carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
            carouselButton.innerHTML = buttonTexts[counter];
        }
    };
}

// chevrons[0].onclick = function () {
//     if (counter == 0) {
//         counter = 1;
//         carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
//         carouselButton.innerHTML = buttonTexts[counter];
//     } else {
//         counter = 0;
//         carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
//         carouselButton.innerHTML = buttonTexts[counter];
//     }
// };

// chevrons[1].onclick = function () {
//     if (counter == 0) {
//         counter = 1;
//         carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
//         carouselButton.innerHTML = buttonTexts[counter];
//     } else {
//         counter = 0;
//         carouselSection.style.backgroundImage = `url(${sectionBackgroundImages[counter]})`;
//         carouselButton.innerHTML = buttonTexts[counter];
//     }
// };

var upBtn = document.querySelector("body > button");

window.onscroll = function () {
    if (window.scrollY >= 300) {
        upBtn.style.position = "fixed";
    } else {
        upBtn.style.position = "absolute";
    }
};

upBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

var links = document.querySelectorAll("footer a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function (e) {
        e.target.style.color = "rgb(13, 161, 255)";
    });

    links[i].addEventListener("mouseout", function (e) {
        e.target.style.color = "#eee";
    });
}

var input = document.querySelector("nav aside input");

input.addEventListener("focus", function (e) {
    e.target.style.width = "17vw";
});

input.addEventListener("blur", function (e) {
    e.target.style.width = "15vw";
});
