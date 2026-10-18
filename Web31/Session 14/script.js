var num1 = 14;
var num2 = 13;
var num3 = 19;
var num4 = 7;
var num5 = 17;

var average = (num1 + num2 + num3 + num4 + num5) / 5;

console.log(`average of these numbers is: ${average}`);

var maximum = num1;
var minimum = num1;

if (num2 > maximum) {
    maximum = num2;
}

if (num3 > maximum) {
    maximum = num3;
}

if (num4 > maximum) {
    maximum = num4;
}

if (num5 > maximum) {
    maximum = num5;
}

if (num2 < minimum) {
    minimum = num2;
}

if (num3 < minimum) {
    minimum = num3;
}

if (num4 < minimum) {
    minimum = num4;
}

if (num5 < minimum) {
    minimum = num5;
}

console.log(`maximum of these numbers is: ${maximum}`);
console.log(`minimum of these numbers is: ${minimum}`);

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(`maximum of these numbers is: ${num1}`);
}

if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(`maximum of these numbers is: ${num2}`);
}

if (num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5) {
    console.log(`maximum of these numbers is: ${num3}`);
}

if (num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5) {
    console.log(`maximum of these numbers is: ${num4}`);
}

if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1) {
    console.log(`maximum of these numbers is: ${num5}`);
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    console.log(`minimum of these numbers is: ${num1}`);
}

if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    console.log(`minimum of these numbers is: ${num2}`);
}

if (num3 < num2 && num3 < num1 && num3 < num4 && num3 < num5) {
    console.log(`minimum of these numbers is: ${num3}`);
}

if (num4 < num2 && num4 < num3 && num4 < num1 && num4 < num5) {
    console.log(`minimum of these numbers is: ${num4}`);
}

if (num5 < num2 && num5 < num3 && num5 < num4 && num5 < num1) {
    console.log(`minimum of these numbers is: ${num5}`);
}

// FOR LOOP

// for(initial step; final step; step) {
//     body
// }

var i = 0; // initial step

// final step
while (i < 3) {
    console.log("hello");
    console.log(i);
    i++; // step
}

for (i = 0; i < 3; i++) {
    console.log("hello");
    console.log(i);
}

// ARRAYS
var nums = [num1, 13, 19, 7, 17];

// console.error("this is an error message");

console.log(num2);

console.log(nums);
console.log(nums[1]);

var info = [
    "Morteza Ghoddousi",
    32,
    80,
    1.86,
    true,
    ["programming", "sport", "music"],
];

console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]);
console.log(info[4]);
console.log(info[5]);

console.log(info[5][1]);

nums = [14, 13, 19, 7, 17, 14, 5, 16, 17, 19, 21, 20, 14, 11, 1, 26, 2, 7];
var minimum = nums[0];
var maximum = nums[0];
var s = nums[0];

for (i = 1; i < nums.length; i++) {
    s += nums[i];

    if (nums[i] > maximum) {
        maximum = nums[i];
    }
    if (nums[i] < minimum) {
        minimum = nums[i];
    }
}

console.log(`maximum of these numbers is: ${maximum}`);
console.log(`minimum of these numbers is: ${minimum}`);
console.log(`average of these numbers is: ${s / nums.length}`);
