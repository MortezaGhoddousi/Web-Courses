var article = document.querySelector("article");
var p = document.querySelector("article p");

var h1 = document.createElement("h1");

h1.innerHTML = "This element was created by JS!";

h1.style.borderBottom = "1px solid";
h1.style.fontWeight = "bold";
h1.style.textTransform = "capitalize";
h1.style.width = "fit-content";

// article.appendChild(h1);
article.insertBefore(h1, p);

article.removeChild(p);

var h = document.querySelector("article h1");
h.style.width = "55vw";

var btn = document.querySelectorAll("button");
var counter = 0;
var check = true;

btn[0].onclick = function () {
    var t = setInterval(function () {
        h.style.position = "relative";
        h.style.left = counter + "vw";
        if (counter > 40) {
            check = !check;
        } else if (counter < 0) {
            check = !check;
        }

        if (check) {
            counter++;
        } else {
            counter--;
        }
    }, 50);

    btn[1].onclick = function () {
        clearInterval(t);
    };
};

btn[2].style.transition = "opacity 1s ease ";

btn[2].onclick = function () {
    btn[2].style.opacity = "0";
};

h.onmouseover = function () {
    btn[2].style.opacity = "1";
};

var check = true;

btn[3].onclick = function () {
    if (check) {
        var body = document.querySelector("body");
        body.style.backgroundColor = "#333";
        body.style.color = "#eee";
        btn[3].innerHTML = "light mode";
        check = !check;
    } else {
        var body = document.querySelector("body");
        body.style.backgroundColor = "#eee";
        body.style.color = "#333";
        btn[3].innerHTML = "dark mode";
        check = !check;
    }
};

var t = new Date();
console.log(t);

console.log(t.getHours());

if (t.getHours() >= 17 || t.getHours() <= 5 ) {
    var body = document.querySelector("body");
    body.style.backgroundColor = "#333";
    body.style.color = "#eee";
}
else {
    var body = document.querySelector("body");
    body.style.backgroundColor = "#eee";
    body.style.color = "#333";
    
}

var h2 = document.createElement('h2');
h2.id = 'time';
body.appendChild(h2);

setInterval(function(){
    var t = new Date();
    var h2 = document.querySelector('#time');
    h2.innerHTML = `${t.getHours()}: ${t.getMinutes()}: ${t.getSeconds()}`;
}, 1000)
