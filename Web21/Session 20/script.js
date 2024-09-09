// var btn = document.querySelectorAll("button");

// btn[0].onclick = function () {
//     // alert("clicked!");

//     var image = document.createElement("img");
//     image.src = "./images/1.jpg";
//     image.style.width = '200px';

//     var body = document.querySelectorAll("body");

//     body[0].appendChild(image);
// };

// btn[0].onmouseover = function () {
//     alert("hovered!");
// };

var counter = 1;
var image = document.querySelectorAll("img");
var t = setInterval(function () {
    counter++;
    if (counter > 6) {
        counter = 1;
    }
    image[0].src = "./images/" + counter + ".jpg";
}, 5000);

var btns = document.querySelectorAll("button");
console.log(btns);
btns[0].onclick = function () {
    counter--;
    if (counter < 1) {
        counter = 6;
    }
    image[0].src = "./images/" + counter + ".jpg";
};

btns[1].onclick = function () {
    counter++;
    if (counter > 6) {
        counter = 1;
    }
    image[0].src = "./images/" + counter + ".jpg";
};

image[0].onmouseover = function () {
    clearInterval(t);
};

image[0].onmouseout = function () {
    var t = setInterval(function () {
        counter++;
        if (counter > 6) {
            counter = 1;
        }
        image[0].src = "./images/" + counter + ".jpg";
    }, 5000);
};

