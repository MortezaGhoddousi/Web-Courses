// setTimeout(function() {
//     var p = document.createElement("p");
//     var text = document.createTextNode("JavaScript Text");

//     p.appendChild(text);

//     var div = document.querySelector(".div");

//     div.appendChild(p);
// }, 3000);

// // setTimeout(function() {
// //     var div = document.querySelector(".div");
// //     var p1 = document.querySelector(".p1");
// //     div.removeChild(p1);
// // }, 4000);


// setTimeout(function() {
//     var p = document.createElement("p");
//     var text = document.createTextNode("JavaScript New Text");

//     p.appendChild(text);

//     var div = document.querySelector(".div");
//     var p1 = document.querySelector(".p1");

//     div.replaceChild(p, p1);

// }, 6000);

// var box1 = document.querySelector(".box");
// var container = document.querySelector(".container");


// box1.style.left = "10px";

// var pos = 0;
// var t = setInterval(function() {
//     if (pos >= 150) {
//         clearInterval(t);
//     }
//     var box1 = document.querySelector(".box");
//     var container = document.querySelector(".container");
//     box1.style.left = pos + "px";
//     box1.style.top = pos + "px";
//     pos += 10;

// }, 100);

// var parent = document.querySelector("body");
// var button = document.createElement("button");
// var node = document.createTextNode("Click Me");
// button.appendChild(node);

// parent.appendChild(button);

// button.style.position = "relative";

// button.style.top = "250px";

// button.onclick = start;

// function start() {
//     var box1 = document.querySelector(".box");

//     box1.style.left = "10px"
//     box1.style.left = "10px";

//     var pos = 0;
//     var t = setInterval(function() {
//         if (pos >= 150) {
//             clearInterval(t);
//         }
//         var box1 = document.querySelector(".box");
//         box1.style.left = pos + "px";
//         box1.style.top = pos + "px";
//         pos += 10;

//     }, 100);
// }


window.onload = () => {
    var button = document.querySelector("input[type='checkbox']");
    var check = true;
    button.onchange = () => {
        var pass = document.querySelector("#pass");
        if (check) {
            pass.type = "text";
            check = false;
        } else {
            pass.type = "password";
            check = true;
        }

    }
}