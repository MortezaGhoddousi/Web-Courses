const l = console.log;

// alert("Alert box!");

// var age = Number(prompt("Enter your age: ", 29));
// console.log(age);
// console.log(typeof(age));

// var check = confirm("Do you rly wanna leave this page? ");
// if (check) {
//     console.log("You chose Ok");
// } else {
//     console.log("You chose Cancel")
// }

// var x = 20;
// console.log(typeof(x));
// x = toString(x);
// console.log(typeof(x));

var names = new Array("Morteza", "Iman");
console.log(names);
console.log(names.length);

var obj1 = {
    firstname: "Morteza",
    lastname: "Ghoddousi",
    age: 29,
    gender: "Male"
}

l(obj1);
l(obj1["firstname"]);
l(obj1.firstname);

function obj2(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    // this.greeting = sayHello;
    this.greeting = function() {
        l("Hello from my method");
    };
}

var firstname = "Morteza";
var lastname = "Ghoddousi";
var age = 29;
var gender = "Male";

var morteza = new obj2(firstname, lastname, age, gender);
l(morteza);

var amir = new obj2("Amir", "Shariati", 24, "Male");
l(amir);

l(amir.lastname);

// function sayHello() {
//     l("Hello from my method");
// }

morteza.greeting();