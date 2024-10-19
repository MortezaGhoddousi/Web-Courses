// var article = document.querySelector("article");

// article.innerHTML = "<p>this paragraph was created by JS</p>";

// var h1 = document.createElement("h1");
// h1.innerHTML = "Heading";

// var body = document.querySelector("body");

// // body.appendChild(h1);

// // article.appendChild(h1);

// var div = document.querySelector("div");

// // div.appendChild(h1);

// var p = document.querySelector('div p:nth-child(2)');

// div.insertBefore(h1, p);

var div = document.querySelector("div");
// console.log(image.src);
// console.log(image.id);

// image.id = 'morteza';

// image.src = "./images/2.jpg";

// setTimeout(function(){
//     image.src = "./images/2.jpg";
// }, 5000)

var counter = 2;

var h1 = document.querySelector("h1");

setInterval(function () {
    div.style.backgroundImage = `url(./images/${counter}.jpg)`;
    h1.innerHTML = `image ${counter}`;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 2000);

var p = document.createElement("p");
var body = document.querySelector("body");
p.innerHTML = "this paragraph was created by js";
p.style.border = "2px solid black";
p.style.width = "300px";
p.style.height = "300px";
p.style.color = "red";
p.style.fontSize = "28px";
p.style.fontWeight = "bold";
p.style.textDecoration = "underline";
p.style.textTransform = "uppercase";
p.style.backgroundColor = "rgb(28, 181, 97)";

body.appendChild(p);
