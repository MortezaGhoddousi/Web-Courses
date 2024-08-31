var p = document.querySelectorAll("p");

for (var i = 0; i < 4; i++) {
    p[i].innerHTML = "new paragraph " + i + " which is created by <b>JS</b>";
}

var image = document.querySelectorAll("img");

image[0].alt = "profile image";
image[0].src = "./images/1.jpg";
image[0].style.border = "2px solid";
image[0].style.borderRadius = "50%";
image[0].style.height = "200px";
image[0].style.width = "200px";

var counter = 1;
setInterval(function () {
    counter++;
    if (counter > 5) {
        counter = 1;
    }
    image[0].src = "./images/" + counter + ".jpg";
}, 5000);

setTimeout(function () {
    p[1].innerHTML = "changed after 3 seconds";
}, 3000);

var h1 = document.createElement("h1");
h1.innerHTML = "This heading was created by <b>js</b>";

var body = document.querySelectorAll("body");

var p2 = document.querySelectorAll(".p2");

setTimeout(function () {
    // body[0].appendChild(h1);
    body[0].insertBefore(h1, p2[0]);
}, 10000);

var p1 = document.querySelectorAll("#p1");

setTimeout(function () {
    body[0].removeChild(p1[0]);
}, 6000);

var span = document.querySelectorAll("span");

var timer = 0;
setInterval(function () {
    span[0].innerHTML = "Timer is: " + timer;
    timer++;
}, 1000);

var p = document.createElement("p");

p.innerHTML = "Morteza";
p.id = "myname";

setTimeout(function () {
    body[0].appendChild(p);
    setTimeout(function () {
        var p = document.querySelectorAll("#myname");
        p[0].innerHTML = "Ghoddousi";
    }, 5000);
}, 5000);
