// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.LN10);

// console.log(Math.abs(-3.27));
// console.log(Math.floor(-3.27));
// console.log(Math.ceil(-3.27));
// console.log(Math.round(-3.27));
// console.log(Math.sin(1.5));

// var t = new Date();
// console.log(t);

// console.log(t.getDay());
// console.log(t.getHours());
// console.log(t.getMinutes());
// console.log(t.getSeconds());
// console.log(t.getMonth());

var body = document.querySelector("body");

setInterval(function () {
    var t = new Date();
    body.innerHTML = `${t.getHours()} : ${t.getMinutes()}: ${t.getSeconds()}`;
}, 1000);

var p1 = document.querySelector("#id1");

var p2 = document.getElementById("id1");

console.log("p1");
console.log(p1);

console.log("p2");
console.log(p2);

var h1 = document.querySelectorAll(".h1");

var h2 = document.getElementsByClassName("h1");

console.log("h1");
console.log(h1);

console.log("h2");
console.log(h2);

var a1 = document.querySelectorAll("article");

var a2 = document.getElementsByTagName("article");

console.log("a1");
console.log(a1);

console.log("a2");
console.log(a2);

console.log(a2[0].childNodes);
console.log(a1[0].childNodes);

var p1 = document.querySelector("#id1");

setTimeout(function () {
    p1.innerHTML = "New text from <b>javascript!</b>";
}, 3000);

var image = document.querySelector("img");

console.log(image.src);
setTimeout(function () {
    image.src = "./assets/1.jpg";
}, 3000);

var h1 = document.querySelectorAll(".h1");

h1[0].style.color = "blue";
h1[0].style.fontSize = "45px";
