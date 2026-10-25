var h1 = document.querySelector("header section:nth-child(2) h1");
var section1 = document.querySelector("header section:nth-child(1)");
var section2 = document.querySelector("header section:nth-child(2)");
var section3 = document.querySelector("header section:nth-child(3)");

h1.onmouseenter = (e) => {
    section1.style.opacity = "1";
    section1.style.height = "155px";
    section3.style.top = "175px";
};

section1.onmouseleave = (e) => {
    section1.style.opacity = "0";
    section1.style.height = "115px";
    section3.style.top = "125px";
};

window.onscroll = (e) => {
    if (window.scrollY > 100) {
        section2.style.opacity = "0";
        section2.style.transform = "translateY(-75px)";
        section3.style.top = "45px";
    } else {
        section2.style.opacity = "1";
        section2.style.transform = "translateY(0)";
        section3.style.top = "125px";
    }
};

var listItems = document.querySelectorAll(".category-navigation ul li");
listItems.forEach((li) => {
    li.onmouseenter = (e) => {
        // e.target.children[1].style.width = "100%";
        e.target.className = "active";
    };

    li.onmouseleave = (e) => {
        // e.target.children[1].style.width = "0";
        e.target.className = "";
    };
});
