// Math object
const log = console.log;

log(Math.E);
log(Math.LN2);
log(Math.LN10);
log(Math.LOG2E);
log(Math.LOG10E);
log(Math.PI);

year = 2023;
century = Math.ceil(year / 100);
log(century);

// Date object

var d = new Date();
log(d);
log(d.getHours());
log(d.getMinutes());
log(d.getSeconds());

var t = setInterval(function() {
    var d = new Date();
    var body = document.querySelector('body');
    body.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}, 1000);

clearInterval(t);



// Document Object Model (DOM)

// Selecting via ID

var p1 = document.getElementById("first");
log(p1);

// Selecting via Class

var p2 = document.getElementsByClassName("second");
log(p2);
log(p2[0]);
log(p2[1]);

// Selecting via Tagname

var p3 = document.getElementsByTagName("p");
log(p3);
log(p3[0]);
log(p3[1]);

// Selecting via query

var p4 = document.querySelector("#first");
var p5 = document.querySelector(".second");
var p6 = document.querySelector("p");
var p7 = document.querySelector("body p");

log(p4);
log(p5);
log(p6);
log(p7);

var p8 = document.querySelectorAll(".second");
log(p8);


setTimeout(function() {
    p4.innerHTML = "Changed by javascript";
    p4.id = 'firstfromJS';
}, 3000);

var body = document.querySelector('body');
log(body.childNodes);
log(p5.hasChildNodes);
log(p5.nextElementSibling);
log(p5.previousElementSibling);

p5.style.color = 'green';
p5.style.fontWeight = 'bold';
p5.style.fontSize = '28px';
p5.style.backgroundColor = 'yellow';
p5.style.border = '3px solid black';

var image = document.querySelector('img');
image.style.width = '200px';
image.style.borderRadius = '20px';

setTimeout(function() {
    image.src = './2.jpg';
}, 7000);