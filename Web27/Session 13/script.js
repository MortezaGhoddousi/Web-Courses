// $name = "Morteza";
// echo ($name);

var firstName = "Morteza";
console.log(name);

function sayHello() {
    console.log("hello buddy!");
}

myObject = {
    // properties in objects
    firstName: "Morteza",
    lastName: "Ghoddousi",
    age: 31,
    height: 1.86,
    weight: 86,
    isMale: true,

    // methodes in objects
    // hello: sayHello,
    hello: function () {
        console.log("hello buddy!");
    },
};

console.log(myObject);
console.log(myObject["firstName"]);
console.log(myObject.firstName);
myObject.hello();

var article1 = document.querySelectorAll("article:nth-child(1)");
console.log(article1);

var article2 = document.querySelectorAll(".class1");
console.log(article2);

var article3 = document.querySelectorAll("#id1");
console.log(article3);
var p1 = document.createElement("p");
p1.innerHTML = "This is an appended child!";

setTimeout(function () {
    article3[0].innerHTML = "<h1>This article is written by JS!</h1>";
}, 5000);

setTimeout(function () {
    article3[0].appendChild(p1);
}, 6000);

setTimeout(function () {
    var h1 = document.querySelectorAll("#id1 h1");
    article3[0].removeChild(h1[0]);
}, 8000);

setTimeout(function () {
    article2[0].style.color = "blue";
    article2[0].style.fontSize = "22px";
}, 3000);

setTimeout(function () {
    article1[0].id = "add";
}, 5000);

setTimeout(function () {
    var body = document.querySelectorAll("body");
    body[0].className = "dark";
}, 3000);

var body = document.querySelectorAll("body");
body[0].style.overflowX = "hidden";

var image = document.querySelectorAll("img");

image[0].style.width = "200px";
image[0].style.height = "200px";

var Images = [
    "./images/product_single_01.jpg",
    "./images/product_single_02.jpg",
    "./images/product_single_03.jpg",
    "./images/product_single_04.jpg",
    "./images/product_single_05.jpg",
    "./images/product_single_06.jpg",
    "./images/product_single_07.jpg",
    "./images/product_single_08.jpg",
    "./images/product_single_09.jpg",
    "./images/product_single_10.jpg",
];

// image[0].src = "./images/product_single_02.jpg";

var counter = 0;
setInterval(function () {
    counter++;
    if (counter >= 10) {
        counter = 0;
    }
    image[0].src = Images[counter];
}, 3000);
