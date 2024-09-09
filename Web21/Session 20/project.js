var div = document.querySelector("header div");

var check = true;
div.onclick = function () {
    var i = document.querySelector("header div i");
    if (check) {
        i.className = "bx bx-x";

        check = !check;

        var nav = document.querySelector("header nav ul");
        nav.style.display = "block";

        var nav = document.querySelector("header nav");
        nav.style.display = "block";
        var li = document.querySelectorAll("header nav ul li");

        for (var i = 0; i < li.length; i++) {
            li[i].className = "menu";
            li[i].style.bottom = -(i + 1) * 40 + "px";
            li[i].style.padding = "10px";
        }
    } else {
        i.className = "bx bx-menu";
        check = !check;
        var nav = document.querySelector("header nav");
        nav.style.display = "none";
        var li = document.querySelectorAll("header nav ul li");

        for (var i = 0; i < li.length; i++) {
            li[i].className = "";
        }
    }
    // div.removeChild(i);

    // var newI = document.createElement("i");
    // newI.className = "bx bx-x";

    // div.appendChild(newI);
};
