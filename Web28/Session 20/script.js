window.onload = () => {
    var divElemenet = document.querySelector(".first > div:last-child");

    var spanElements = document.querySelectorAll(
        ".first > div:last-child aside span"
    );

    var counter = 1;
    setInterval(() => {
        counter++;

        spanElements.forEach((span) => {
            span.className = "";
        });

        if (counter > 6) {
            counter = 1;
        }

        spanElements[counter - 1].className = "active";
        divElemenet.style.backgroundImage = `url(./images/${counter}.webp)`;
    }, 3000);

    spanElements.forEach((span, index) => {
        span.addEventListener("click", (e) => {
            spanElements.forEach((s) => {
                s.className = "";
            });

            e.target.className = "active";

            counter = index + 1;
            divElemenet.style.backgroundImage = `url(./images/${counter}.webp)`;
        });
    });

    
};


