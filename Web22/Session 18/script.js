console.log("Hello from js file!");

// $fname = "Morteza";
// echo $fname;

var fname = "Morteza";
console.log(fname);

var myScores = [19, 15, 20, 15, 20, 14, 12.5];

var sum = 0;
for (var i = 0; i < myScores.length; i++) {
    sum += myScores[i];
}

var avg = sum / myScores.length;

console.log(avg);

alert("Your password is wrong!");

var check = confirm("Do you want to leave this page? ");
console.log(check);

var age = prompt("Enter your age: ");
console.log(age);
