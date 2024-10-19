// var p = document.querySelector("article p");

// p.onmouseover = function () {
//     p.style.color = "red";
//     p.style.cursor = "pointer";
// };

// p.onmouseout = function () {
//     p.style.color = "black";
// };

// // p.onclick = function () {
// //     p.style.opacity = "0";
// // };

// p.addEventListener("click", function () {
//     p.style.opacity = "0";
// });

// var btns = document.querySelectorAll("article button");

// var pos = 0;

// var direction = true;

// btns[0].onclick = function () {
//     p.style.opacity = "1";

//     var t = setInterval(function () {
//         p.style.position = "relative";
//         p.style.left = pos + "vw";
//         if (direction) {
//             pos++;
//             if (pos > 80) {
//                 direction = false;
//             }
//         } else {
//             pos--;
//             if (pos < -20) {
//                 direction = true;
//             }
//         }
//     }, 100);
//     btns[1].onclick = function () {
//         clearInterval(t);
//     };
// };

var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

// var submitBtn = document.querySelector("input[type='submit']");

var inputs = document.querySelectorAll("input");

// submitBtn.addEventListener("click", function () {
//     // var body = document.querySelector("body");

//     // var div = document.createElement("div");
//     // var p1 = document.createElement("p");
//     // var p2 = document.createElement("p");

//     // p1.innerHTML = "Your username: " + inputs[0].value;
//     // p2.innerHTML = "Your password: " + inputs[1].value;

//     // div.appendChild(p1);
//     // div.appendChild(p2);
//     // body.appendChild(div);

//     var paras = document.querySelectorAll("div p");
//     paras[0].innerHTML = "Your username: " + inputs[0].value;
//     paras[1].innerHTML = "Your password: " + inputs[1].value;

//     inputs[0].value = "";
//     inputs[1].value = "";
// });

var inputs = document.querySelectorAll("input");

// inputs[0].addEventListener("change", function (event) {
//     console.log(event);
//     console.log(event.target);
// });

inputs.forEach(function (el) {
    el.addEventListener("change", function (e) {
        p = document.querySelector(`div p#${e.target.name}`);
        p.innerHTML = "Your " + e.target.name + ": " + e.target.value;
    });
});
