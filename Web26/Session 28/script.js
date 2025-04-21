const pathname = window.location.pathname;
const filename = pathname.substring(pathname.lastIndexOf("/") + 1);
if (filename === "index.html") {
    window.onload = function () {
        const carousel = {
            h1: [
                "<b>Zay</b> eCommerce",
                "Proident occaecat",
                "Repr in voluptate",
            ],
            h2: [
                "Tiny and Perfect eCommerce Template",
                "Aliquip ex ea commodo consequat",
                "Ullamco laboris nisi ut",
            ],
            p: [
                'Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by <a href="">TemplateMo</a> website. Image credits go to <a href="">Freepik Stories</a>, <a href="">Unsplash</a> and <a href="">Icons 8</a>.',
                "You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.",
                "We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you",
            ],
        };

        var h1 = document.querySelector(".carousel h1");
        var h2 = document.querySelector(".carousel h2");
        var p = document.querySelector(".carousel p");
        var img = document.querySelector(".carousel img");
        var sliders = document.querySelectorAll(".slider");

        var counter = 0;
        setInterval(function () {
            counter++;
            if (counter > 2) {
                counter = 0;
            }
            sliders.forEach(function (el, ind) {
                if (ind === counter) {
                    sliders[ind].className = "slider active";
                } else {
                    sliders[ind].className = "slider";
                }
            });
            h1.innerHTML = carousel.h1[counter];
            h2.innerHTML = carousel.h2[counter];
            p.innerHTML = carousel.p[counter];
        }, 5000);

        const chevrons = document.querySelectorAll(".chevrons");
        chevrons[0].addEventListener("click", (e) => {
            counter--;
            if (counter < 0) {
                counter = 2;
            }

            sliders.forEach(function (el, ind) {
                if (ind === counter) {
                    sliders[ind].className = "slider active";
                } else {
                    sliders[ind].className = "slider";
                }
            });
            h1.innerHTML = carousel.h1[counter];
            h2.innerHTML = carousel.h2[counter];
            p.innerHTML = carousel.p[counter];

            img.src = `./assets/img/banner_img_0${counter + 1}.jpg`;
        });

        chevrons[1].addEventListener("click", (e) => {
            counter++;
            if (counter > 2) {
                counter = 0;
            }

            sliders.forEach(function (el, ind) {
                if (ind === counter) {
                    sliders[ind].className = "slider active";
                } else {
                    sliders[ind].className = "slider";
                }
            });
            h1.innerHTML = carousel.h1[counter];
            h2.innerHTML = carousel.h2[counter];
            p.innerHTML = carousel.p[counter];

            img.src = `./assets/img/banner_img_0${counter + 1}.jpg`;
        });
    };
}
