window.onload = function () {
    var btn = document.querySelector("header div i:first-child");
    check = true;
    btn.addEventListener("click", function (e) {
        if (check) {
            var article = document.querySelector("article");
            article.style.gridTemplateColumns = "1fr";
            btn.className = "bx bx-list-ul";
            check = !check;
        } else {
            var article = document.querySelector("article");
            article.style.gridTemplateColumns = "1fr 1fr";
            btn.className = "bx bxs-grid-alt";
            check = !check;
        }
    });

    var btn1 = document.querySelector("header div #dp");
    btn1.addEventListener("click", function (e) {
        e.stopPropagation();
        var dpdw = document.querySelector(".dropdown");
        dpdw.style.display = "block";
    });

    var body = document.querySelector("html");
    body.addEventListener("click", function (e) {
        e.stopPropagation();
        var dpdw = document.querySelector(".dropdown");
        dpdw.style.display = "none";
    });

    var btn2 = document.querySelector("footer div i");
    btn2.addEventListener('click', function(e){
        e.stopPropagation();
        var footer = document.querySelector('footer');
        footer.style.opacity = '0';
    })
};
