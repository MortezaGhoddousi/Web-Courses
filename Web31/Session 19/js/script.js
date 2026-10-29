// window.onload = () => {
//     console.log("window loaded successfully");
// };

window.addEventListener("load", () => {
    console.log("window loaded successfully");

    var div = document.querySelector("div");
    var body = document.querySelector("body");

    body.style.height = "100vh";

    div.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("clicked on div element");
    });

    body.addEventListener(
        "click",
        () => {
            console.log("clicked on body element");
        },
        false,
    );
});
