window.onload = function () {
    document
        .querySelector("header section div")
        .addEventListener("click", () => {
            window.location.href = "./home.html";
        });

    document
        .querySelector(
            "header section:last-child div:last-child button:first-child",
        )
        .addEventListener("click", () => {
            window.location.href = "./signin.html";
        });
};
