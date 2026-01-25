var age = 21;

if (age >= 18) {
    var text = "adult";
} else {
    var text = "child";
}

console.log(text);

var text2 = age >= 18 ? "adult" : "child";

console.log(age >= 18 ? "adult" : "child");

function f1(a1) {
    return new Promise((resolve, reject) => {
        console.log("your data has been being sending to the server ...");
        if (a1 == 1) {
            resolve("successfully");
        }

        reject("unsuccessful");
    });
}

f1(1)
    .then((text) => {
        console.log("f1 function has been called successfully");
        console.log(text);
    })
    .catch((error) => {
        console.log("f1 function has been called unsuccessfully");
        console.log(error);
    });

console.log("the end");

class sendData {
    constructor(data) {
        this.data = data;
    }
}

class mathClass {
    constructor(numbers) {
        this.numbers = numbers;
    }

    sum() {
        var s = 0;
        this.numbers.forEach((n) => {
            s += n;
        });
        return s;
    }

    avg() {
        return this.sum() / this.numbers.length;
    }

    min() {
        var m = this.numbers[0];
        this.numbers.forEach((n) => {
            if (n < m) {
                m = n;
            }
        });

        return m;
    }

    max() {
        var m = this.numbers[0];
        this.numbers.forEach((n) => {
            if (n > m) {
                m = n;
            }
        });

        return m;
    }
}

m1 = new mathClass([4, 8, 3, 1]);

console.log(m1.numbers);

console.log(m1.sum());
console.log(m1.avg());
console.log(m1.min());
console.log(m1.max());

var m2 = {
    numbers: [4, 8, 3, 1],

    sum: 
    (numbers) => {
        var s = 0;
        numbers.forEach((n) => {
            s += n;
        });
        return s;
    },

    avg: (numbers) => {
        return m2.sum(numbers) / numbers.length;
    },

    min: (numbers) => {
        var m = numbers[0];
        numbers.forEach((n) => {
            if (n < m) {
                m = n;
            }
        });

        return m;
    },

    max: (numbers) => {
        var m = numbers[0];
        numbers.forEach((n) => {
            if (n > m) {
                m = n;
            }
        });

        return m;
    },
};

console.log(m2.numbers);

console.log(m2.sum([4, 8, 3, 1]));
console.log(m2.avg([4, 8, 3, 1]));
console.log(m2.min([4, 8, 3, 1]));
console.log(m2.max([4, 8, 3, 1]));
