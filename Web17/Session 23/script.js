// // var p = document.querySelector('.main p');

// // setTimeout(function() {
// //     p.innerHTML = '<div><b>Hello from JavaScript</b></div>';
// // }, 5000);

// // setTimeout(function() {
// //     var image = document.querySelector('img');
// //     image.src = './images/2.jpg'
// // }, 3000);


// var main = document.querySelector('.main');

// var ChildNodes = main.childNodes;
// console.log(ChildNodes);

// var firstChild = main.firstChild;
// console.log(firstChild);

// var lastChild = main.lastChild;
// console.log(lastChild);

// var hasChildNodes = main.hasChildNodes();
// console.log(hasChildNodes);

// var nextSibling = main.nextSibling;
// console.log(nextSibling);

// var nextElementSibling = main.nextElementSibling;
// console.log(nextElementSibling);

// var previousElementSibling = main.previousElementSibling;
// console.log(previousElementSibling);

// var previousSibling = main.previousSibling;
// console.log(previousSibling);

// var parentNode = main.parentNode;
// console.log(parentNode);

// var firstElementChild = main.firstElementChild;
// console.log(firstElementChild);


// var lastElementChild = main.lastElementChild;
// console.log(lastElementChild);

// // console.log(p.innerHTML);

// setTimeout(function() {
//     main.id = 'main';
// }, 5000);

// var imageAdd = {
//     1: './images/1.jpg',
//     2: './images/2.jpg',
//     3: './images/3.jpg',
//     4: './images/4.jpg'
// }

// var image = document.querySelector('img');
// image.style.border = '2px solid red';

// var body = document.querySelector('body');
// body.style.background = 'gray';
// body.style.color = 'white';
// body.style.fontSize = '28px';

// var key = 1;


// var body = document.querySelector('body');
// var div = document.createElement('div');
// var p = document.createElement('p');
// // var innerHTML = document.createTextNode(imageAdd[key]);
// p.innerHTML = imageAdd[key]

// // p.appendChild(innerHTML);
// div.appendChild(p);
// // body.appendChild(div);
// body.insertBefore(p, image);


// setInterval(function() {
//     var image = document.querySelector('img');
//     image.src = imageAdd[key];
//     p.innerHTML = imageAdd[key];
//     key++;
//     if (key > 4) {
//         key = 1;
//     }
// }, 3000);

// var main = document.querySelector('.main');
// var body = document.querySelector('body');

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Replaced element';


// setTimeout(function() {
//     // body.removeChild(main);
//     body.replaceChild(h1, main);
// }, 10000);



window.onload = function() {
    var body = document.querySelector('body');

    var parent = document.createElement('div');
    var child = document.createElement('div');
    var button = document.createElement('button');
    button.innerHTML = 'Click me';

    body.appendChild(parent);
    body.appendChild(child);
    body.appendChild(button);

    var button = document.querySelector('button');
    button.style.position = 'relative';
    button.style.left = '250px';


    var div = document.querySelectorAll('div');

    console.log(div);

    div[1].style.width = '200px';
    div[1].style.height = '200px';
    div[1].style.position = 'absolute';
    div[1].style.background = 'green';

    div[2].style.width = '20px';
    div[2].style.height = '20px';
    div[2].style.position = 'relative';
    div[2].style.background = 'red';



    button.onclick = function() {
        var pos = 0;

        var t = setInterval(function() {
            div[2].style.left = pos + 'px';
            div[2].style.top = pos + 'px';
            pos++;
            if (pos > 180) {
                clearInterval(t);
            }
        }, 50);
    }
    div[0].style.position = 'relative';
    div[0].style.left = '350px';


    var input = document.querySelector('input');

    // input.onchange = function() {
    //     var p = document.querySelector('.show p');
    //     p.innerHTML = input.value;
    // }

    input.addEventListener('change', function() {
        var p = document.querySelector('.show p');
        p.innerHTML = input.value;
    });

    div.forEach(function(e) {
        e.style.display = 'none';
    })


    var parent = document.createElement('div');
    var child = document.createElement('div');
    parent.appendChild(child);
    body.appendChild(parent);

    parent.style.width = '200px';
    parent.style.height = '200px';
    parent.style.background = 'green';
    parent.id = 'parent';

    child.style.width = '20px';
    child.style.height = '20px';
    child.style.position = 'relative';
    child.style.background = 'red';
    child.id = 'child';


    // child.addEventListener('click', function() {
    //     console.log('clicked on third div');
    // }, false);

    div = document.querySelectorAll('div');
    console.log(div);

    div.forEach(function(e) {
        e.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Click on div');
        })
    })

    var mywork = function(e) {
        e.stopPropagation();
        console.log('clicked on body');
        body.removeEventListener('click', mywork);
    }

    body.addEventListener('click', mywork);


}