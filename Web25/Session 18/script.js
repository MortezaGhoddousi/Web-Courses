// Objects

var myObject = {
    fname: "Morteza",
    lname: "Ghoddousi",
    age: 30,
    weight: 90,
    height: 1.86,
    isMale: true,
    addAge: callbackFunction,
};

function callbackFunction() {
    console.log("happy birthday");
}

console.log(myObject["fname"]);
console.log(myObject.fname);

myObject.addAge();

// Document Obejct Model (DOM)

var article = document.getElementsByTagName("article");
console.log(article);

var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

var p0 = document.getElementById("article0");
console.log(p0);

var p1 = document.getElementsByClassName("article1");
console.log(p1);

var queryArticle0 = document.querySelectorAll("#article0");
var queryp0 = document.querySelectorAll(".article1");
var queryp1 = document.querySelectorAll("article .article1");

console.log(queryArticle0);
console.log(queryp0);
console.log(queryp1);

var queryArticle0 = document.querySelectorAll("#article0");

