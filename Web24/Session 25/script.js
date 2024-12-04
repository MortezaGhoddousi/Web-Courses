// function handleClick() {
//     var p = document.createElement("p");
//     p.innerHTML = "YOY! You have clicked on button!";
//     var article = document.querySelector("article");
//     article.appendChild(p);
// }

var btn = document.querySelector("article button");

// btn.onclick = function () {
//     var p = document.createElement("p");
//     p.innerHTML = "YOY! You have clicked on button!";
//     var article = document.querySelector("article");
//     article.appendChild(p);
// };

btn.addEventListener("click", function () {
    var p = document.createElement("p");
    p.innerHTML = "YOY! You have clicked on button!";
    var article = document.querySelector("article");
    article.appendChild(p);
});

btn.onmouseover = function (e) {
    console.log(e.target);
    btn.style.color = "red";
};

btn.onmouseout = function (e) {
    btn.style.color = "black";
};

var lists = document.querySelectorAll("ul li");

for (var i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function (e) {
        // console.log(e.target);
        e.target.style.color = "red";
    });
}
