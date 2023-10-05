// // Array

var arr = new Array();
arr[0] = "Morteza";
arr[1] = "AmirAli";
arr[2] = "Younes";
arr[3] = "Sajjad";
arr[4] = "Amir";
arr[5] = "Yashar";
arr[6] = "Nima";

console.log(arr);

// // Function

function f(x, a){
    var y = ((2*x)+3)/a;
    console.log("hello");
    return y;
}

a = f(4, 1);
b = f(8, 2);
y = f(10, 5);
console.log(y);
console.log(a);
console.log(b);

function sayHello(name){
    console.log("Hello " + name);
}

sayHello("AmirAli");
sayHello("Morteza");

for (var i=0; i<7; i++){
    sayHello(arr[i]);
}

arr.forEach(function(el){
    sayHello(el);
})

for(el of arr){
    sayHello(el);
}

// // Object

var obj = {
    name: "Morteza",
    age: 29,
    gender: "Male",
    height: 185
};

console.log(obj);
console.log(obj["name"]);
console.log(obj.name);
console.log(obj.age);

document.body.innerHTML = "Hello Guys";

function Obj(name, age, gender, height){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.sayHello = sayHello;
    this.sayGoodbye = function(){
        console.log("GoodBye");
    }
}


var obj1 = new Obj("Morteza", 29, "Male", 185);
var obj2 = new Obj("AmirAli", 17, "Male", 179);

console.log(obj1);
console.log(obj2);

console.log(obj1.name);
console.log(obj1.age);

console.log(obj2.name);
console.log(obj2.age);

obj1.sayHello("Morteza");
obj1.sayGoodbye();


// //  Example 1

var x = "LD1493";
var off = 0.15;
var price = 1700;

function Task(x, off, price){
    this.x = x;
    this.off = off;
    this.price = price;

    this.showprice = function(){
        console.log(this.x + " price: "+ this.price);
    }

    this.showdiscount = function(){
        y = this.price - (this.price*this.off);
        console.log(y);
        console.log(this.x + " new price: "+ y);
    }
}

var task = new Task(x, off, price);
task.showprice();
task.showdiscount();

