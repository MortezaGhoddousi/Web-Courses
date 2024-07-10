console.log("Hello from JS!");

var x = 10;
var fname = "Morteza";
var height = 1.86;

var isMale = true;

var myarr = [fname, height, isMale];

// console.log(x);

function checkEvens(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}

var myArr = new Array(2, 7, 8, 12, 15, 1, 253, 14, 16, 20);

// checkEvens(myArr);
setTimeout(function () {
    checkEvens(myArr);
}, 5000);

setTimeout(function () {
    console.log("hello");
}, 3000);

var i = 0;
var t = setInterval(function () {
    console.log(i);
    i++;
    if (i > 10) {
        clearInterval(t);
    }
}, 1000);

var fname = "Morteza";
var lname = "Ghoddousi";

console.log(fname + lname);

var myObj = {
    fname: "Morteza",
    lname: "Ghoddousi",
    age: 30,
    height: 1.86,
    weight: 92,
    hello: function (name) {
        console.log("Hello " + name);
    },
};

console.log(myObj["fname"]);
console.log(myObj.lname);
myObj.hello("Vahid");

var morteza = {
    id: 1,
    username: "Morteza",
    password: "123",
    email: "m@gmail.com",
    time: "19:30",
};
