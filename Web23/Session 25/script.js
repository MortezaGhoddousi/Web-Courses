// var myObj = {
//     firstName: "Morteza",
//     lastName: "Ghoddousi",
//     age: 30,
//     hegiht: 1.85,
//     weight: 92,

//     changeName: function (x) {
//         this.firstName = x;
//     },
// };

// console.log(myObj["firstName"]);
// console.log(myObj.firstName);

// console.log(myObj);
// myObj.changeName("Milad");

// console.log(myObj.firstName);
// console.log(myObj);

// var newObj = {
//     ...myObj,
//     age: 31,
// };

// console.log(newObj);

var p = document.getElementsByTagName("p");
console.log(p);

var ClassP2 = document.getElementsByClassName("p2");
console.log(ClassP2);

var IdP3 = document.getElementById("p3");
console.log(IdP3);

var p4 = document.querySelectorAll("p");
var p5 = document.querySelectorAll(".p2");
var p6 = document.querySelectorAll("#p3");
var p7 = document.querySelectorAll("article p:nth-child(1)");

console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);

p7[0].innerHTML = "Hello from JS";

setTimeout(function () {
    p5[0].innerHTML = "Changing after 5 seconds";
}, 5000);

p6[0].addEventListener("mouseover", function () {
    p6[0].innerHTML = "Paragraph hovered!";
});

p6[0].addEventListener("mouseout", function () {
    p6[0].innerHTML = "Paragraph unhovered!";
});
