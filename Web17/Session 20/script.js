console.log('Hello from JavaScript');

var x = 10;
console.log(x);

var names = new Array('Morteza', 'Ghoddousi');
console.log(names[0]);
console.log(names[1]);

var scores = [20, 15];
console.log(scores[0]);
console.log(scores[1]);

var info = new Array();
info['fname'] = 'Morteza';
info['lname'] = 'Ghoddousi';
info['age'] = 29;

console.log(info['fname']);
console.log(info.lname);

console.log(info.length);
// console.log()

// alert('Alert popup box');

// var age = Number(prompt('Enter your age', '29'));
// console.log(age);

// console.log(age + age);

// var leave = confirm('Do you want to leave the page? ');
// if (leave) {
//     console.log(leave);
// } else {
//     console.log(leave);
// }

var myinfo = {
    fname: 'Morteza',
    lname: 'Ghoddousi',
    age: 29
};

// console.log(myinfo.fname);
// console.log(myinfo.lname);
// console.log(myinfo.age);
// console.log(myinfo);


console.log('===============================================');

// function sayHello() {
//     console.log("Hello, Im a method of an Object");
// }

function Myinfo(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.Hello = function() {
        console.log("Hello, Im a method of an Object" + this.fname);
    };
}

var Morteza = new Myinfo('Morteza', 'Ghoddousi', 29);
console.log(Morteza.fname);
console.log(Morteza.lname);
console.log(Morteza.age);
Morteza.Hello();
console.log(Morteza);

var Hossein = new Myinfo('Hossein', 'Rajabi', 21);
console.log(Hossein.fname);
console.log(Hossein.lname);
console.log(Hossein.age);
console.log(Hossein);

var Amir = new Myinfo('Amir', 'Ramezani', 25);
console.log(Amir.fname);
console.log(Amir.lname);
console.log(Amir.age);
console.log(Amir);