window.onload = function(){
    const log = console.log;
    var body = document.querySelector('body');
    var td = document.querySelectorAll('td');

    var numbers = [];
    var Difficulty = 50;
    for (let i=0; i<Difficulty; i++){
        numbers.push(Math.floor((Math.random()*9)+1));
    }

    var places = [];
    for (let i=0; i<Difficulty; i++){
        places.push(Math.floor((Math.random()*80)+0));
    }

    for (let i=0; i<Difficulty; i++){
        var el = td[places[i]];
        var span = el.childNodes;
        span[0].innerHTML = numbers[i];
    }

    checkUniqeness_row();
    checkUniqeness_col();
    checkUniqeness_box();
    

    td.forEach((el)=>{
        el.addEventListener('click', ()=>{
            var t = el.className;
            var position = t.match(/\d+/g);
            var inputs = prompt('Enter the number');
            var span = el.childNodes;
            if (Number(inputs)>0 && Number(inputs)<10 && Number.isInteger(Number(inputs))){
                var result = checkUniqeness_input(position, Number(inputs));
                // log(result);
                if (!result){
                    span[0].innerHTML = inputs;
                }
            }
        })
    })

    
}

const checkUniqeness_row = ()=>{
    const log = console.log;
    for (let row=1; row<=9; row++){
        var td = document.querySelectorAll(`.row-${row}`);
        for (let i=0; i<9; i++){
            var span = td[i].childNodes;
            x = span[0].innerHTML;
            for (let j=i+1; j<9; j++){
                span = td[j].childNodes;
                y = span[0].innerHTML;
                if (x==y){
                    span[0].innerHTML = '';
                }
            }
        }
    }
}

const checkUniqeness_col = ()=>{
    const log = console.log;
    for (let col=1; col<=9; col++){
        var td = document.querySelectorAll(`.col-${col}`);
        for (let i=0; i<9; i++){
            var span = td[i].childNodes;
            x = span[0].innerHTML;
            for (let j=i+1; j<9; j++){
                span = td[j].childNodes;
                y = span[0].innerHTML;
                if (x==y){
                    span[0].innerHTML = '';
                }
            }
        }
    }
}

const checkUniqeness_box = ()=>{
    const log = console.log;
    for (let box=1; box<=9; box++){
        var td = document.querySelectorAll(`.box-${box}`);
        for (let i=0; i<9; i++){
            var span = td[i].childNodes;
            x = span[0].innerHTML;
            for (let j=i+1; j<9; j++){
                span = td[j].childNodes;
                y = span[0].innerHTML;
                if (x==y){
                    span[0].innerHTML = '';
                }
            }
        }
    }
}

const checkUniqeness_input = (position, input)=>{
    const log = console.log;
    var row = Number(position[0]);
    var td = document.querySelectorAll(`.row-${row}`);
    row--;
    for (let j=1; j<9; j++){
        if (row!=j){
            span = td[j-1].childNodes;
            y = Number(span[0].innerHTML);   
            if (input==y){
                return true;
            }
        }
    }
    

    var col = Number(position[1]);
    var td = document.querySelectorAll(`.col-${col}`);
    col--;
    for (let j=1; j<9; j++){
        if (col!=j){
            span = td[j-1].childNodes;
            y = Number(span[0].innerHTML);   
            if (input==y){
                return true;
            }
        }
    }

    var box = Number(position[2]);
    var td = document.querySelectorAll(`.box-${box}`);
    box--;
    for (let j=1; j<9; j++){
        if (box!=j){
            span = td[j-1].childNodes;
            y = Number(span[0].innerHTML);   
            if (input==y){
                return true;
            }
        }
    }

    return false;
}