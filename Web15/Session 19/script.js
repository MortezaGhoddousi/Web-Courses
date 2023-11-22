// setTimeout(function() {
//     var body = document.querySelector('body');
//     body.innerHTML = "<h1> welcome </h1>";
// }, 3000);

// var body = document.querySelector('body');
// body.innerHTML = "<h5> welcome </h5>";


// // variables
var x = 10;
let y = 12;
const c = "Morteza";

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("End of the loop");
// console.log(i);

console.log(y);
// console.log(c);

// c = "Iman";


// // Loops in ES6
let names = new Array('Morteza', 'Mahdi', 'Amir');

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (let i of names) {
    console.log(i);
}

names.forEach((i) => {
    console.log(i);
})

let obj = {
    a: 'Ghoddousi',
    lastname: 'Darroudi',
    c: 'Shariati'
}

console.log(obj);

// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }

for (let i in obj) {
    console.log(i);
    console.log(obj[i]);
}

// // Arrow function
function sayHello(myname) {
    console.log("Hello " + myname);
}

sayHello("Morteza");

const sayHelloInArrowFunction = (myname) => {
    console.log("Hello " + myname);
}

sayHelloInArrowFunction("Morteza");

var a = 1;
var b = 2;
var d = 3;

[x, y, z] = [a, b, d];
console.log(x);
console.log(y);
console.log(z);



const newfunc = (a, b, c, d) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

newfunc(1, 2, 3, 4);

var newarr = new Array(5, 6, 7);
newfunc(newarr[0], newarr[1], newarr[2], 8);
newfunc(...newarr, 4);

// // Promises

const log = console.log;
// setTimeout(() => {
//     log("work1");
//     setTimeout(() => {
//         log("work2");
//     }, 2000);
// }, 2000);

// log('End');

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === '') {
            reject(Error("Nothing"));
        }
        setTimeout(function() {
            resolve(work);
        }, 2000);
    })
}


asyncFunc("work1")
    .then(function(resolve) {
        log(resolve);
        asyncFunc("work2")
            .then(function(resolve) {
                log(resolve);
                asyncFunc()
                    .then(function(resolve) {
                        log(resolve);
                    }, function(error) {
                        log(error);
                    })
            }, function(error) {
                log(error);
            })
    }, function(error) {
        log(error);
    })

log('End');