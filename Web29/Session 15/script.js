// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

var i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

var name1 = "Morteza";
var name2 = "Mahdieh";
var name3 = "Sarah";
var name4 = "Mahdi";
var name5 = "Aras";
var name6 = "Mahdi";

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);
console.log(name6);

var names = ["Morteza", "Mahdieh", "Sarah", "Mahdi", "Aras", "Mahdi"];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

console.log(names.length);
console.log(name1.length);
var age = 31;
console.log(age.length);

console.log(names);
names.push("Iman");
console.log(names);

names[names.length] = "Ali";
console.log(names);

names = [...names, "Mahnaz"];
console.log(names);

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var num1 = 17.5;
var num2 = 25;
var num3 = 28;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

var player1 = "scissors";
var player2 = "paper";

if (player1 == player2) {
    console.log("draw");
} else if (player1 == "rock" && player2 == "scissors") {
    console.log("player1 won");
} else if (player1 == "scissors" && player2 == "paper") {
    console.log("player1 won");
} else if (player1 == "paper" && player2 == "rock") {
    console.log("player1 won");
} else {
    console.log("player2 won");
}
console.log("morteza", "mahdi");