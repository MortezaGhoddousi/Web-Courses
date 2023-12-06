window.onload = function(){
    var body = document.querySelector("body");
    var div = document.createElement("div");
    div.id = "Main";
    var table = document.createElement("table");
    table.style.borderCollapse = 'collapse';
    table.style.textAlign = 'center';

    var trs = new Array();
    for (var i=0; i<3; i++){
        trs[i] = document.createElement("tr");
    }

    var tds = new Array();
    for (var i=0; i<9; i++){
        tds[i] = document.createElement("td");
    }

    var counter = 0;
    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++){
            trs[i].appendChild(tds[counter]);
            counter++;
        }
    }

    for (var i=0; i<3; i++){
        table.appendChild(trs[i]);
    }

    for (var i=0; i<9; i++){
        tds[i].style.width = '50px';
        tds[i].style.height = "50px";
        tds[i].style.border = "2px solid black";
        tds[i].id = `td${i}`;
    }


    




    // var tr1 = document.createElement("tr");
    // var tr2 = document.createElement("tr");
    // var tr3 = document.createElement("tr");
    // var td1 = document.createElement("td");
    // var td2 = document.createElement("td");
    // var td3 = document.createElement("td");
    // var td4 = document.createElement("td");
    // var td5 = document.createElement("td");
    // var td6 = document.createElement("td");
    // var td7 = document.createElement("td");
    // var td8 = document.createElement("td");
    // var td9 = document.createElement("td");

    // tr1.appendChild(td1);
    // tr1.appendChild(td2);
    // tr1.appendChild(td3);
    // tr2.appendChild(td4);
    // tr2.appendChild(td5);
    // tr2.appendChild(td6);
    // tr3.appendChild(td7);
    // tr3.appendChild(td8);
    // tr3.appendChild(td9);


    // table.appendChild(tr1);
    // table.appendChild(tr2);
    // table.appendChild(tr3);

    // td1.style.width = "20px";
    // td1.style.height = "20px";
    // td1.style.border = "2px solid black";

    // td2.style.width = "20px";
    // td2.style.height = "20px";
    // td2.style.border = "2px solid black";

    // td3.style.width = "20px";
    // td3.style.height = "20px";
    // td3.style.border = "2px solid black";

    // td4.style.width = "20px";
    // td4.style.height = "20px";
    // td4.style.border = "2px solid black";

    // td5.style.width = "20px";
    // td5.style.height = "20px";
    // td5.style.border = "2px solid black";

    // td6.style.width = "20px";
    // td6.style.height = "20px";
    // td6.style.border = "2px solid black";

    // td7.style.width = "20px";
    // td7.style.height = "20px";
    // td7.style.border = "2px solid black";

    // td8.style.width = "20px";
    // td8.style.height = "20px";
    // td8.style.border = "2px solid black";

    // td9.style.width = "20px";
    // td9.style.height = "20px";
    // td9.style.border = "2px solid black";
    
    div.appendChild(table);
    body.appendChild(div);

    var turn = true;
    for (var i=0; i<9; i++){
        $(`#td${i}`).click(function(){
            if (turn){
                if ($(this).html() == ''){
                    $(this).html("X").css({
                        background: 'skyblue'
                    });
                    turn = !turn;
                    Check();
                }
            }
            else {
                if ($(this).html() == ''){
                    $(this).html("O").css({
                        background: 'brown'
                    });
                    turn = !turn;
                    Check();
                }
            }
        });  
    }

    function Check(){
        var h1 = document.createElement('h1');
        for (var i=0; i<3; i++){
            if (($(`#td${3*i+0}`).html() == $(`#td${3*i+1}`).html()) && ($(`#td${3*i+0}`).html() == $(`#td${3*i+2}`).html()) && ($(`#td${3*i+0}`).html() == 'X')){
                h1.innerHTML = ("Player X won");
            }
            if (($(`#td${3*i+0}`).html() == $(`#td${3*i+1}`).html()) && ($(`#td${3*i+0}`).html() == $(`#td${3*i+2}`).html()) && ($(`#td${3*i+0}`).html() == 'O')){
                h1.innerHTML = ("Player O won");
            }
            if (($(`#td${(3*i)-(2*i)}`).html() == $(`#td${((3*i)-(2*i))+3}`).html()) && ($(`#td${((3*i)-(2*i))}`).html() == $(`#td${((3*i)-(2*i))+6}`).html()) && ($(`#td${((3*i)-(2*i))}`).html() == 'X')){
                h1.innerHTML = ("Player X won");
            }
            if (($(`#td${((3*i)-(2*i))}`).html() == $(`#td${((3*i)-(2*i))+3}`).html()) && ($(`#td${((3*i)-(2*i))}`).html() == $(`#td${((3*i)-(2*i))+6}`).html()) && ($(`#td${((3*i)-(2*i))}`).html() == 'O')){
                h1.innerHTML = ("Player O won");
            }
        }
        if (($(`#td${0}`).html() == $(`#td${4}`).html()) && ($(`#td${0}`).html() == $(`#td${8}`).html()) && ($(`#td${0}`).html() == 'X')){
            h1.innerHTML = ("Player X won");
        }
        if (($(`#td${0}`).html() == $(`#td${4}`).html()) && ($(`#td${0}`).html() == $(`#td${8}`).html()) && ($(`#td${0}`).html() == 'O')){
            h1.innerHTML = ("Player O won");
        }
        if (($(`#td${2}`).html() == $(`#td${4}`).html()) && ($(`#td${2}`).html() == $(`#td${6}`).html()) && ($(`#td${2}`).html() == 'X')){
            h1.innerHTML = ("Player X won");
        }
        if (($(`#td${2}`).html() == $(`#td${4}`).html()) && ($(`#td${2}`).html() == $(`#td${6}`).html()) && ($(`#td${2}`).html() == 'O')){
            h1.innerHTML = ("Player O won");
        }
        body.appendChild(h1);
    }





    

    

}