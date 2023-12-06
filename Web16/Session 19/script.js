var p1 = document.getElementsByTagName("p");
console.log(p1);

var p2 = document.getElementById("second");
console.log(p2);

var p3 = document.getElementsByClassName("third");
console.log(p3);

var p4 = document.querySelector("#second");
console.log(p4);

var p5 = document.querySelector("p");
console.log(p5);

var p6 = document.querySelectorAll("p");
console.log(p6);

var body = document.querySelector('body');




setTimeout(function(){
    var div = document.createElement("div");
    var p7 = document.createElement("p");
    // var text = document.createTextNode("Paragraph which is created by JS");
    p7.innerHTML = "<b>Paragraph</b> which is created by JS";
    
    // p7.appendChild(text);
    div.appendChild(p7);
    body.appendChild(div);

}, 5000);

setTimeout(function(){
    body.removeChild(p2);
}, 3000);


setTimeout(function(){
    var div = document.createElement("div");
    
    div.style.backgroundColor = "gray";
    var image = document.createElement("img");
    image.src = "./Images/0.jpg";
    image.style.width = "200px";
    image.style.borderRadius = "50%";
    div.appendChild(image);
    div.appendChild(startbtn);
    body.appendChild(div);
}, 1000);
var div = document.createElement("div");  
div.style.backgroundColor = "gray";
var startbtn = document.createElement("button");
startbtn.innerHTML = "Start"
div.appendChild(startbtn);
body.appendChild(div);
var startbtn = document.querySelector("button");

setTimeout(function(){
    var image = document.querySelector("img");
    image.src = "./Images/1.jpg";

}, 5000);

var addresses = new Array();
for (var i=0; i<8; i++){
    addresses[i] = `./Images/${i}.jpg`;
}
console.log(addresses);

var count = 0;
setInterval(function(){
    var image = document.querySelector("img");
    image.src = addresses[count];
    count++;
    if (count>7){
        count = 0;
    }
}, 5000);


var div1 = document.createElement("div");
div1.style.backgroundColor = "green";
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.position = "absolute";
// div1.style.top = "0px";
// div1.style.left = "0px";


var div2 = document.createElement("div");
div2.style.backgroundColor = "red";
div2.style.width = "20px";
div2.style.height = "20px";
div2.style.position = "relative";
// div1.style.top = "0px";
// div1.style.left = "0px";

body.appendChild(div1);
body.appendChild(div2);

div2.onmouseover = function(){
    var count1 = 0;
    var t = setInterval(function(){
        div2.style.left = `${count1}px`;
        div2.style.top = `${count1}px`;
        count1++;
        if (count1>180){
            clearInterval(t);
        }
    }, 50);
};


var count1 = 0;
var t = setInterval(function(){
    div2.style.left = `${count1}px`;
    div2.style.top = `${count1}px`;
    count1++;
    if (count1>180){
        clearInterval(t);
    }
}, 5);



// console.log(startbtn);
// startbtn.onclick = function(){
//     var count1 = 0;
//     var t = setInterval(function(){
//         div2.style.left = `${count1}px`;
//         div2.style.top = `${count1}px`;
//         count1++;
//         if (count1>180){
//             clearInterval(t);
//         }
//     }, 5);
// };

startbtn.addEventListener("click", function(){
    var count1 = 0;
    var t = setInterval(function(){
        div2.style.left = `${count1}px`;
        div2.style.top = `${count1}px`;
        count1++;
        if (count1>180){
            clearInterval(t);
        }
    }, 25);
});








