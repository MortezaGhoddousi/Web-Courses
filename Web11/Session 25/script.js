
// setTimeout(function(){
//     var headings = document.querySelectorAll("h1");
//     console.log(headings);
//     console.log(headings.length);
//     for (let i=0; i<headings.length; i++){
//         headings[i].innerHTML = "New Text " + i;
//     }
// }, 3000);

// var h1 = document.querySelector(".h1")

// h1.innerHTML = "Hi";

// var div = document.querySelector("div");
// console.log(div);
// var h1 = div.firstElementChild;
// h1.innerHTML = "Hello";
// console.log(h1);

// var div = document.getElementsByTagName("div");
// console.log(div);
// var h1 = div[0].childNodes;
// console.log(h1);
// h1[1].innerHTML = "Hello";

// var img = document.querySelector("img");
// console.log(img.width);
// img.style.width = "200px";
// img.style.border = "3px solid red";
// console.log(img.width);
// setTimeout(function(){
//     var img = document.querySelector("img");
//     img.src = "./Jellyfish.jpg";
// }, 3000);

// var img = document.querySelector("img");
// img.style.width = "200px";

// var check = true;
// var t = setInterval(function(){
//     if (check){
//         img.style.maxWidth = "250px";
//         check = false;
//     }
//     else{
//         img.style.maxWidth = "100px";
//         check = true;
//     }
// }, 1000);

// setTimeout(function(){
//     clearInterval(t);
// }, 10000);



// Tic-Tac_Toe

// Defining the environment
var envi = new Array(3);
envi[0] = new Array(3);
envi[1] = new Array(3);
envi[2] = new Array(3);
for (let i=0; i<envi.length; i++){
    for (let j=0; j<envi.length; j++){
        envi[i][j] = 0;
    }
}

// Choosing the first player to start the game
var r = Math.floor((Math.random()*3)+1);

// 1 indicates player 1
// 2 indicates player 2
var turn = true;
if (r==1){
    var row = Math.floor((Math.random()*3));
    var col = Math.floor((Math.random()*3));
    envi[row][col] = 1;
    turn = true;
}
else{
    var row = Math.floor((Math.random()*3));
    var col = Math.floor((Math.random()*3));
    envi[row][col] = 2;
    turn = false
}

// Main loop
var check = true;
var counter = 1;
while(check){
    if (turn){
        var row = Math.floor((Math.random()*3));
        var col = Math.floor((Math.random()*3));
        if (envi[row][col] == 0){
            envi[row][col] = 2;
            turn = false
        }
    }
    else {
        var row = Math.floor((Math.random()*3));
        var col = Math.floor((Math.random()*3));
        if (envi[row][col] == 0){
            envi[row][col] = 1;
            turn = true
        }
    }
    check = !checkWin(envi);
    counter++;
    if (counter > 100){
        document.write("Draw");
        check = false;
    }
    
}

console.log(envi);

// Function which check who wins the game
function checkWin(envi){
    for (var j=0; j<2; j++){
        for (var i=0; i<envi.length; i++){
            if (envi[i][0] == envi[i][1] && envi[i][0] == envi[i][2] && envi[i][0] == j+1){
                document.write(`Player${j+1} Won`);
                return true;
            }
            if (envi[0][i] == envi[1][i] && envi[0][i] == envi[2][i] && envi[0][i] == j+1){
                document.write(`Player${j+1} Won`);
                return true;
            }
            if (envi[0][0] == envi[1][1] && envi[0][0] == envi[2][2] && envi[0][0] == j+1){
                document.write(`Player${j+1} Won`);
                return true;
            }
            if (envi[0][2] == envi[1][1] && envi[0][2] == envi[2][0] && envi[0][2] == j+1){
                document.write(`Player${j+1} Won`);
                return true;
            }
        }
    }
    return false
}