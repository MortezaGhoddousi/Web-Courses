// window.addEventListener("load", function () {
//     var btn = document.querySelector("button");
//     var article = document.querySelector("article");
//     var body = document.querySelector("body");
// btn.onclick = function () {
//     alert("You have clicked on me!");
// };

// btn.addEventListener(
//     "click",
//     function (event) {
//         event.stopPropagation();
//         alert("You have clicked on button!");
//     },
//     false
// );

// article.addEventListener(
//     "click",
//     function (event) {
//         event.stopPropagation();
//         alert("You have clicked on article!");
//     },
//     false
// );

// body.addEventListener(
//     "click",
//     function (event) {
//         event.stopPropagation();
//         alert("You have clicked on body!");
//     },
//     false
// );

//     var h1Handler = function (event) {
//         alert("You cannot copy this text!");
//         event.target.removeEventListener("copy", h1Handler);
//     };

//     var h1 = document.querySelector("h1");
//     h1.addEventListener("copy", h1Handler);
// });

// window.addEventListener("load", function () {
//     var image = this.document.querySelector("img");

//     var addresses = ["./assets/0.jpg", "./assets/1.jpg", "./assets/2.jpg"];

//     var turn = 0;

//     document.querySelector(".btn1").addEventListener("click", function () {
//         turn--;
//         if (turn < 0) {
//             turn = addresses.length - 1;
//         }
//         image.src = addresses[turn];
//     });

//     document.querySelector(".btn2").addEventListener("click", function () {
//         turn++;
//         if (turn > addresses.length - 1) {
//             turn = 0;
//         }
//         image.src = addresses[turn];
//     });

//     setInterval(function () {
//         turn++;
//         if (turn > addresses.length - 1) {
//             turn = 0;
//         }
//         image.src = addresses[turn];
//     }, 5000);
// });

window.onload = function () {
    var Links = document.querySelectorAll("header ul a");

    console.log(Links);

    Links.forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            Links.forEach(function (el1) {
                el1.classList.remove("active");
            });
            e.target.classList.add("active");
        });
    });
};
