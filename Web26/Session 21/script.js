var myObject = {
    // properties
    username: "Morteza",
    password: 123,
    email: "m.gh@gmail.com",

    // methodes
    sayHello: Hello,
};

myObject = { ...myObject, username: "Matin" };

function Hello() {
    console.log("Hello");
}

console.log(myObject.username);

myObject.sayHello();

function Info(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

var Morteza = new Info("Morteza", 123, "m@gmail.com");
console.log(Morteza);

var Matin = new Info("Matin", 111, "m.n@gmail.com");
console.log(Matin);

var Fatemeh = new Info("Fatemeh", 0, "f.i@yahoo.com");
console.log(Fatemeh.email);

// alert("This is an alert message!");

console.log("end");

// var fname = prompt("enter your name: ");
// console.log(fname);

var Article = document.getElementsByTagName("article");
console.log(Article);

var headings = document.getElementsByTagName("h1");
console.log(headings);

var id = document.getElementById("heading1");
console.log(id);

var classs = document.getElementsByClassName("heading2");
console.log(classs);

var query = document.querySelectorAll("h1");
console.log(query);

var query = document.querySelectorAll("#heading1");
console.log(query);

var query = document.querySelectorAll(".heading2");
console.log(query);

var third = document.querySelectorAll("body h1:nth-child(3)");
console.log(third);

third[0].innerHTML = "Morteza";

var paragraph = document.querySelectorAll("p");

paragraph[0].innerHTML = "Morteza <b>Ghoddousi</b>";


