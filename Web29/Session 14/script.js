// if (boolean) {
//     body
// }

var age = 14;

if (age >= 18) {
    console.log(age);
    console.log("you are adult");
    console.log("This is an if body");
    var name = "Morteza";
} else {
    console.log("you are child");
    var name = "Sarah";
}

console.log("end of the script");
console.log(name);

age = 8;

if (age >= 60) {
    console.log("15% off");
} else if (age >= 18 && age < 60) {
    console.log("no discount");
} else if (age >= 10 && age < 18) {
    console.log("25% off");
} else {
    console.log("50% off");
}

var username_admin = "Morteza";
var password_admin = "111";

var username = "Morteza";
var password = "111";

if (username == username_admin && password == password_admin) {
    console.log("access granted");
} else {
    console.error("access denied");
}

var score = 68;

if (score >= 70) {
    console.log("psased");
} else {
    console.log("failed");
}

// while (boolean) {
//     body
// }

// console.log("hello");
// console.log("hello");
// console.log("hello");

var i = 0;

while (i < 3) {
    console.log("hello");
    i = i + 1;
}
