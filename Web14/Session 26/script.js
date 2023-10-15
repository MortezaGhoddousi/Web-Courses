window.onload = function(){
    var x = "";
    var y = "";
    var z = "";
    var operator = "";
    var turn = true;
    var display = document.querySelector(".display");
    var btns = document.querySelectorAll("button");
    // // C
    btns[0].addEventListener("click", function(){
        x = "";
        y = "";
        z = "";
        operator = "";
        turn = true;
        display.innerHTML = 0;
    });
    // // +/-
    btns[1].addEventListener("click", function(){
        display.innerHTML = -display.innerHTML;
    });
    // // %
    btns[2].addEventListener("click", function(){
        turn = false;
        operator = "%";
    });
    // // /
    btns[3].addEventListener("click", function(){
        turn = false;
        operator = "/";
    });
    // // 7
    btns[4].addEventListener("click", function(){
        if (turn){
            x += "7";
            display.innerHTML = x;
        }
        else {
            y += "7";
            display.innerHTML = y;
        }
    });
    // // 8
    btns[5].addEventListener("click", function(){
        if (turn){
            x += "8";
            display.innerHTML = x;
        }
        else {
            y += "8";
            display.innerHTML = y;
        }
    });
    // // 9
    btns[6].addEventListener("click", function(){
        if (turn){
            x += "9";
            display.innerHTML = x;
        }
        else {
            y += "9";
            display.innerHTML = y;
        }
    });
    // // *
    btns[7].addEventListener("click", function(){
        turn = false;
        operator = "*";
    });
    // // 4
    btns[8].addEventListener("click", function(){
        if (turn){
            x += "4";
            display.innerHTML = x;
        }
        else {
            y += "4";
            display.innerHTML = y;
        }
    });
    // // 5
    btns[9].addEventListener("click", function(){
        if (turn){
            x += "5";
            display.innerHTML = x;
        }
        else {
            y += "5";
            display.innerHTML = y;
        }
    });
    // // 6
    btns[10].addEventListener("click", function(){
        if (turn){
            x += "6";
            display.innerHTML = x;
        }
        else {
            y += "6";
            display.innerHTML = y;
        }
    });
    // // -
    btns[11].addEventListener("click", function(){
        turn = false;
        operator = "-";
    });
    // // 1
    btns[12].addEventListener("click", function(){
        if (turn){
            x += "1";
            display.innerHTML = x;
        }
        else {
            y += "1";
            display.innerHTML = y;
        }
    });
    // // 2
    btns[13].addEventListener("click", function(){
        if (turn){
            x += "2";
            display.innerHTML = x;
        }
        else {
            y += "2";
            display.innerHTML = y;
        }
    });
    // // 3
    btns[14].addEventListener("click", function(){
        if (turn){
            x += "3";
            display.innerHTML = x;
        }
        else {
            y += "3";
            display.innerHTML = y;
        }
    });
    // // +
    btns[15].addEventListener("click", function(){
        turn = false;
        operator = "+";
    });
    // // 0
    btns[16].addEventListener("click", function(){
        if (turn){
            x += "0";
            display.innerHTML = x;
        }
        else {
            y += "0";
            display.innerHTML = y;
        }
    });
    // // .
    btns[17].addEventListener("click", function(){
        if (turn){
            x += ".";
            display.innerHTML = x;
        }
        else {
            y += ".";
            display.innerHTML = y;
        }
    });
    // // =
    btns[18].addEventListener("click", function(){
        switch (operator){
            case "%":
                z = Number(x)%Number(y);
                display.innerHTML = z;
                break;
            case "/":
                z = Number(x)/Number(y);
                display.innerHTML = z;
                break;
            case "*":
                z = Number(x)*Number(y);
                display.innerHTML = z;
                break;
            case "-":
                z = Number(x)-Number(y);
                display.innerHTML = z;
                break;
            case "+":
                z = Number(x)+Number(y);
                display.innerHTML = z;
                break;
        }
    });
}