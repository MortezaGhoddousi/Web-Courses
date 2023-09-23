// // Document Obejct Model

var main = document.getElementsByClassName("main");
var firstChild = document.getElementById("firstchild");
var p = document.getElementsByTagName("p");

var p1 = document.querySelector("#firstchild p");
var h1 = document.querySelector("section h1");

var section = document.querySelector("section");
console.log(section);

var sections = document.querySelectorAll("section");
console.log(sections);
console.log(typeof(sections));

var sections_Bytag = document.getElementsByTagName("section");
console.log(sections_Bytag);

Array.from(sections_Bytag, function(element) {
    console.log(element);
})


setTimeout(function() {
    h1.innerHTML = "This heading comes from JavaScript !";
}, 3000);

console.log("Hello");

var t = setInterval(function() {
    h1.innerHTML = "This heading comes from JavaScript !";
    console.log("SetInterval");
    clearInterval(t);
}, 1000);

var t1 = setInterval(() => {
    var d = new Date();
    var header = document.querySelector("header");
    header.style.border = "2px solid black";
    header.style.display = "flex";
    header.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}, 1000)


var image = document.querySelector("img");
image.style.width = "200px";
image.style.border = "2px solid red";


setTimeout(function() {
    var image = document.querySelector("img");
    image.src = "./1.jpg";
}, 5000);