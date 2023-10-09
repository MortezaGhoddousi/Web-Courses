// // Map and Set

let map = new Map([
    ["firstName", "Morteza"],
    ["lastName", "Ghoddousi"]
]);

console.log(map);
console.log(map.size);

map.set("age", 29);

console.log(map);
console.log(map.size);

for (let kv of map.entries()) {
    console.log(kv[0]);
    console.log(kv[1]);
}

let set = new Set();

set.add(1).add(1).add(4).add(8).add(5).add(9).add(9);
console.log(set);
console.log(set.size);


// // Promise

setTimeout(() => {
    console.log("Work1");
    setTimeout(() => {
        console.log("Work2");
    }, 1000);
}, 1000);

console.log("End");



const asyncFunc = (work) => {
    return new Promise((resolve, reject) => {
        if (work === "") {
            reject(Error("Nothing"));
        }
        setTimeout(() => {
            resolve(work);
        }, 1000)
    })
}

asyncFunc("Work1")
    .then((result) => {
        console.log(result);
        return asyncFunc("Work2")
    }, (error) => {
        console.log(error);
    })
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });

console.log("End");