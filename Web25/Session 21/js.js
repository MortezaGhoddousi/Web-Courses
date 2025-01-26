window.addEventListener("load", function () {
    var article = document.querySelector("article");

    var p = document.createElement("p");
    p.innerHTML = "this paragraph is created by JS";
    p.style.textTransform = "uppercase";
    p.style.color = "red";
    p.style.fontSize = "30px";
    p.style.textDecoration = "line-through";

    article.appendChild(p);

    setTimeout(function () {
        var p1 = document.createElement("p");
        p1.innerHTML = "this is another paragraph which is created by JS";
        p1.style.textTransform = "uppercase";
        p1.style.color = "blue";
        p1.style.fontSize = "30px";
        p1.style.textDecoration = "line-through";

        article.insertBefore(p1, p);
    }, 3000);

    var btn = document.querySelector("button");

    // btn.onclick = function () {
    //     var firstP = document.querySelector("article p:first-child");
    //     article.removeChild(firstP);
    // };

    btn.addEventListener("click", function () {
        var firstP = document.querySelector("article p:first-child");
        article.removeChild(firstP);
    });

    // setTimeout(() => {
    //     var firstP = document.querySelector("article p:first-child");
    //     article.removeChild(firstP);
    // }, 5000);
});
