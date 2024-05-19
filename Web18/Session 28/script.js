window.onload = function () {
    // setTimeout(function () {
    //     var article = document.querySelector("article");
    //     var p = document.createElement("h1");
    //     p.innerHTML = "This paragraph was created by Javascript!";
    //     p.style.textAlign = "center";
    //     // article.appendChild(p);

    //     var p1 = document.querySelectorAll("article p");
    //     console.log(p1);

    //     article.replaceChild(p, p1[0]);

    //     var body = document.getElementsByTagName("body");

    //     var h = document.querySelector("h1");

    //     var div = document.createElement("div");

    //     // body.appendChild(div);
    //     body[0].insertBefore(div, h);
    // }, 3000);

    var body = document.querySelector("body");

    var div1 = document.createElement("div");
    div1.style.position = "absolute";
    div1.style.width = "100px";
    div1.style.height = "100px";
    div1.style.background = "green";

    var div2 = document.createElement("div");
    div2.style.position = "relative";
    div2.style.width = "10px";
    div2.style.height = "10px";
    div2.style.background = "red";

    var button = document.createElement("button");
    button.style.position = "relative";
    button.style.width = "100px";
    button.style.height = "30px";
    button.style.left = "120px";
    button.style.background = "red";
    button.style.color = "white";
    button.style.fontWeight = "bold";
    button.style.textTransform = "uppercase";
    button.style.borderRadius = "10px";
    button.style.border = "none";
    button.style.outline = "none";
    button.style.cursor = "pointer";

    button.innerHTML = "click me";

    body.appendChild(div1);
    body.appendChild(div2);
    body.appendChild(button);

    var btn = document.querySelector("button");
    btn.onclick = function () {
        var counter = 0;
        var t = setInterval(function () {
            div2.style.left = counter + "px";
            div2.style.top = counter + "px";
            counter++;
            if (counter > 90) {
                clearInterval(t);
            }
        }, 100);
    };

    var input = document.querySelector("input");

    input.onchange = function () {
        var h1 = document.querySelector("#h1");
        h1.innerHTML = input.value;
    };
};
