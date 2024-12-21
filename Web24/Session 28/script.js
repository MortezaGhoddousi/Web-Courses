// var x = 4;
// let y = 5;
// const z = 6;

// // z = z + 1;

// const log = console.log;

// // for (var i = 0; i < 3; i++) {
// //     console.log(i);
// // }
// // console.log(i);

// for (let i = 0; i < 3; i++) {
//     log(i);
// }
// // log(i);

// function sayHello(name) {
//     log("hello " + name);
// }

// sayHello("Morteza");

// const sayHellov2 = function (name) {
//     log("hello " + name);
// };

// sayHellov2("Morteza");

// const sayHellov3 = (name) => {
//     log("hello " + name);
// };

// sayHellov3("Morteza");

// const asyncFunction = (name) => {
//     return new Promise((resolve, reject) => {
//         if (name == "") {
//             reject("name is empty");
//         }

//         setTimeout(() => {
//             resolve("name is: " + name);
//         }, 3000);
//     });
// };

// asyncFunction("")
//     .then((x) => {
//         log(x);
//     })
//     .catch((e) => {
//         log(e);
//     });

// myArray = [5, 7, 10, 12, 0, 4, 0, 0, 12];

// myArray.forEach((element) => {
//     log(element);
// });

// const mappedArray = myArray.map((element) => {
//     return element + 5;
// });

// log(myArray);
// log(mappedArray);

// const filteredArray = myArray.filter((element) => {
//     return element != 0;
// });
// log(filteredArray);

// const filteredArrayDividedBy5 = myArray.filter((element) => {
//     return element % 5 == 0;
// });
// log(filteredArrayDividedBy5);

window.onload = function () {
    const data = [
        {
            name: "name1",
            price: 10,
            discount: 10,
            imgAdd: "",
            detail: "details",
            count: 5,
        },
        {
            name: "name2",
            price: 12,
            discount: 15,
            imgAdd: "",
            detail: "details",
            count: 3,
        },
        {
            name: "name3",
            price: 8,
            discount: 0,
            imgAdd: "",
            detail: "details",
            count: 0,
        },
        {
            name: "name4",
            price: 2.5,
            discount: 25,
            imgAdd: "",
            detail: "details",
            count: 2,
        },
    ];

    var article = document.querySelector("article");

    const newData = data.filter((element) => {
        return element.count != 0;
    });

    newData.forEach((element) => {
        var section = document.createElement("section");
        var h1 = document.createElement("h1");
        var div = document.createElement("div");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        var p = document.createElement("p");

        h1.innerHTML = element.name;
        span1.innerHTML = "$" + element.price;
        span2.innerHTML = "%" + element.discount;
        p.innerHTML = element.detail;

        h1.className = "heading";
        span1.className = "price";
        span2.className = "discount";
        p.className = "detail";

        div.appendChild(span1);
        div.appendChild(span2);

        section.appendChild(h1);
        section.appendChild(div);
        section.appendChild(p);

        article.appendChild(section);
    });
};

var myObj = {
    name: "name4",
    price: 2.5,
    discount: 25,
    imgAdd: "",
    detail: "details",
    count: 0,
};

console.log(myObj);

myObj = {
    ...myObj,
    count: 2,
};

console.log(myObj);

myObj.count = 4;
console.log(myObj);

var client = {
    username: "morteza",
    password: 123,
    email: "m.gh@gmail.com",
};

client = { ...client, username: "Mahtab" };
