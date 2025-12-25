let data = ["Morteza", "AmirAli", "Ali", "Hassan"];

const fname = "Morteza";

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

for (var key in data) {
    console.log(data[key]);
}

for (var value of data) {
    console.log(value);
}

data.forEach((element, index) => {
    console.log(element, index);
});

var mappedData = data.map((element, index) => {
    return `${element} - ${index}`;
});

var filteredData = data.filter((element, index) => {
    return index != 2;
});

console.log(data);
console.log(mappedData);
console.log(filteredData);

// console.log(i);

// fname = "Ali";

// DOM document object model

// var p1 = document.getElementById("p1");
var p1 = document.querySelector("#p1");
console.log(p1);

// var p2 = document.getElementsByClassName("p2");
var p2 = document.querySelectorAll(".p2");
console.log(p2);

// var ps = document.getElementsByTagName("p");
var ps = document.querySelectorAll("p");
console.log(ps);

console.log(p1.innerHTML);
p1.innerHTML += `
    <b>this text is written by js</b>
    <h2>heading 2 added by js</h2>
`;

p1.id = "new-ID-from-JS";

console.log(p1.id);

p2[0].className = "p3";

var image = document.querySelector("img");
image.src = "./gallery/gallery-02@2x.jpg";
image.alt = "image";
image.style.height = "250px";
image.style.borderRadius = "20px";
image.style.transform = "rotate(15deg)";

var body = document.querySelector("body");

var h1 = document.createElement("h1");
h1.innerHTML = "this h1 element was created by js";
h1.className = "p2";
h1.style.borderBottom = "2px solid #666";
h1.style.display = "inline";
h1.style.color = "#666";
h1.style.textTransform = "uppercase";

// body.appendChild(h1);

body.insertBefore(h1, image);
body.innerHTML += `
    <h1 class="p3" style="text-transform: uppercase;">
        this h1 element was created by js again
    </h1>
`;

var p3 = document.querySelector(".p3");
body.removeChild(p3);

image = document.querySelector("img");
// body.removeChild(image);

console.log(body.children);
console.log(image.parentElement);
console.log(image.nextElementSibling);
console.log(image.previousElementSibling);

// setTimeout(() => {
//     image.src = "./gallery/gallery-03@2x.jpg";
// }, 3000);

image.style.transform = "rotate(0)";

var counter = 1;
setInterval(() => {
    image.src = `./gallery/gallery-0${counter}@2x.jpg`;
    counter++;
    if (counter > 8) {
        counter = 1;
    }
}, 2000);
