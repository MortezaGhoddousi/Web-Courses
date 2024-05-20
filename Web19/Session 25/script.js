window.onload = function () {
    // var article = document.querySelector("article");
    // var p = document.querySelector("article p");

    // var h = document.createElement("h1");
    // h.innerHTML = "This heading is created by JavaScript!";

    // setTimeout(function () {
    //     article.replaceChild(h, p);

    // }, 2000);

    // var p1 = document.createElement("p");
    // p1.innerHTML = "This paragraph is created by JavaScript!";
    // p1.style.textAlign = "center";
    // p1.id = "p1";
    // p1.classList.add("p1");
    // article.appendChild(p1);

    // setTimeout(function () {
    //     var body = document.querySelector("body");

    //     body.removeChild(article);
    // }, 5000);

    var div1 = document.createElement("div");
    div1.style.position = "absolute";
    div1.style.width = "100px";
    div1.style.height = "100px";
    div1.style.backgroundColor = "red";

    var div2 = document.createElement("div");
    div2.style.position = "relative";
    div2.style.width = "10px";
    div2.style.height = "10px";
    div2.style.backgroundColor = "green";

    var button = document.createElement("button");
    button.style.position = "relative";
    button.style.left = "110px";
    button.style.width = "100px";
    button.style.height = "30px";
    button.style.padding = "5px";
    button.style.borderRadius = "15px";
    button.style.border = "none";
    button.style.outline = "none";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.innerHTML = "Click me";

    var body = document.querySelector("body");

    body.appendChild(div1);
    body.appendChild(div2);
    body.appendChild(button);

    button.onclick = function () {
        var counter = 0;
        var t = setInterval(function () {
            div2.style.left = counter + "px";
            div2.style.top = counter + "px";
            counter += 1;
            if (counter > 90) {
                clearInterval(t);
            }
        }, 10);
    };

    var input = document.querySelector("input");
    input.onchange = function () {
        var h1 = document.querySelector("h1");
        h1.innerHTML = input.value;
    };
};

window.onunload = function () {
    var body = document.querySelector("body");
    var p1 = document.createElement("p");
    p1.innerHTML = "Wait a moment!";
    p1.style.textAlign = "center";
    p1.id = "p1";
    p1.classList.add("p1");
    // article.appendChild(p1);

    body.appendChild(p1);
};
