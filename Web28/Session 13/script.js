// iterations

// while loop

var i = 4;
if (i < 5) {
    console.log(i);
}

i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// for loop
for (i = 0; i < 3; i++) {
    console.log(i);
}

// array

var name1 = "AmirAli";
var name2 = "Ali";
var name3 = "Hassan";
var name4 = "Morteza";

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

name2 = "Omid";

var names = ["AmirAli", "Ali", name3, name4];
console.log(names);
console.log(names[0]);
names[1] = "Omid";
console.log(names);

console.log(names.length);

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (const key of names) {
    console.log(key);
}

console.log(names);
names.push("Ali");
console.log(names);

names = [...names, "Iman"];
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift("Saeed");
console.log(names);

var newNames = names.slice(1, 3);
console.log(newNames);

names.reverse();
console.log(names);

names.sort();
console.log(names);

names.splice(4);
console.log(names);

var newFilteredNames = names.filter((element) => {
    return element != "Omid";
});

console.log(newFilteredNames);

var info = [
    "Morteza",
    "Ghoddousi",
    31,
    83,
    1.86,
    true,
    ["programming", "volleyball"],
];

console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]);
console.log(info[4]);
console.log(info[5]);
console.log(info[6]);
console.log(info[6][0]);
console.log(info[6][1]);

var numbers = [5, 6, 10, 18, 19, 17, 16, 4, 7.5, 19];
var Min = numbers[0];
var Max = numbers[0];
var Sum = 0;

for (i = 0; i < numbers.length; i++) {
    Sum += numbers[i]; // Sum = Sum + numbers[i]
    if (numbers[i] > Max) {
        Max = numbers[i];
    }

    if (numbers[i] < Min) {
        Min = numbers[i];
    }
}

var average = Sum / numbers.length;
console.log(average);
console.log(Max);
console.log(Min);

Sum = 0;
for (i = 0; i < numbers.length; i++) {
    Sum += (numbers[i] - average) ** 2;
}

var variance = Sum / numbers.length;
console.log(variance);

// object
// [
//     "Morteza",
//     "Ghoddousi",
//     31,
//     83,
//     1.86,
//     true,
//     ["programming", "volleyball"],
// ]

var infoObject = {
    firstName: "Morteza",
    lastName: "Ghoddousi",
    age: 31,
    weight: 83,
    height: 1.86,
    isMale: true,
    hobbies: ["programming", "volleyball"],
};

console.log(infoObject);
// console.log(infoObject["firstName"]);
console.log(infoObject.firstName);
infoObject.weight = infoObject.weight - 1;
console.log(infoObject);

infoObject = { ...infoObject, hair: "black" };
console.log(infoObject);

infoObject = { ...infoObject, weight: infoObject.weight - 1 };
console.log(infoObject);

console.log(Object.keys(infoObject));

for (i = 0; i < Object.keys(infoObject).length; i++) {
    console.log(infoObject[Object.keys(infoObject)[i]]);
}

for (var k in infoObject) {
    console.log(infoObject[k]);
}
