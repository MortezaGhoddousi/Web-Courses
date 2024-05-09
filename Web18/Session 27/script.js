// console.log(Math.PI);

// console.log(Math.abs(-9.75));

// console.log(Math.ceil(7.4));
// console.log(Math.floor(7.4));
// console.log(Math.round(7.4));

// var t = new Date();

// console.log(t);

// console.log(t.getHours());
// console.log(t.getMinutes());
// console.log(t.getSeconds());
// console.log(t.getMonth());
// console.log(t.getFullYear());

// Selecting elements
var p1 = document.getElementById("p1");
console.log(p1);

var p2 = document.getElementById("p2");
console.log(p2);

var p3 = document.getElementsByClassName("p3");
console.log(p3);

var p4 = document.getElementsByTagName("p");
console.log(p4);

var p5 = document.querySelector("article #p5");
console.log(p5);

var input = document.querySelector("article input[type='email']");
console.log(input);

var inputs = document.querySelectorAll("article input");
console.log(inputs);

// Modifying elements

var p1 = document.querySelector("#p1");
p1.innerHTML = "JavaScript";

setTimeout(function () {
    var p2 = document.querySelector("#p2");
    p2.innerHTML = "JavaScript is fun";
}, 5000);

setTimeout(function () {
    var img = document.querySelector("img");
    img.src = "./assets/1.jpg";
}, 7000);

var img = document.querySelector("img");
img.style.width = "400px";

var body = document.querySelector("body");
body.style.backgroundColor = "red";

var p3 = document.querySelector(".p3");

p3.innerHTML = "Mohammad";

var p4 = document.querySelectorAll("p");

p4[3].innerHTML = "Arash";
