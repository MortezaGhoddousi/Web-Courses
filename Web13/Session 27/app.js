// ES6

var a = 20;
var b = 10;

console.log(a + b);

const c = "hello";
console.log(c);
// c = "morteza";
// console.log(c);

let d = "Morteza";
d[2] = "f";
console.log(d[2]);

function hello() {
    console.log(d);
}

hello()

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// console.log(i);

let j = 0;

for (; j < 3; j++) {
    console.log(j);
}

let obj = { a: "morteza", b: "parimah", c: "Ehsan", d: "Alireza" };
console.log(obj);
// console.log(length(obj));

for (v in obj) {
    console.log("hello " + obj[v]);
}

// let arr = ["Morteza", "Parimah", "Ehsan", "Alireza"];

let arr = new Array("Morteza", "Parimah", "Ehsan", "Alireza");

arr[2] = "shakiba";

for (h of arr) {
    console.log(h);
}

for (ch of "Morteza") {
    console.log(ch);
}

function add(x, y) {
    return x + y;
}

console.log(add(3, 5));

const add1 = (x, y) => {
    return x + y;
}

console.log(add1(4, 8));

arr.forEach((el) => {
    if (el == "shakiba") {
        el = "Ehsan";
    }
    console.log(el);
})