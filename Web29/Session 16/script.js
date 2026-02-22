function f(x, y) {
    var z = x ** 2 + 2 * x * y + y ** 2;
    return z;
}

var z = f(2, 1);
console.log(z);
console.log(f(2, 1));

console.log(z);
// console.log(x);

function sayHello() {
    console.log("Hello, greeting");
}

sayHello();
sayHello();

function sayHello1(fname) {
    console.log("Hello", fname);
}

sayHello1("Morteza");
sayHello1("Mahdieh");

function sayHello2() {
    return "hello from web crash course";
}

console.log("hello from web creash course");
var x = "hello from web creash course";
console.log(sayHello2());
var h = sayHello2();

function sumTwo(a, b) {
    return a + b;
}

console.log(sumTwo(4, 9));
console.log(sumTwo(5, 3));

var names = [];

function addToNames(newName, n) {
    // return [...names, newName]
    n.push(newName);
    return n;
}

function calMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}


function calMaxArray(numbers) {
    var max = numbers[0];
    for (var i=0; i<numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(calMaxArray([8, 4, 7, 9, 1, 12, 15, 4, 6, 19, 20, 7, 8.5, 9]));
