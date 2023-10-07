// // Objects

let obj = {
    firstName: "Morteza",
    lastname: "Ghoddousi",
    age: 29,
    gender: "Male",
    height: 185,
    weight: 85
}

// let newobj = obj;
let newobj = Object.assign({}, obj);

newobj.firstName = "Ehsan";

console.log(obj.firstName);
console.log(newobj.firstName);


console.log(obj);
console.log(obj.firstName);
console.log(obj.lastname);
console.log(obj["age"]);

// function sayHello() {
//     console.log("Hello");
// }

const sayHello = () => {
    console.log("Hello");
}


function Myobj(firstName, lastname, age, gender, height, weight) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;

    this.sayHello = sayHello;
}


let p1 = new Myobj("Morteza", "Ghoddousi", 29, "Male", 185, 85);
let p2 = new Myobj("Ehsan", "Khakshour", 18, "Male", 179, 56);

console.log(p1.firstName);
console.log(p2.firstName);
p1.sayHello();


// // Task

let basic = {
    ex1: "10 Times",
    ex2: "20 Times"
}

let advance = {
    ex3: "30 Times",
    ex4: "25 Times"
}

let combined = Object.assign({}, basic, {}, advance);
console.log(combined);

let newCombined = {...basic, ...advance };
console.log(newCombined);


// // Rest and Spread
const newFunc = (a, b, c, d) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

newFunc(1, 2, 3, 4);

let arr = [1, 2, 3];

newFunc(arr[0], arr[1], arr[2], 4);

newFunc(...arr, 4);


// // Task

let Exams = class {
    constructor(...score) {
        this.score1 = score[0];
        this.score2 = score[1];
        this.score3 = score[2];
    }

    average() {
        return (this.score1 + this.score2 + this.score3) / 3
    }
}

let score1 = 74;
let score2 = 80;
let score3 = 68;

let ex1 = new Exams(score1, score2, score3);
console.log("Average is: " + ex1.average());