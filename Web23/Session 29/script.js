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
};
