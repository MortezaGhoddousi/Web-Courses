// // Changing Element

// var image = document.querySelector("img");
// image.style.width = "200px";

// setTimeout(function(){
//     var image = document.querySelector("img");
//     image.src = "./Images/1.jpg";

//     var a = document.querySelector("a");
//     a.href = "Yahoo.com";
//     a.innerHTML = "Yahoo";
// }, 6000);



// // // Image Slider


// var image = document.querySelector("img");
// image.style.width = "200px";
// image.style.borderRadius = "15px";

// var iter = 0;

// var arr = new Array()

// for (var i=0; i<8; i++){
//     arr[i] = `./Images/${i}.jpg`;
// }

// // function next(){
// //     iter +=1;
// //     if (iter>7){
// //         iter = 0;
// //     }
// //     image.src = arr[iter];
// //     console.log(image.src);

// // }

// var nextbtn = document.querySelector(".next");
// var prebtn = document.querySelector(".pre");

// var mainsection = document.querySelector(".main");
// var p1 = document.createElement("p");
// var text = document.createTextNode(image.src);

// p1.appendChild(text);
// mainsection.appendChild(p1);

// nextbtn.onclick = function (){
//     iter +=1;
//     if (iter>7){
//         iter = 0;
//     }
//     image.src = arr[iter];
//     console.log(image.src);
//     p1.innerHTML = image.src;
// };

// prebtn.onclick = function (){
//     iter -=1;
//     if (iter<0){
//         iter = 7;
//     }
//     image.src = arr[iter];
//     console.log(image.src);
//     p1.innerHTML = image.src;
// };

// var p2 = document.querySelector("section p");
// mainsection.removeChild(p2);


// // Create Animation

var div1 = document.createElement("div");
var div2 = document.createElement("div");
var btn = document.createElement("button");
var text = document.createTextNode("Start");

div1.id = "div1";
div2.id = "div2";

div1.style.width = "200px";
div1.style.height = "200px";
div1.style.backgroundColor = "green";
div1.style.position = "absolute";

div2.style.width = "20px";
div2.style.height = "20px";
div2.style.backgroundColor = "red";
div2.style.position = "relative";

btn.style.position = "relative";
btn.style.top = "40vh";

var Body = document.querySelector("body");

btn.appendChild(text);

Body.appendChild(div1);
Body.appendChild(div2);
Body.appendChild(btn);


var btn1 = document.querySelector("button");
var div2 = document.querySelector("#div2");

var move = 0;
btn1.onclick = function(){

    var t = setInterval(function(){
        move += 1;
        if (move>170){
            clearInterval(t);
        }
        div2.style.left = `${move}px`;
        div2.style.top = `${move}px`;
    }, 100)
}



