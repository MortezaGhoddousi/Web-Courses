// console.log("Starting js");
// alert("This is an alert message");

// var check = confirm("Do you want to leave this page? ");
// console.log(check);

// var age = prompt("Enter your age: ");
// console.log(age);
// console.log(30);

var myArr = [];
myArr["fname"] = "Morteza";
myArr["lname"] = "Ghoddousi";
myArr["age"] = 30;

console.log(myArr);
console.log(myArr["lname"]);

// function sayHello () {
//     console.log("Hello from object!");
// }

var sayHello = function () {
    console.log("Hello from object!");
};

sayHello();

var myObj = {
    fname: "Morteza",
    lname: "Ghoddousi",
    age: 30,
    Hello: function () {
        console.log("Hello from object!");
    },
};

console.log(myObj);
console.log(myObj["lname"]);
console.log(myObj.lname);

myObj.Hello();

console.log(Math.E);
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.LN2);

console.log(Math.abs(-3.14));

var d = new Date();
console.log(d);

setInterval(() => {
    var body = document.querySelector("body");
    var d = new Date();
    body.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
}, 1000);
