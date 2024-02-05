let myArr = ['Morteza', 'Amir', 'Hossein'];
let newArr = myArr.slice(1);

console.log(newArr);

// x = myArr[0];
// y = myArr[1];
// z = myArr[2];
var [x, y, z] = myArr;

// var arr = call();
// [x, y, z] = call()

console.log(x);
console.log(y);
console.log(z);

var temp = x;
x = y;
y = temp;

[y, x] = [x, y];

let obj = { h: 100, s: true };
let { h, s } = obj;
console.log(h);
console.log(s);

var o = { h: 42, s: true };
var { h: foo, s: bar } = o;
//console.log(h); // Error
console.log(foo); // 42
console.log(bar);

const myfunc = (arr, ...nums) => {

    arr.forEach(element => {
        console.log(element);
    });

    console.log(nums);
    console.log(nums[3]);

}

// myfunc(myArr);
// myfunc(['Hasan', 'Iman']);

myfunc(myArr, 2, 3, 6, 'saeed', true);

let newArra = ['Three', 'Four'];

let arr2 = ['One', 'Two', newArra, 'Five'];
console.log(arr2);

let arr1 = ['One', 'Two', ...newArra, 'Five'];
console.log(arr1);


class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    grow() {
        this.age += 1;
    }

    static changeName(newName) {
        this.fname = newName;
        console.log(this.fname);
    }

}

var p1 = new Person('Morteza', 'Ghoddousi', 29);
console.log(p1);
console.log(p1.age);
p1.grow();
console.log(p1.age);

Person.changeName('Amir');

class NewPerson extends Person {
    changeLastName(lname) {
        this.lname = lname;
    }
}

var p2 = new NewPerson('AmirHossein', 'Ramezani', 25);
console.log(p2);

p2.grow();

p2.changeLastName('Amir');

console.log(p2);


let myArr2 = ['Morteza', 'Amir', 'Hossein'];

var myMap = myArr2.map((element) => {
    console.log(element);
    return element += ' ** ';
});

console.log(myMap);