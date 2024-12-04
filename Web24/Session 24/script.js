var article = document.getElementsByTagName("article");
console.log(article);

var getById = document.getElementById("second");
console.log(getById);

var getByClass = document.getElementsByClassName("first");
console.log(getByClass);

var querySelector = document.querySelectorAll("article");
console.log(querySelector);
var querySelector = document.querySelector("#second");
var querySelector = document.querySelectorAll(".first");
var p = document.querySelectorAll(".first p");
p[0].innerHTML = "<h1>Morteza</h1>";
var querySelector = document.querySelector("article:nth-child(2)");

setTimeout(function () {
    p[0].innerHTML = "<h1>Mahtab</h1>";
    p[0].style.color = "red";
}, 5000);

var image = document.querySelector("img");
image.style.width = "300px";
image.style.height = "200px";
image.style.borderRadius = "10px";
// image.style.transition = "3s ease-in";

setTimeout(function () {
    image.src = "./images/image-50-1024x1024.webp";
}, 5000);

var div = document.querySelector("div");
setTimeout(function () {
    div.style.backgroundImage = "url('./images/image-50-1024x1024.webp')";
    div.id = "container";
}, 2000);

var section = document.querySelector("section");
// section.innerHTML = "<p>Hello from JS</p>";
var newP = document.createElement("p");
newP.innerHTML = "Hello from JS";
newP.id = "js";
newP.style.color = "green";

section.appendChild(newP);

var firstChild = document.createElement("p");
firstChild.innerHTML = "FirstChild";
firstChild.id = "js";
firstChild.style.color = "red";

var oldP = document.querySelector('section p:nth-child(1)');

section.insertBefore(firstChild, oldP);

section.removeChild(oldP);