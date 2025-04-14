var x = 15;
console.log(x + 7);

var names = ["Morteza", "Matin", "Fatemeh", "MohammadJavad"];

names.forEach(function (name) {
    console.log(name);
});

var mappedNames = names.map((name) => {
    return "<h1>" + name + "</h1>";
});

console.log(mappedNames);

var filteredNames = names.filter((name) => {
    return name[0] == "M";
});

console.log(filteredNames);

function Matin(phrase) {
    return new Promise(function (resolve, reject) {
        if (phrase == "Morteza") {
            resolve("the work done successfully!");
        } else {
            reject("bad for me!");
        }
    });
}

function Fatemeh(arg) {
    console.log(arg);
    console.log("Success!");
}

function MJ(arg) {
    console.log(arg);
    console.log("Fail!");
}

function Mahdiar(arg) {
    console.log(arg);
    console.log("out of promise!");
}

Matin("Fatemeh")
    .then((arg) => {
        console.log(arg);
        console.log("Success!");
    })
    .catch((arg) => {
        console.log(arg);
        console.log("Fail!");
    });

Mahdiar("mahdiar");
