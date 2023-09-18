// alert("This is an alert popup box!");

// var x = prompt("Enter your age: ", 20);

// console.log(x);
// console.log(typeof(x));

// var x = Number(prompt("Enter first number: "));
// var y = Number(prompt("Enter second number: "));

// console.log(x + y);

// var container = {
//     name: "Morteza",
//     lastname: "Ghoddousi",
//     gender: "Male",
//     age: 29
// }

// console.log(container);
// console.log(container.name);
// console.log(container.age);
// console.log(container["gender"]);

// console.log(container.length);

// var length = Number(prompt("Enter the lenght of the cube: "));
// var width = Number(prompt("Enter the width of the cube: "));
// var heigth = Number(prompt("Enter the heigth of the cube: "));

// var cube = {
//     length,
//     width,
//     heigth
// }

// console.log(cube);


// var length = Number(prompt("Enter the lenght of the cube: "));
// var width = Number(prompt("Enter the width of the cube: "));
// var heigth = Number(prompt("Enter the heigth of the cube: "));

function cube(length, width, heigth) {
    this.length = length;
    this.width = width;
    this.heigth = heigth;
}

var cube1 = new cube(4, 2, 1);
console.log(cube1);

var cube2 = new cube(2, 8, 6);
console.log(cube2);