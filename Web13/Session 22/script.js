// //Methods in Objects

// function person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.changeName = function(name) {
//             this.name = name;
//         }
//         // this.sayHello = function() {
//         //     console.log("Hello users");
//         // }
//     this.sayHello = hellouser;
// }

// function hellouser() {
//     console.log("Hello users");
// }

// var p1 = new person("John", 21);

// console.log(p1.name);
// console.log(p1.age);

// p1.changeName("Amy");
// console.log(p1.name);

// p1.sayHello();



// //Array

// var container = new Array();
// container[0] = "HTML";
// container[1] = "CSS";
// container[2] = "PHP";
// container[3] = "JavaScript";
// console.log(container[0]);
// console.log(container.length);

// //Math object

// var x = Number(prompt("Enter your number dude: "));
// console.log("PI * your number: " + Math.PI * x);
// console.log("square roots of your number: " + Math.sqrt(x));
// console.log("your number powers by 2: " + Math.pow(x, 2));

// var year = Number(prompt("Enter your number dude: "));

// var decade = year / 100;
// console.log(Math.ceil(decade));


// //Date object

var d = new Date();
console.log(d);

console.log(`${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`)

var t = setInterval(() => {
    var d = new Date();
    document.body.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}, 1000)