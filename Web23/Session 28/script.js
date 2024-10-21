window.onload = function () {
    var image = document.querySelector("section img");
    var btns = document.querySelectorAll("section button");

    var counter = 1;
    btns.forEach(function (tag) {
        tag.addEventListener("click", function (e) {
            if (e.target.innerHTML === "Previous") {
                counter--;
                if (counter < 1) {
                    counter = 6;
                }
                image.src = `./images/${counter}.jpg`;
            } else if (e.target.innerHTML === "Next") {
                counter++;
                if (counter > 6) {
                    counter = 1;
                }
                image.src = `./images/${counter}.jpg`;
            }
        });
    });

    setInterval(function () {
        counter++;
        if (counter > 6) {
            counter = 1;
        }
        image.src = `./images/${counter}.jpg`;
    }, 5000);
};

// window.addEventListener('load', function(){
//     var p = document.querySelector("article p");
//     console.log(p);
// })
