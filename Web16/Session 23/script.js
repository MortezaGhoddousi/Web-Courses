// Variables in ES6

const log = console.log;

var a = 4;
let b = 3;

for (var i=0; i<3; i++){
    console.log(i);
}

console.log(i);

for (let j=0; j<3; j++){
    console.log(j);
}

// console.log(j);

const c = 2;
console.log(c);
// c++;
// console.log(c);

log('Morteza');

log('Morteza: '+a+' Milad: '+b);

log(`Morteza: ${a} Milad: ${b}`);

// Loops in ES6

var arr = new Array('Morteza', 'Milad', 'Yousef', 'Keyvan');
log(arr.length);

log('Classic for loop');
for (let i=0; i<arr.length; i++){
    log(arr[i]);
}

log('for of loop');

for (i of arr){
    log(i);
}

log('for each loop');

arr.forEach(function(i){
    log(i);
})


log('for in loop');

var obj = {
    a: 'Morteza',
    b: 'Milad',
    c: 'Yousef',
    d: 'Keyvan'
};

// log(obj.a);
// log(obj.b);
// log(obj.c);
// log(obj.d);

for (var i in obj){
    log(obj[i]);
}

// setTimeout(function(){
//     log("Set timeout statement");
// }, 2000)

// log('End of the script');


// Arrow function

function sayHello(fname){
    log(`hello ${fname}`);
}

sayHello('Morteza');
sayHello('Milad');
sayHello('Yousef');
sayHello('Keyvan');

const sayHello1 = (fname) => {
    log(`hello ${fname}`);
}

sayHello1('Morteza');
sayHello1('Milad');
sayHello1('Yousef');
sayHello1('Keyvan');

const sayHello2 = fname => log(`hello ${fname}`);

sayHello2('Morteza');
sayHello2('Milad');
sayHello2('Yousef');
sayHello2('Keyvan');
