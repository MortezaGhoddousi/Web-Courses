var x = 4;
let y = 3;
const z = 7;

for (let i = 0; i < 3; i++) {
    console.log(i);
}

let i = 9;
console.log(i);

var myArr = [
    "Morteza",
    "Mahdi",
    "Aref",
    "Maedeh",
    "Mahya",
    "Honey",
    "Reyhaneh",
    "Zeinab",
];

console.log("For loop");
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i], i);
}

console.log("For of loop");
for (let i of myArr) {
    console.log(i);
}

console.log("For each loop");
myArr.forEach(function (val, ind) {
    console.log(val, ind);
});

var newArr = myArr.map(function (v, i) {
    return i + v;
});
console.log(myArr);
console.log(newArr);

// var newArr = myArr.filter(function(v, i){
//     return v[0] == 'M'
// })

var newArr = myArr.filter((v, i) => {
    return v[0] == "M";
});

console.log(myArr);
console.log(newArr);

function addNumbers1(x, y) {
    return x + y;
}

const addNumbers2 = (x, y) => {
    return x + y;
};
