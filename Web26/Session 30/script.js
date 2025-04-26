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
} else if (filename === "shop.html") {
    var div = document.querySelectorAll(".shop");
    for (var i = 1; i <= 9; i++) {
        var section = document.createElement("section");
        var image = document.createElement("img");
        var a = document.createElement("a");
        var span1 = document.createElement("span");
        var aside = document.createElement("aside");
        var span2 = document.createElement("span");
        var i1 = document.createElement("i");
        var i2 = document.createElement("i");
        var i3 = document.createElement("i");
        var i4 = document.createElement("i");
        var i5 = document.createElement("i");

        var main = document.createElement("main");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");

        button1.innerHTML = "<i class='bx bx-heart' ></i>";
        button2.innerHTML = "<i class='bx bx-low-vision' ></i>";
        button3.innerHTML = "<i class='bx bxs-cart-add' ></i>";

        i1.className = "bx bxs-star";
        i2.className = "bx bxs-star";
        i3.className = "bx bxs-star";
        i4.className = "bx bxs-star";
        i5.className = "bx bxs-star";

        i4.id = "disabled";
        i5.id = "disabled";

        aside.appendChild(i1);
        aside.appendChild(i2);
        aside.appendChild(i3);
        aside.appendChild(i4);
        aside.appendChild(i5);

        image.src = `./assets/img/shop_0${i}.jpg`;
        image.alt = "shop-image";

        a.innerHTML = "Oupidatat non";
        span1.innerHTML = "M/L/X/XL";

        span2.innerHTML = "$250.00";

        main.style.display = "none";

        section.appendChild(main);
        section.appendChild(image);
        section.appendChild(a);
        section.appendChild(span1);
        section.appendChild(aside);
        section.appendChild(span2);

        main.appendChild(button1);
        main.appendChild(button2);
        main.appendChild(button3);

        div[0].appendChild(section);
    }

    var sections = document.querySelectorAll(".shop section");
    var mains = document.querySelectorAll(".shop section main");

    console.log(sections);
    console.log(mains);

    for (var i = 0; i < 9; i++) {
        sections[i].addEventListener(
            "mouseover",
            function (e) {
                e.stopPropagation();
                this.children[0].style.display = "block";
            },
            true
        );

        sections[i].addEventListener(
            "mouseout",
            function (e) {
                e.stopPropagation();
                this.children[0].style.display = "none";
            },
            true
        );
    }
}
