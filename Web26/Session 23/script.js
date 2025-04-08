// var article = document.querySelector("article");

// var body = document.querySelector("body");

// body.removeChild(article);

// var div = document.createElement("div");

// div.innerHTML = "This element was created by JS";

// body.appendChild(div);

// div.style.color = "red";
// div.style.border = "2px solid black";
// div.style.padding = "20px";
// div.style.borderRadius = "5px";
// div.style.fontSize = "32px";

// var btn = document.querySelector("button");

// btn.onmouseup = function () {
//     var divSelected = document.querySelector("div");
//     body.removeChild(divSelected);
// };

var image = document.querySelector("img");
var prevBtn = document.querySelector("button:nth-child(2)");
var NextBtn = document.querySelector("button:nth-child(3)");

var counter = 1;

NextBtn.onclick = function () {
    counter++;
    if (counter > 16) {
        counter = 1;
    }

    if (counter < 10) {
        image.src = `./images/img-0${counter}.jpg`;
    } else if (counter >= 10) {
        image.src = `./images/img-${counter}.jpg`;
    }
};

prevBtn.onclick = function () {
    counter--;
    if (counter < 1) {
        counter = 16;
    }

    if (counter < 10) {
        image.src = `./images/img-0${counter}.jpg`;
    } else if (counter >= 10) {
        image.src = `./images/img-${counter}.jpg`;
    }
};

setInterval(function () {
    counter++;
    if (counter > 16) {
        counter = 1;
    }

    if (counter < 10) {
        image.src = `./images/img-0${counter}.jpg`;
    } else if (counter >= 10) {
        image.src = `./images/img-${counter}.jpg`;
    }
}, 5000);

image.onmouseover = function () {
    image.style.borderRadius = "0";
};

image.onmouseout = function () {
    image.style.borderRadius = "10px";
};

var p = document.querySelector("p");
var input = document.querySelector("input");

input.onchange = function () {
    p.innerHTML = input.value;
};

var form = document.querySelector("form");

form.onsubmit = function (e) {
    console.log(e);
    e.preventDefault();

    var userInput = document.querySelector("form input[type='text']");
    var passInput = document.querySelector("form input[type='password']");
    var emailInput = document.querySelector("form input[type='email']");

    console.log(userInput.value);
    console.log(passInput.value);
    console.log(emailInput.value);

    var data = {
        username: userInput.value,
        password: passInput.value,
        email: emailInput.value,
    };

    console.log(data);
};

var lists = document.querySelectorAll("li");

for (var i = 0; i < 4; i++) {
    lists[i].onclick = function (e) {
        console.log(e.target);
    };

    lists[i].onmouseover = function (e) {
        e.target.style.transform = "translate(-15px)";
    };

    lists[i].onmouseout = function (e) {
        e.target.style.transform = "translate(0)";
    };
}
