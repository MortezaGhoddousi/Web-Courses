// Example 1

// for (var i=0; i<5; i++){
//     var x = Number(prompt("Enter your score: "));

//     if (x<10){
//         console.log("Failed");
//     }
//     else if(x>10 && x<20){
//         console.log("Passed");
//     }
//     else {
//         console.log("invalid number");
//     }
// }


// Example 2

// var x1 = Number(prompt("Enter your score: "));
// var x2 = Number(prompt("Enter your score: "));
// var x3 = Number(prompt("Enter your score: "));
// var x4 = Number(prompt("Enter your score: "));
// var x5 = Number(prompt("Enter your score: "));

// var avg = (x1+x2+x3+x4+x5)/5;
// console.log(avg);


// Example 3

// var sum = 0;
// for (var i=0; i<5; i++){
//     var x = Number(prompt("Enter your score: "));
//     sum = sum+x;
// }

// avg = sum/5;
// console.log(avg);


// Example 4

// var sum = 0;
// var max = 0;
// var min = 21;

// for (var i=0; i<5; i++){
//     var x = Number(prompt("Enter your score: "));
//     sum = sum+x;
//     if (x > max){
//         max = x;
//     }
//     if (x < min){
//         min = x;
//     }
// }

// avg = sum/5;
// console.log(avg);
// console.log(min);
// console.log(max);


// Example 5

var x1 = Number(prompt("Enter your score: "));
var x2 = Number(prompt("Enter your score: "));
var x3 = Number(prompt("Enter your score: "));
var x4 = Number(prompt("Enter your score: "));
var x5 = Number(prompt("Enter your score: "));

var avg = (x1+x2+x3+x4+x5)/5;

if (x1>x2){max = x1;}
else {max = x2;}

if (max>x3){max = max;}
else {max = x3;}

if (max>x4){max = max;}
else {max = x4;}

if (max>x5){max = max;}
else {max = x5;}


if (x1<x2){min = x1;}
else {min = x2;}

if (min<x3){min = min;}
else {min = x3;}

if (min<x4){min = min;}
else {min = x4;}

if (min<x5){min = min;}
else {min = x5;}

console.log(avg);
console.log(max);
console.log(min);