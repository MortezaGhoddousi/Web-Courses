var heading1 = document.getElementsByTagName("h1");
console.log(heading1);

var div = document.getElementsByTagName("div");
console.log(div);

var classHeading = document.getElementsByClassName("heading1_class");
console.log(classHeading);

var idHeading = document.getElementById("heading1_id");
console.log(idHeading);

var div1 = document.querySelector("div");
var classHeading1 = document.querySelectorAll(".heading1_class");
var idHeading1 = document.querySelector("#heading1_id");

console.log(div1);
console.log(classHeading1);
console.log(idHeading1);

setTimeout(function () {
    idHeading1.innerHTML = "Morteza Ghoddousi";
    idHeading1.style.color = "#0f0";
}, 3000);

var btn = document.querySelector("button");
var body = document.querySelector("body");
var isDark = false;
btn.addEventListener("click", () => {
    if (isDark) {
        btn.innerHTML = "dark mode";
        body.style.background = "#fff";
        body.style.color = "#000";
    } else {
        btn.innerHTML = "light mode";
        body.style.background = "#111";
        body.style.color = "#eee";
    }
    isDark = !isDark;
});
