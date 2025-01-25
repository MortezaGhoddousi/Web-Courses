var p = document.querySelector("article p");
console.log(p);

setTimeout(function () {
    p.innerHTML = "Arshia";
}, 5000);

var article = document.querySelector("article");

// setTimeout(function () {
//     article.innerHTML = "<h1>Arshia</h1>";
// }, 5000);

setTimeout(function () {
    var newP = document.createElement("p");
    newP.innerHTML =
        "Arshia is a 22 year-old boy who studies in Eghbal university in Mashhad";

    article.appendChild(newP);
}, 8000);

var image = document.querySelector("img");

image.style.width = "150px";
image.style.height = "150px";
image.style.borderRadius = "50%";

p.style.textTransform = "uppercase";
p.style.fontWeight = "bold";

setTimeout(function () {
    image.src = "./assets/images/ASIF2.jpg";
}, 5000);

// image.width = "200px";
