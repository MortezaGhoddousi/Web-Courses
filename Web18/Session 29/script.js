window.onload = function () {
    // var btn = document.querySelector("article button");
    // btn.onclick = function () {
    //     alert("You have clicked on the button!");
    // };
    // var body = document.querySelector("body");
    // var article = document.querySelector("article");
    // var check = true;
    // btn.addEventListener("click", function (e) {
    //     e.stopPropagation();
    //     // alert("You have clicked on the button!");
    //     if (check) {
    //         body.style.backgroundColor = "#414141";
    //         e.target.innerHTML = "light mode";
    //         check = !check;
    //     } else {
    //         body.style.backgroundColor = "#cecece";
    //         e.target.innerHTML = "dark mode";
    //         check = !check;
    //     }
    // });
    // body.addEventListener(
    //     "click",
    //     function (e) {
    //         e.stopPropagation();
    //         alert("You have clicked on the body!");
    //     },
    //     false
    // );
    // article.addEventListener(
    //     "click",
    //     function (e) {
    //         e.stopPropagation();
    //         alert("You have clicked on the article!");
    //     },
    //     false
    // );

    var address = ["./assets/0.jpg", "./assets/1.jpg", "./assets/2.jpg"];

    var turn = 0;

    var btns = document.querySelectorAll("button");

    var image = document.querySelector("img");

    btns[0].addEventListener("click", function () {
        turn--;
        if (turn < 0) {
            turn = 2;
        }
        image.src = address[turn];
    });

    btns[1].addEventListener("click", function () {
        turn++;
        if (turn > 2) {
            turn = 0;
        }
        image.src = address[turn];
    });

    setInterval(function () {
        turn++;
        if (turn > 2) {
            turn = 0;
        }
        image.src = address[turn];
    }, 5000);
};
