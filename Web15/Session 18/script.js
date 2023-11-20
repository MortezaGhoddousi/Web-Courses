window.onload = function() {
    // // Adding or Removing Elements into HTML using JavaScript

    // setTimeout(function() {
    //     var div = document.createElement('div');
    //     var p = document.createElement('p');
    //     // var text = document.createTextNode('This is a paragraph which is created by JS');
    //     // p.appendChild(text);

    //     p.innerHTML = "This is a paragraph which is created by JS";

    //     div.appendChild(p);

    //     var body = document.querySelector('body');
    //     body.appendChild(div);

    //     var h1 = document.querySelector('h1');

    //     body.removeChild(h1);
    // }, 5000);



    // // Animations

    var body = document.querySelector('body');
    // var h1 = document.querySelector('h1');
    // body.removeChild(h1);

    var div1 = document.createElement('div');
    var div2 = document.createElement('div');

    div1.style.background = 'green';
    div1.style.width = '200px';
    div1.style.height = '200px';
    div1.style.position = 'absolute';

    div2.style.background = 'red';
    div2.style.width = '20px';
    div2.style.height = '20px';
    div2.style.position = 'relative';
    div2.id = 'red';

    body.appendChild(div1);
    body.appendChild(div2);



    var h1 = document.querySelector('h1');
    h1.style.cursor = 'pointer';

    function changingColor() {
        h1.style.color = 'red';
        h2.style.color = 'red';
    }

    var h2 = document.querySelector('h2');
    h2.onclick = changingColor;
    h2.style.cursor = 'pointer';

    var h3 = document.querySelector('h3');
    h3.style.cursor = 'pointer';

    h3.onclick = function() {
        h3.style.color = 'blue';
    }

    var btn = document.createElement('button');
    btn.innerHTML = 'Start';
    btn.style.textDecoration = 'Uppercase';
    btn.style.position = 'relative';
    btn.style.left = '220px';
    body.appendChild(btn);

    // btn.onclick = function() {
    //     var pos = 0;
    //     var t = setInterval(function() {
    //         if (pos >= 180) {
    //             clearInterval(t);
    //         }
    //         var div = document.querySelector('#red');
    //         div.style.left = `${pos}px`;
    //         div.style.top = `${pos}px`;
    //         pos += 10;
    //     }, 100);
    // }

    function f1() {
        var pos = 0;
        var t = setInterval(function() {
            if (pos >= 180) {
                clearInterval(t);
            }
            var div = document.querySelector('#red');
            div.style.left = `${pos}px`;
            div.style.top = `${pos}px`;
            pos += 10;
        }, 100);
        btn.removeEventListener('click', f1);
    }
    btn.addEventListener('click', f1);

    var image = document.createElement('img');
    image.src = './images/1.jpg';
    image.style.width = '200px';
    image.style.position = 'relative';
    image.style.top = '250px';
    body.appendChild(image);

    var count = 2;
    var t = setInterval(function() {
        image.src = `./images/${count}.jpg`;
        count++;
        if (count > 4) {
            count = 1;
        }
    }, 5000);

    var btn1 = document.createElement('button');
    btn1.innerHTML = 'Previous';
    btn1.style.textDecoration = 'Uppercase';
    btn1.style.position = 'relative';
    btn1.style.left = '250px';
    btn1.style.top = '50px';
    btn1.style.width = '80px';
    body.appendChild(btn1);

    var btn2 = document.createElement('button');
    btn2.innerHTML = 'Next';
    btn2.style.textDecoration = 'Uppercase';
    btn2.style.position = 'relative';
    btn2.style.left = '300px';
    btn2.style.top = '50px';
    btn2.style.width = '80px';
    body.appendChild(btn2);

    var image1 = document.createElement('img');
    image1.src = './images/1.jpg';
    image1.style.width = '200px';
    image1.style.position = 'relative';
    image1.style.left = '120px';
    image1.style.top = '250px';
    body.appendChild(image1);

    var count1 = 1;
    btn1.addEventListener('click', function() {
        count1--;
        if (count1 < 1) {
            count1 = 4;
        }
        image1.src = `./images/${count1}.jpg`;
    })

    btn2.addEventListener('click', function() {
        count1++;
        if (count1 > 4) {
            count1 = 1;
        }
        image1.src = `./images/${count1}.jpg`;
    })

    var user = document.querySelector('input[type="text"]');
    var pass = document.querySelector('input[type="password"]');
    var submit = document.querySelector('input[type="submit"]');

    submit.addEventListener('click', function(event) {
        event.preventDefault();
        if ((user.value == '') || (pass.value == '')) {
            alert("Username and Password required");
        } else {
            document.location.href = "home.html";
        }
    })

}