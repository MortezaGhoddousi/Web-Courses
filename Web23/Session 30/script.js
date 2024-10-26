window.onload = function () {
    var currentIndex = 0;
    var boxes = document.querySelectorAll(".box");
    var slider = document.getElementById("slider");

    document.getElementById("slideLeft").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    document.getElementById("slideRight").addEventListener("click", () => {
        if (currentIndex < boxes.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    setInterval(function () {
        if (currentIndex < boxes.length - 1) {
            currentIndex++;
            updateSlider();
        }
    }, 5000);

    function updateSlider() {
        var slideWidth = 100;
        slider.style.transform = `translateX(${-slideWidth * currentIndex}vw)`;
    }

    var menu = document.querySelector("#menu");

    var close = true;

    menu.addEventListener("click", function (e) {
        e.stopPropagation();
        var menu = document.querySelector("#menu");
        var body = document.querySelector("body");
        var spans = document.querySelectorAll("#menu span");
        if (close) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            menu.className = "close";
            body.className = "Closee";
            var nav = document.querySelector("body.Closee nav");
            menu.style.backgroundColor = "#160e0b";
            spans.forEach(function (el) {
                el.style.backgroundColor = "#fff";
            });
            nav.style.animation = "moveRight .5s ease 0s 1 normal";
            close = !close;
        } else {
            menu.className = "";
            var nav = document.querySelector("body.Closee nav");
            body.className = "";
            menu.style.backgroundColor = "#fff";
            spans.forEach(function (el) {
                el.style.backgroundColor = "#000";
            });
            nav.style.animation = "";
            close = !close;
        }
    });
};
