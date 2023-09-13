// // ES6

// // Variables
// if (true) {
//     let name = "Morteza";
//     console.log(name);
// }
// console.log(name);

// const a = "Parsa";
// console.log(a);
// a = "Parmis";
// console.log(a);

// // Objects

// var obj = { name: "Morteza", age: 29, sex: "Male" };

// console.log(obj);

// console.log(obj.name);

// for (var i in obj) {
//     console.log(obj[i]);
// }

window.onload = () => {
    var inputs = document.querySelectorAll("input");
    var p = document.querySelectorAll("p");

    counter = 0;
    inputs.forEach((el) => {
        console.log(el);
        if (el.checked) {
            p[counter].style.textDecoration = "line-through";
            console.log(p[counter]);
        }
        counter++;
    })
}