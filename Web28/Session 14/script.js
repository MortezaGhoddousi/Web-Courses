var numbers = [4, 7, 8, 2, 15, 49];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // sum = sum + numbers[i]
}

for (var values of numbers) {
    console.log(values);
}

for (var indices in numbers) {
    console.log(indices);
}

var info = {
    midTerm: 18,
    final: 17,
    fullName: "Omid Omidi",
};

// for (var values of info) {
//     console.log(values);
// }

for (var indices in info) {
    console.log(indices);
}

// functions

function f(x, y) {
    var z = 3 * x * y ** 2 + 4 * x + 3 * y + 7;
    return z;
}

console.log(f(1, 2));
var x = f(2, 4);
console.log(x);

function sayHello() {
    console.log("this function has neighor inputs or output");
    console.log("and wants to say hello to the client");
}

sayHello();

function sendATextMessage() {
    console.log("this function has no input while it has an output");
    return "hello from this function";
}

console.log(sendATextMessage());

function sayHello2(fname) {
    console.log("this function has input while it does not have output");
    console.log(`hello ${fname}`);
}

sayHello2("Morteza");
sayHello2("Hassan");

function calMin(nums) {
    var m = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < m) {
            m = nums[i];
        }
    }
    return m;
}

function calMax(nums) {
    var m = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > m) {
            m = nums[i];
        }
    }
    return m;
}

function calAvg(nums) {
    var s = 0;
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    return s / nums.length;
}

function calVar(nums) {
    var avg = calAvg(nums);
    var s = 0;
    for (var i = 0; i < nums.length; i++) {
        s += (nums[i] - avg) ** 2;
    }
    return s / nums.length;
}

function calMinMaxAvgVar(nums) {
    var min = calMin(nums);
    var max = calMax(nums);
    var avg = calAvg(nums);
    var Var = calVar(nums);

    return {
        minimum: min,
        maximum: max,
        average: avg,
        variance: Var,
    };

    // return {
    //     min,
    //     max,
    //     avg,
    //     Var,
    // };
}

numbers = [4, 7, 8, 2, 15, 49];

console.log(calMin(numbers));
console.log(calMax(numbers));
console.log(calAvg(numbers));
console.log(calVar(numbers));

numbers = [41, 17, 53, 22, 35, 15, 22, 35];

console.log(calMin(numbers));
console.log(calMax(numbers));
console.log(calAvg(numbers));
console.log(calVar(numbers));

console.log(calMinMaxAvgVar(numbers));

var Math_object = {
    pi: 3.14,
    maximum: calMax,
    minimum: calMin,
    variance: calVar,
    average: calAvg,
    std: (nums) => {
        var Var = calVar(nums);
        return Math.sqrt(Var);
    },
};

console.log(Math_object.pi);
console.log(Math_object.maximum(numbers));
console.log(Math_object.minimum(numbers));
console.log(Math_object.variance(numbers));
console.log(Math_object.average(numbers));
console.log(Math_object.std(numbers));

console.log(Math_object);

const calculateMinMaxAvgVar = function (nums) {
    var min = calMin(nums);
    var max = calMax(nums);
    var avg = calAvg(nums);
    var Var = calVar(nums);

    return {
        minimum: min,
        maximum: max,
        average: avg,
        variance: Var,
    };
};

const CalMinMaxAvgVar = (nums) => {
    var min = calMin(nums);
    var max = calMax(nums);
    var avg = calAvg(nums);
    var Var = calVar(nums);

    return {
        minimum: min,
        maximum: max,
        average: avg,
        variance: Var,
    };
};

console.log(Math.E);
console.log(Math.PI);
console.log(Math.exp(4));
console.log(Math.floor(3.2));
console.log(Math.ceil(3.2));

var t = new Date();
console.log(t);

console.log(t.getDate());
console.log(t.getDay());
console.log(t.getFullYear());
console.log(t.getHours());
console.log(t.getMinutes());
console.log(t.getMonth());

console.log(`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`);
