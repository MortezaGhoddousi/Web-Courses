var images = [
    "url(./assets/images/slideshow/medium-shot-business-women-high-five.jpeg)",
    "url(./assets/images/slideshow/team-meeting-renewable-energy-project.jpeg)",
    "url(./assets/images/slideshow/two-business-partners-working-together-office-computer.jpeg)",
];

var titles = ["Cool Fashion", "New Design", "Talk to us"];

var contents = [
    "Little fashion template comes with total 8 HTML pages provided by Morteza's Classes",
    "Please share this Little Fashion templates to your friends. Thank you for supporting us.",
    "Tooplate is one of the best HTML CSS template websites for everyone.",
];

var btns = ["Learn More About Us", "Explore Products", "Work with us"];

window.onload = function () {
    var carousel = document.querySelector(".carousel");

    var circles = document.querySelectorAll(
        ".carousel i:not(.carousel i#active)"
    );
    circles.forEach(function (el) {
        el.addEventListener("mouseover", function (e) {
            e.target.className = "bx bxs-circle";
        });
        el.addEventListener("mouseout", function (e) {
            e.target.className = "bx bx-circle";
        });
    });

    var counter = 0;
    var title = document.querySelector(".carousel div h1");
    var content = document.querySelector(".carousel div p");
    var btn = document.querySelector(".carousel div button");
    setInterval(function () {
        var c = document.querySelectorAll(".carousel i");
        counter++;
        if (counter > 2) {
            counter = 0;
        }

        carousel.style.backgroundImage = images[counter];
        c[counter].id = "active";
        c[counter].className = "bx bxs-circle";

        title.innerHTML = titles[counter];
        content.innerHTML = contents[counter];
        btn.innerHTML = btns[counter];

        for (var i = 0; i < 3; i++) {
            if (i != counter) {
                c[i].className = "bx bx-circle";
                c[i].id = "";
            }
        }
    }, 10000);

    var c = document.querySelectorAll(".carousel i");
    console.log(c);
    for (var i = 0; i < 3; i++) {
        c[i].addEventListener("click", function (e) {
            var carousel = document.querySelector(".carousel");
            console.log(e.target.outerHTML);
            carousel.style.backgroundImage = images[i];
            e.target.id = "active";
            e.target.className = "bx bxs-circle";
            title.innerHTML = titles[i];
            content.innerHTML = contents[i];
            btn.innerHTML = btns[i];
        });
    }
};
