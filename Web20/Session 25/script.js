// setTimeout(function () {
//     alert("This is an alert!");
// }, 3000);

// setTimeout(function () {
//     var username = prompt("Enter your username: ");
//     console.log(username);
// }, 5000);

// setTimeout(function () {
//     var username = confirm("Do you want to leave?");
//     console.log(username);
// }, 13000);

// console.log(Math.PI);

// console.log(Math.floor(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.round(Math.PI));

// var date = new Date();
// console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMonth());

// var body = document.querySelector("body");

// setInterval(function () {
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();

//     body.innerHTML = `${h}:${m}:${s}`;
// }, 1000);

// var p1 = document.getElementById("p1");
// console.log(p1);

// setInterval(function () {
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();
//     p1.innerHTML = `${h}:${m}:${s}`;
// }, 1000);

// var p2 = document.getElementsByClassName("p2");
// console.log(p2);

// setTimeout(function () {
//     p2[1].innerHTML = "New text";
// }, 3000);

// var p3 = document.getElementsByTagName("p");
// console.log(p3);

// var p4 = document.querySelectorAll(".p2");
// console.log(p4);
// p4[1].innerHTML = "hello";

// var article = document.querySelector("article");
// setTimeout(function () {
//     article.innerHTML = "<div> New paragraph </div>";
// }, 3000);

// var h1 = document.querySelectorAll(".p2");
// h1[1].style.color = "red";
// h1[1].style.border = "2px solid green";
// h1[1].style.borderRadius = "10px";
// h1[1].style.textTransform = "uppercase";

// var article = document.querySelector("article");
// article.innerHTML =
//     '<div> <p class="p2">Paragprah</p> <h1>Heading 1</h1></div>';

// setTimeout(function () {
//     var h1 = document.querySelector("h1");
//     h1.style.color = "red";
//     h1.id = "h";
// }, 3000);

// var addresses = [
//     "./images/1.jpg",
//     "./images/2.jpg",
//     "./images/3.jpg",
//     "./images/4.jpg",
// ];

// var article = document.querySelector("article");
// var i = 0;
// setInterval(function () {
//     article.innerHTML = "<img />";
//     var image = document.querySelector("img");
//     image.src = addresses[i];
//     i++;
//     console.log(i);
//     if (i >= 4) {
//         i = 0;
//     }
//     image.style.width = "200px";
//     image.style.borderRadius = "7px";
// }, 2000);

var article = document.querySelector("article");
var p = document.createElement("p");
p.innerHTML = "Im created by javascript!";

var p1 = document.querySelector("#p1");
setTimeout(function () {
    // article.appendChild(p);
    article.insertBefore(p, p1);
    setTimeout(function () {
        article.removeChild(p1);
    }, 2000);
}, 3000);
