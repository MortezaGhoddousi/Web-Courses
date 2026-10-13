var x = 4;

// x = x+3;
x += 3;

// x = x-3;
x -= 3;

// x = x*3;
x *= 3;

// x = x/3;
x /= 3;

// x = x%3;
x %= 3;

// x = x**3;
x **= 3;

x = 2;
// x = x+1;
// x += 1;
x++;
// ++x;

x = 2;
// x = x-1;
// x -= 1;
x--;
// --x;

// PROGRAMMING LANGUAGE'S STRUCTURES
// SELECTIONS
// IF_ELSE IF_ELSE STATEMENT

// if (condition1:boolean) {
//     body1
// } else if (condition2:boolean) {
//     body2
// } else if (condition3:boolean) {
//     body3
// } else if (condition4:boolean) {
//     body4
// } else {
//     body5
// }

console.log("start of the if structure");

if (false) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}

console.log("end of the if structure");

var age = 53;

if (age < 10) {
    console.log("child");
} else if (age >= 10 && age < 18) {
    console.log("teenager");
} else if (age >= 18 && age < 40) {
    console.log("adult");
} else {
    console.log("elder");
}

console.log("end of the script");

// ITERATIONS
// WHILE LOOP

// while (condition1:boolean) {
//     body1
// }

var i = 0;  // initial step

// final step
while (i<3) {
    console.log("hello");
    console.log(i);
    i++; // step
}