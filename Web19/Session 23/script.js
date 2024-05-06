var log = console.log;

for (var i = 0; i < 100; i++) {
    console.log("Hello!");
}

for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (var i = 0; i < 50; i++) {
    console.log(2 * i);
}

// function sayHello() {
//     console.log("Hello guys!");
// }

obj1 = {
    fname: "Morteza",
    lname: "Ghoddousi",
    age: 30,
    weight: 91,
    height: 1.86,
    hello: function () {
        console.log("Hello guys!");
    },
};

obj1.fname = "Milad";
console.log(obj1.fname);
console.log(obj1.age);

obj1.hello();

function obj2(fname, lname, age, weight, height) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.weight = weight;
    this.height = height;

    this.hello = function () {
        console.log("hello", this.fname);
    };
}

var morteza = new obj2("Morteza", "Ghoddousi", 30, 91, 1.86);
console.log(morteza);
var mahdi = new obj2("Mahdi", "Asadi", 38, 76, 1.8);
console.log(mahdi);
var nazanin = new obj2("Nazanin", "Khanroudi", 22, 70, 1.6);
console.log(nazanin);
var maedeh = new obj2("Maedeh", "AyinParast", 19, 50, 1.68);
console.log(maedeh);

morteza.hello();
mahdi.hello();
nazanin.hello();
maedeh.hello();

var myarr = new Array("Morteza", "Ghoddousi", 30, 91, 1.86);

log(myarr);
log(myarr.length);

myarr.push("Male");
log(myarr);

myarr.unshift("Milad");
log(myarr);

myarr.shift();
log(myarr);

myarr.pop();
log(myarr);

log(myarr.indexOf("Ghoddousi"));

alert("Hello from javascript's alert function");

var age = prompt("Please enter your age: ", 30);

log(typeof age);

age = Number(age);
log(typeof age);

var isquit = confirm("Do you want to leave? ");
