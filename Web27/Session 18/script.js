window.onload = function () {
    var lists = document.querySelectorAll("header nav li");

    window.onscroll = function () {
        var header = document.querySelector("header");
        if (window.scrollY >= 200) {
            header.className = "scrolled";
        } else {
            header.className = "";
        }

        var bg = document.querySelector(".bg");

        if (window.scrollY < 900) {
            bg.style.backgroundImage = "url(./img/infinite-loop-01.jpg)";
        } else if (window.scrollY >= 900 && window.scrollY < 2800) {
            bg.style.backgroundImage = "url(./img/infinite-loop-02.jpg)";
        } else {
            bg.style.backgroundImage = "url(./img/infinite-loop-03.jpg)";
        }

        if (window.scrollY <= window.innerHeight - 100) {
            lists.forEach((el) => {
                el.className = "";
            });
            lists[0].className = "active";
        } else if (
            window.scrollY > window.innerHeight &&
            window.scrollY <= window.innerHeight * 2
        ) {
            lists.forEach((el) => {
                el.className = "";
            });
            lists[1].className = "active";
        } else if (
            window.scrollY > window.innerHeight * 2 &&
            window.scrollY <= window.innerHeight * 3
        ) {
            lists.forEach((el) => {
                el.className = "";
            });
            lists[2].className = "active";
        } else if (
            window.scrollY > window.innerHeight * 3 &&
            window.scrollY <= window.innerHeight * 4
        ) {
            lists.forEach((el) => {
                el.className = "";
            });
            lists[3].className = "active";
        } else if (window.scrollY > window.innerHeight * 4) {
            lists.forEach((el) => {
                el.className = "";
            });
            lists[4].className = "active";
        }
    };

    var spansPart3 = document.querySelectorAll("section.part3 article span");
    var asidePart3 = document.querySelector("section.part3 aside");
    spansPart3[0].addEventListener("click", (e) => {
        asidePart3.style.transform = "translateX(calc(25vw + 80px))";
        spansPart3.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    spansPart3[1].addEventListener("click", (e) => {
        asidePart3.style.transform = "translateX(0)";
        spansPart3.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    spansPart3[2].addEventListener("click", (e) => {
        asidePart3.style.transform = "translateX(calc(-50vw + 240px))";
        spansPart3.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    var spansPart4 = document.querySelectorAll("section.part4 article span");
    var asidePart4 = document.querySelector("section.part4 aside");
    spansPart4[0].addEventListener("click", (e) => {
        asidePart4.style.transform = "translateX(calc(32vw - 40px))";
        spansPart4.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    spansPart4[1].addEventListener("click", (e) => {
        asidePart4.style.transform = "translateX(calc(16vw - 120px))";
        spansPart4.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    spansPart4[2].addEventListener("click", (e) => {
        asidePart4.style.transform = "translateX(calc(-48vw + 485px))";
        spansPart4.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    spansPart4[3].addEventListener("click", (e) => {
        asidePart4.style.transform = "translateX(calc(-50vw + 240px))";
        spansPart4.forEach((span) => {
            span.className = "";
        });
        e.target.className = "active";
    });

    var hrs = document.querySelectorAll("hr");
    var h3s = document.querySelectorAll("section.part4 aside div h3");

    var divs = document.querySelectorAll("section.part4 aside div");

    divs.forEach((div, ind) => {
        div.addEventListener("mouseover", () => {
            hrs[ind].style.bottom = "0";
            hrs[ind].style.opacity = "1";

            h3s[ind].style.bottom = "25px";
            h3s[ind].style.opacity = "1";
        });

        div.addEventListener("mouseout", () => {
            hrs[ind].style.bottom = "-50px";
            hrs[ind].style.opacity = "0";

            h3s[ind].style.bottom = "45px";
            h3s[ind].style.opacity = "0";
        });
    });
};
