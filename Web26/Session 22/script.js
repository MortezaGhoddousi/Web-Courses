var article = document.querySelector("article");

article.innerHTML = "<h1>Hello from JS</h1>";

var p1 = document.createElement("h4");
p1.innerHTML = "This is a appent element";

var div1 = document.createElement("div");
div1.innerHTML = "<p>this is a child of div box container</p>";

article.appendChild(p1);
article.appendChild(div1);

article.id = "newart";

var btn = document.querySelector("button");

var togg = true;
btn.addEventListener("click", (e) => {
    if (togg) {
        article.id = "light";
        e.target.innerHTML = "Light";
        togg = !togg;
    } else {
        article.id = "dark";
        e.target.innerHTML = "Dark";
        togg = !togg;
    }
});

var image = document.querySelector("img");

setTimeout(function () {
    image.src = "./2.jpg";
}, 5000);

setTimeout(function () {
    var h1 = document.querySelector("h1");
    h1.innerHTML = "Hello from Python";
    h1.style.color = "blue";
}, 3000);
