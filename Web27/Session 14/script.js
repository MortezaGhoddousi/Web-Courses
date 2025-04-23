var article = document.querySelectorAll("article");
var btn = document.querySelectorAll("button");
var body = document.querySelectorAll("body");
var div = document.querySelectorAll("div");
var btnChildren = btn[0].childNodes;
console.log(btnChildren);

var t = new Date();

var bedsNumber = 1057;

var counter = 0;
var interval = setInterval(function () {
    counter += 5;
    div[0].innerHTML = `${counter}`;
    if (counter >= bedsNumber) {
        clearInterval(interval);
        div[0].innerHTML = `${bedsNumber}`;
    }
}, 5);

setInterval(function () {
    var t = new Date();
    article[0].innerHTML = `${t.getHours()} : ${t.getMinutes()} : ${t.getSeconds()}`;
    console.log(t.getDate());
}, 1000);

if (t.getHours() > 17 || t.getHours() < 5) {
    body[0].className = "dark";
    btnChildren[0].className = "bx bx-moon";
} else {
    body[0].className = "light";
    btnChildren[0].className = "bx bx-sun";
}

var check = true;
btn[0].onclick = function () {
    if (check) {
        body[0].className = "dark";
        btnChildren[0].className = "bx bx-moon";
        check = !check;
    } else {
        body[0].className = "light";
        btnChildren[0].className = "bx bx-sun";
        check = !check;
    }
};

btn[0].onmouseover = function () {
    btn[0].style.backgroundColor = "red";
};

btn[0].onmouseout = function () {
    btn[0].style.backgroundColor = "brown";
};

var form = document.querySelectorAll("form");

form[0].onsubmit = function (event) {
    event.preventDefault();

    var inputs = document.querySelectorAll(".inputs");
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    if (inputs[0].value === "") {
        alert("username required!");
    }
    if (inputs[1].value === "") {
        alert("password required!");
    }

    var data = {
        username: inputs[0].value,
        password: inputs[1].value,
    };

    console.log(data);
};
