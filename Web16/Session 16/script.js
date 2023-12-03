console.log("Hello from JS");

document.write('<h1>Hello from JS</h1>');

var x = 10;

console.log(x);
x = x+3;
x*=10;
console.log(x);

alert ("This is an alert pop-up box");

var age = Number(prompt("Enter your age", "29"));
// age = Number(age);
console.log(age);

var check = confirm("Do you really wanna leave this page? ");

console.log(check);

if(check){
    console.log("You chose yes");
}
else {
    console.log("you chose cancel");
}