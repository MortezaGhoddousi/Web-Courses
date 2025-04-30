window.onload = function () {
    window.onscroll = function () {
        var header = document.querySelector("header");
        if (window.scrollY >= 200) {
            header.className = "scrolled";
        } else {
            header.className = "";
        }
    };
};
