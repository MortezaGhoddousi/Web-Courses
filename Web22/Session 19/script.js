// var myObj = {
//     fname: "Morteza",
//     lname: "Ghoddousi",
//     age: 30,
//     weight: 92,
//     height: 1.86,
//     isMale: true,

//     // showName: changeName,
//     showName: function (newName) {
//         this.fname = newName
//     }

// };

// console.log(myObj.age);
// console.log(myObj);

// // function changeName(newName) {
// //     console.log(newName);
// // }

// myObj.showName('Maedeh');
// // console.log(myObj);

// // Selection by tag name
// var p = document.getElementsByTagName('p');
// console.log(p);

// p[0].innerHTML = 'Hello from <b>JAVASCRIPT</b>';

// // Selection by class name
// var classP = document.getElementsByClassName('p1');
// console.log(classP);

// // Selection by ID
// var idP = document.getElementById('p2');
// console.log(idP);

// // selection by jQuery
// var secondIdP = document.querySelector('#p2');
// console.log(secondIdP);

// var secondClassP = document.querySelectorAll('article .p1');
// console.log(secondClassP);

// secondClassP[1].innerHTML = 'New paragraph!';

// var pName = document.querySelector('#name');

// var image = document.querySelector('img');

// image.style.width = '300px';
// image.style.height = '300px';
// image.style.borderRadius = '50%';

// image.src = './1.jpg';
// image.alt = 'New profile';

// setTimeout(function(){
//     image.src = './1.jpg';
//     pName.innerHTML = 'Morteza';
// }, 5000)

// var myName = document.querySelector('#myName');

// setTimeout(function(){
//     myName.innerHTML = 'Ghoddousi';
// }, 4000);

var image = document.querySelector("img");

image.style.width = "100vw";
image.style.height = "300px";
image.style.margin = "0";
image.style.padding = "0";
image.style.boxSizing = "border-box";

var i = 1;

setInterval(function () {
    i++;
    if (i > 5) {
        i = 1;
    }
    image.src = `./${i}.jpg`;
}, 5000);
