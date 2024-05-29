let prop = "name";
let id = "1234";
let mobile = "08923";

let user = {
    [prop]: "Jack",
    [`user_${id}`]: `${mobile}`,
};

console.log(user.name); // Jack
console.log(user.user_1234); // 08923

function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    grow() {
        this.age++;
    }
}

class Mahdi extends Person {
    hello() {
        console.log("Hello");
    }
}

let Morteza = new Person("Morteza", "Ghoddousi", 30);

console.log(Morteza.age);
console.log(Morteza.fname);
console.log(Morteza.lname);

Morteza.grow();
console.log(Morteza.age);

let Mahdi1 = new Mahdi("Mahdi", "Asadi", 38);

console.log(Mahdi1.age);
console.log(Mahdi1.fname);
console.log(Mahdi1.lname);

Mahdi1.grow();
console.log(Mahdi1.age);

Mahdi1.hello();
