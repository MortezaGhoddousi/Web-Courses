// // Array

// var arr = new Array("Morteza", "AmirAli", "Younes");

// var arr = new Array();

// for (var i=0; i<7; i++){
//     arr[i] = prompt("Enter your name: ");
// }

// console.log(arr);

// arr.push("Amir");
// console.log(arr);
// console.log(arr.length);

// var newstr = "";
// // for (var i=0; i<arr.length; i++){
// //     newstr += arr[i];
// //     document.body.innerHTML = newstr;
// // }

// // arr.forEach(function(x){
// //     newstr += x;
// //     document.body.innerHTML = newstr;
// // })

// for(x in arr){
//     newstr += arr[x];
//     document.body.innerHTML = newstr;
// }

// var assarr = new Array();
// // var assarr = [];

// assarr["firstname"] = "Morteza";
// assarr["lastname"] = "Ghoddousi";
// assarr["age"] = 29;

// console.log(assarr["age"]);


// // // Math Object

// console.log(Math.PI);

// console.log(Math.round(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));

// console.log(Math.sqrt(Math.PI));

// console.log(Math.sqrt(Math.E));
// console.log(Math.sqrt(Math.pow(2, 3)));


// // Date Object

// var d = new Date();
// console.log(d);

// // console.log(getHours(d));
// // console.log(getMinutes(d));
// // console.log(getSeconds(d));

// setInterval(function(){
//     var d = new Date();
//     document.body.innerHTML = `${d.getMonth(d)}/${d.getDate(d)} ${d.getHours(d)}: ${d.getMinutes(d)}: ${d.getSeconds(d)}`;
// }, 1000)


// // Document Object model (DOM)

var p1 = document.getElementsByTagName("p");


setInterval(function(){
    p1[0].innerHTML = "JavaScript Paragraph";
}, 3000)



var p2 = document.getElementsByClassName("second-p");

setInterval(function(){
    p2[0].innerHTML = "Next JavaScript Paragraph";
}, 6000)


var p3 = document.getElementById("third-p");

setInterval(function(){
    p3.innerHTML = "Another JavaScript Paragraph";
}, 9000)

var p4 = document.querySelector("#forth-p");

setInterval(function(){
    p4.innerHTML = "Final JavaScript Paragraph";
}, 12000)

var p5 = document.querySelectorAll("p");

var div = document.querySelector("div");
var childrenCount = div.childElementCount;
var children = div.childNodes;
console.log(children);
console.log(childrenCount);

console.log(children[3]);

var firstChild = div.firstElementChild;
console.log(firstChild);

var lastChild = div.lastElementChild;
console.log(lastChild);

var parent = div.parentElement;
console.log(parent);

