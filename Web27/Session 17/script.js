window.onload = function () {
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
};
