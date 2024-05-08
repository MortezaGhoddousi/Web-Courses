// echo "Hello world!";
console.log("Hello world!");

// $fname = 'Morteza';
var fname = "Morteza";

// echo $fname;
console.log(fname);

// $names = array("Morteza", "Mohammad", "Amirali", "Arash");
// echo $names[1];
var names = new Array("Morteza", "Mohammad", "Amirali", "Arash");
console.log(names[1]);

// function sayHello() {
//     console.log("Hello from an object!");
// }

var myobj = {
    fname: "Morteza",
    lname: "Ghoddousi",
    age: 30,
    // hello: sayHello,
    hello: function () {
        console.log("Hello from an object!");
    },
};

console.log(myobj.fname);
myobj.hello();
