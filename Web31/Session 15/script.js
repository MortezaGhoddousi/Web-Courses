// ARRAYS

var numbers = [4, 7, 2, 15, 17, 11, 9, 8];
console.log(numbers.length);
console.log(numbers);

var newLength = numbers.push(20);
console.log(numbers);
console.log(newLength);

numbers = [...numbers, 18];
console.log(numbers);

numbers = [19.5, 20, ...numbers, 18.75];
console.log(numbers);

numbers.splice(1, 2);
console.log(numbers);

var i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// numbers.forEach((n) => {
//     console.log(n);
// });

var semester1 = ["HTML", "CSS"];
var semester2 = ["JS"];

var front = semester1.concat(semester2);
console.log(front);

var front2 = [...semester1, ...semester2];
console.log(front2);

// FUNCTIONS

// function name(input1, input2, input3) {
//     body
// }

function f(x, y) {
    var z = 2 * x ** 2 * y + 3 * x ** 2 + 4 * x * y ** 2 + 5 * y ** 2 + 3;
    console.log(z);
    return z;
}

x = f(1, 2);
// x = 46;
// console.log(46);
// 46;
f(2, 3);
console.log(x);

function cal_max(numbers) {
    var maximum = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }
    return maximum;
}

function cal_min(numbers) {
    var minimum = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }
    return minimum;
}

function cal_avg(numbers) {
    var s = 0;
    for (var i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

console.log(cal_max(numbers));
console.log(cal_min(numbers));
console.log(cal_avg(numbers));

nums = [14, 13, 19, 7, 17, 14, 5, 16, 17, 19, 21, 20, 14, 11, 1, 26, 2, 7];
console.log(cal_max(nums));
console.log(cal_min(nums));
console.log(cal_avg(nums));
