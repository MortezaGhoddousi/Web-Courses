const log = console.log;

// window.addEventListener("load", function () {
//     document.querySelector("form").addEventListener("submit", function (e) {
//         e.preventDefault();
//     });

//     document
//         .querySelector("input[type='submit']")
//         .addEventListener("click", function (e) {
//             inputs = document.querySelectorAll(
//                 "input:not(input[type='submit'])"
//             );
//             var error = 0;
//             inputs.forEach((element) => {
//                 if (element.value == "") {
//                     error++;
//                 }
//             });
//             if (error != 0) {
//                 alert("Fields must be filled!");
//             } else {
//                 window.location.href = "main.html";
//             }
//         });
// });

// const hello = function(){

// }

// const hello = ()=>{

// }

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

for (let i = 0; i < 5; i++) {
    log(i);
}

// log(i);

const names = "morteza";

// names = "mahdi";

age = 30;

log("my age is " + age);
log(`my age is ${age}`);

var arr = ["Morteza", "Mohammad", "Maedeh", "Mahdi", "Nazanin"];

log("First method!");

log(arr[0]);
log(arr[1]);
log(arr[2]);
log(arr[3]);
log(arr[4]);

log("Second method!");

for (let i = 0; i < arr.length; i++) {
    log(arr[i]);
}

log("Third method!");

arr.forEach((el) => {
    log(el);
});

log("Forth method!");

for (let i of arr) {
    log(i);
}

var obj = {
    teacher: "Morteza",
    stu1: "Mohammad",
    stu2: "Maedeh",
    stu3: "Mahdi",
    stu4: "Nazanin",
};

log("First method!");

log(obj.teacher);
log(obj.stu1);
log(obj.stu2);
log(obj.stu3);
log(obj.stu4);

log("Second method!");

for (let i in obj) {
    log(obj[i]);
}

const sayHello = function (x) {
    log(`Hello ${x}`);
};

sayHello("Morteza");

const sayHello1 = (x) => {
    log(`Hello ${x}`);
};

sayHello1("Mahdi");
