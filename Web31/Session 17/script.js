var h1 = document.querySelector("div h1");

setTimeout(() => {
    h1.innerHTML = "This text has been written by JS";
}, 5000);

var div = document.querySelector("div");

// div.innerHTML = div.innerHTML + "<p>This is a paragraph</p>"
div.innerHTML += "<p id='p1'>This is a paragraph</p>";

// div.innerHTML += "<h2>heading 2 which has been written by js";

var h2 = document.createElement("h2");
h2.innerHTML = "heading 2 which has been written by js";

var p = document.querySelector("p");

div.insertBefore(h2, p);

var h1 = document.querySelector("div h1");
// div.removeChild(h1);

setTimeout(() => {
    h2.className = "change_color";
    h2.id = "change_font_size";
    h2.align = "center";
}, 3000);

var image = document.querySelector("img");
image.style.borderRadius = "50%";
image.style.width = "200px";
image.style.height = "200px";
image.style.border = "2px solid black";

var image_addresses = [
    "./137-112943.jpg",
    "./137-112873.jpg",
    "./137-112760.jpg",
];

// setTimeout(function(){
//     image.src = "./137-112873.jpg";
// }, 5000);

var counter = 0;
setInterval(function () {
    counter++;
    if (counter > image_addresses.length - 1) {
        counter = 0;
    }
    image.src = image_addresses[counter];
}, 5000);

var p = document.createElement("p");
var body = document.querySelector("body");

body.appendChild(p);
setInterval(() => {
    var t = new Date();
    p.innerHTML = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
}, 1000);

var btns = document.querySelectorAll("button");

btns[0].onclick = function () {
    counter--;
    if (counter < 0) {
        counter = image_addresses.length - 1;
    }
    image.src = image_addresses[counter];
};

btns[1].onclick = function () {
    counter++;
    if (counter > image_addresses.length - 1) {
        counter = 0;
    }
    image.src = image_addresses[counter];
};

h1.onmouseover = (e) => {
    e.target.style.color = "brown";
};

h1.onmouseout = () => {
    h1.style.color = "blue";
};

// btns[0].onmouseenter = (e) => {
//     btns[0].style.background = "#777";
// };

// btns[0].onmouseleave = (e) => {
//     btns[0].style.background = "transparent";
// };

// btns[1].onmouseenter = (e) => {
//     btns[1].style.background = "#777";
// };

// btns[1].onmouseleave = (e) => {
//     btns[1].style.background = "transparent";
// };

for (var i = 0; i < btns.length; i++) {
    btns[i].onmouseenter = (e) => {
        e.target.style.background = "#777";
    };

    btns[i].onmouseleave = (e) => {
        e.target.style.background = "transparent";
    };
}
