window.onload = function(){
    // var body = document.querySelector("body");
    
    // var h1 = document.createElement("h1");
    // h1.innerHTML = "Morteza";
    // h1.style.color = "red";
    // h1.style.fontSize = "20px";
    
    // body.appendChild(h1);
    
    // var article = document.getElementsByClassName("a1");
    // console.log(article);
    
    // var body = document.querySelector("body");
    // var div1 = document.createElement("div");
    // div1.style.position = "absolute";
    // div1.style.background = "green";
    // div1.style.width = "100px";
    // div1.style.height = "100px";
    
    // var div2 = document.createElement("div");
    // div2.style.position = "relative";
    // div2.style.background = "red";
    // div2.style.width = "10px";
    // div2.style.height = "10px";
    // div2.style.top = "0";
    // div2.style.left = "0";
    
    // var button = document.createElement("button");
    // button.style.position = "relative";
    // button.style.background = "gray";
    // button.style.color = "white";
    // button.style.borderRadius = "10px";
    // button.style.cursor = "pointer";
    // button.style.width = "100px";
    // button.style.height = "30px";
    // button.innerHTML = "Click me";
    // button.style.top = "0";
    // button.style.left = "150px";
    
    // body.appendChild(div1);
    // body.appendChild(div2);
    // body.appendChild(button);
    
    // var btn = document.querySelector("button");
    
    // btn.onclick = function () {
    //     // alert("clicked on button!");
    //     var count = 0;
    //     var t = setInterval(function () {
    //         var div = document.querySelectorAll("div");
    //         div[1].style.left = `${count}px`;
    //         div[1].style.top = `${count}px`;
    //         count++;
    //         if (count == 91) {
    //             clearInterval(t);
    //         }
    //     }, 100);
    // };
    
    // btn.onmouseout = function () {
    //     alert("hovered me!");
    // };
    
    // btn.addEventListener("click", function () {
    //     var count = 0;
    //     var t = setInterval(function () {
    //         var div = document.querySelectorAll("div");
    //         div[1].style.left = `${count}px`;
    //         div[1].style.top = `${count}px`;
    //         count++;
    //         if (count == 91) {
    //             clearInterval(t);
    //         }
    //     }, 100);
    // });
    var image = document.querySelector("img");
    
    image.style.width = "200px";
    image.style.borderRadius = "7px";
    
    var addresses = [
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/4.jpg",
    ];
    
    var i = 1;
    var t = setInterval(function () {
        var image = document.querySelector("img");
        image.src = addresses[i];
        i++;
        if (i >= 4) {
            i = 0;
        }
        image.style.width = "200px";
        image.style.borderRadius = "7px";
    }, 2000);
    
    var btns = document.querySelectorAll("button");
    
    btns[0].addEventListener("click", function () {
        i--;
        if (i <= 0) {
            i = 3;
        }
        var image = document.querySelector("img");
        image.src = addresses[i];
    });
    
    btns[1].addEventListener("click", function () {
        i++;
        if (i >= 4) {
            i = 0;
        }
        var image = document.querySelector("img");
        image.src = addresses[i];
    });
    
    var image = document.querySelector("img");
    
    image.addEventListener("mouseover", function () {
        clearInterval(t);
    });
    
    image.addEventListener("mouseout", function () {
        t = setInterval(function () {
            var image = document.querySelector("img");
            image.src = addresses[i];
            i++;
            if (i >= 4) {
                i = 0;
            }
            image.style.width = "200px";
            image.style.borderRadius = "7px";
        }, 2000);
    });
}

