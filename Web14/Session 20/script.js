console.log("Hello from js file");

var x = 10;
console.log(x);

for (var i=0; i<10; i++){
    console.log("Hello" + i);
}

var i = 0;
while (i < 10){
    console.log("Hello from while loop");
    i++;
}

// if (password != adminpass){
//     alert("Your password is wrong!");
// }

var x = prompt("Enter your age: ");
console.log(typeof(x));
x = Number(x);
console.log(typeof(x));
console.log(x);

var y = confirm("Do you rly leave this page? ");
console.log(y);