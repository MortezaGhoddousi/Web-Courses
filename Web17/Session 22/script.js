// var p = document.querySelector('.main p');

// setTimeout(function() {
//     p.innerHTML = '<div><b>Hello from JavaScript</b></div>';
// }, 5000);

// setTimeout(function() {
//     var image = document.querySelector('img');
//     image.src = './images/2.jpg'
// }, 3000);


var main = document.querySelector('.main');

var ChildNodes = main.childNodes;
console.log(ChildNodes);

var firstChild = main.firstChild;
console.log(firstChild);

var lastChild = main.lastChild;
console.log(lastChild);

var hasChildNodes = main.hasChildNodes();
console.log(hasChildNodes);

var nextSibling = main.nextSibling;
console.log(nextSibling);

var nextElementSibling = main.nextElementSibling;
console.log(nextElementSibling);

var previousElementSibling = main.previousElementSibling;
console.log(previousElementSibling);

var previousSibling = main.previousSibling;
console.log(previousSibling);

var parentNode = main.parentNode;
console.log(parentNode);

var firstElementChild = main.firstElementChild;
console.log(firstElementChild);


var lastElementChild = main.lastElementChild;
console.log(lastElementChild);

// console.log(p.innerHTML);

setTimeout(function() {
    main.id = 'main';
}, 5000);

var imageAdd = {
    1: './images/1.jpg',
    2: './images/2.jpg',
    3: './images/3.jpg',
    4: './images/4.jpg'
}

var image = document.querySelector('img');
image.style.border = '2px solid red';

var body = document.querySelector('body');
body.style.background = 'gray';
body.style.color = 'white';
body.style.fontSize = '28px';

var key = 1;


var body = document.querySelector('body');
var div = document.createElement('div');
var p = document.createElement('p');
// var innerHTML = document.createTextNode(imageAdd[key]);
p.innerHTML = imageAdd[key]

// p.appendChild(innerHTML);
div.appendChild(p);
// body.appendChild(div);
body.insertBefore(p, image);


setInterval(function() {
    var image = document.querySelector('img');
    image.src = imageAdd[key];
    p.innerHTML = imageAdd[key];
    key++;
    if (key > 4) {
        key = 1;
    }
}, 3000);