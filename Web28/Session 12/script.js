// comparison operators

var x = 5;
var y = 9;

var z = x < y;
console.log(`${x} < ${y} => ${z}`);

z = x <= y;
console.log(`${x} <= ${y} => ${z}`);

z = x > y;
console.log(`${x} > ${y} => ${z}`);

z = x >= y;
console.log(`${x} >= ${y} => ${z}`);

z = x == y;
console.log(`${x} == ${y} => ${z}`);

z = x != y;
console.log(`${x} != ${y} => ${z}`);

// logical operators

z = true && true;
console.log(`${true} && ${true} => ${z}`);

z = true && false;
console.log(`${true} && ${false} => ${z}`);

z = false && true;
console.log(`${false} && ${true} => ${z}`);

z = false && false;
console.log(`${false} && ${false} => ${z}`);

z = true || true;
console.log(`${true} || ${true} => ${z}`);

z = true || false;
console.log(`${true} || ${false} => ${z}`);

z = false || true;
console.log(`${false} || ${true} => ${z}`);

z = false || false;
console.log(`${false} || ${false} => ${z}`);

z = !true;
console.log(`! ${true} => ${z}`);

z = !false;
console.log(`! ${false} => ${z}`);

z = !(5 < 8 && (8 != 8 || false));
console.log(z);

// programming structures

// selections
// if statement

console.log("start of the structure ... ");

if (true) {
    console.log("if's body is running ... ");
}

console.log("end of the structure.");

var age = 15;

if (age >= 18) {
    console.log("you are adult");
    console.log(age);
}

// if-else statement
age = 32;

if (age >= 18) {
    console.log("you are adult");
    console.log(age);
} else {
    console.log("you are child");
    age += 1;
    console.log(age);
}

// if-else if-else statement

age = 62;

if (age >= 18 && age < 50) {
    console.log("you are adult");
    console.log(age);
} else if (age >= 10 && age < 18) {
    console.log("you are teenager");
    console.log("shame on you, do not publish photos of you. trust me");
} else if (age >= 50) {
    console.log("you are elder");
    console.log("you are going to be dead asap");
} else {
    console.log("you are child");
    age += 1;
    console.log(age);
}

console.log("end of the script.");
