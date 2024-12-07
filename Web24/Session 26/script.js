window.onload = function () {
    var btns = document.querySelectorAll("div button");
    var image = document.querySelector("article img");
    var counter = 1;
    btns[0].addEventListener("click", function (e) {
        counter--;
        if (counter < 1) {
            counter = 5;
        }
        image.src = "./images/" + counter + ".png";
    });
    btns[1].addEventListener("click", function (e) {
        counter++;
        if (counter > 5) {
            counter = 1;
        }
        image.src = "./images/" + counter + ".png";
    });

    var timer = setInterval(function () {
        counter++;
        if (counter > 5) {
            counter = 1;
        }
        image.src = "./images/" + counter + ".png";
    }, 3000);

    image.addEventListener("mouseover", function (e) {
        clearInterval(timer);
    });

    image.addEventListener("mouseout", function (e) {
        var timer = setInterval(function () {
            counter++;
            if (counter > 5) {
                counter = 1;
            }
            image.src = "./images/" + counter + ".png";
        }, 3000);
        image.addEventListener("mouseover", function (e) {
            clearInterval(timer);
        });
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var inputs = document.querySelectorAll(
            'form label input:not(input[type="submit"])'
        );
        var error = 0;
        inputs.forEach(function (el) {
            if (el.value == "") {
                el.style.border = "1px solid red";
                error++;
            } else {
                el.style.border = "1px solid #111";
            }
        });
        if (error == 0) {
            var data = {
                username: inputs[0].value,
                password: inputs[1].value,
                email: inputs[2].value,
            };
            console.log(data);
            axios
                .post("http://localhost:8000/api/users", data)
                .then(function () {
                    console.log("ok!");
                })
                .catch(function (e) {
                    console.log(e);
                });
        }
    });
};
