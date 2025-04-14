var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function (e) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        e.target.className = "active";
    };
}

// let i = 4;
// var i = 4;

// for (var i = 0; i < 4; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 4; i++) {
//     console.log(i);
// }
// console.log(i);

// const i = 1;

function sayHello(name) {
    console.log("hello" + name);
}

sayHello("Morteza");

const sayHello2 = function (name) {
    console.log("hello" + name);
};

sayHello2("Morteza");

const sayHello3 = (name) => {
    console.log("hello" + name);
};

sayHello3("Morteza");
sayHello3("Milad");

var myInfo = ["Morteza", "Ghoddousi", 31, 1.86, 86, true];

for (let i = 0; i < myInfo.length; i++) {
    console.log(myInfo[i]);
}

myInfo.forEach(function (el) {
    console.log(el);
});

// console.log(lis);

// lis[0].onclick = function () {
//     lis[0].style.color = "red";
//     lis[1].style.color = "black";
//     lis[2].style.color = "black";
//     lis[3].style.color = "black";
// };

// lis[1].onclick = function () {
//     lis[1].style.color = "red";
//     lis[0].style.color = "black";
//     lis[2].style.color = "black";
//     lis[3].style.color = "black";
// };

// lis[2].onclick = function () {
//     lis[2].style.color = "red";
//     lis[1].style.color = "black";
//     lis[0].style.color = "black";
//     lis[3].style.color = "black";
// };

// lis[3].onclick = function () {
//     lis[3].style.color = "red";
//     lis[1].style.color = "black";
//     lis[2].style.color = "black";
//     lis[0].style.color = "black";
// };
