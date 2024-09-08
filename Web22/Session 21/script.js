window.onload = function () {
    var article = document.querySelector("article");
    article.style.width = "200px";
    article.style.height = "200px";
    article.style.border = "2px solid";

    // article.onclick = function () {
    //     article.style.backgroundColor = "red";
    // };

    article.addEventListener(
        "click",
        function (e) {
            console.log(e);
            e.stopPropagation();
            article.style.backgroundColor = "red";
            // alert("article event has run");
        },
        false
    );

    var body = document.querySelector("body");

    body.addEventListener(
        "click",
        function (e) {
            e.stopPropagation();
            // body.style.backgroundColor = "blue";
            // alert("body event has run");
        },
        false
    );

    var btns = document.querySelectorAll("button");

    for (var i = 0; i < 4; i++) {
        btns[i].addEventListener("click", function (e) {
            e.stopPropagation();
            console.log(e.target);
            e.target.style.opacity = "0";
        });
    }

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
    });

    document
        .querySelector('input[type="submit"]')
        .addEventListener("click", function (e) {
            var inputs = document.querySelectorAll(
                'input:not(input[type="submit"])'
            );
            for (var i = 0; i < inputs.length; i++) {
                console.log(inputs[i].value);
                if (inputs[i].value == "") {
                    inputs[i].style.borderBottom = "2px solid red";
                }
                inputs[i].value = "";
            }
        });
};
