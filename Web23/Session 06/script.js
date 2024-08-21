window.onload = function () {
    var p = document.querySelectorAll("p");
    p.forEach((el) => {
        el.style.color = "red";
        el.style.fontSize = "30px";
    });

    var btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        var body = document.querySelector("body");
        var h1 = document.createElement("h1");

        h1.innerHTML = "Hello from JAVASCRIPT";

        body.appendChild(h1);
    });
};
