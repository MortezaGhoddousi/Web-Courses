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

    

    log(numbers);
    log(places);

    for (let i=0; i<Difficulty; i++){
        var el = td[places[i]];
        var span = el.childNodes;
        span[0].innerHTML = numbers[i];
    }

    checkUniqeness();

    

    td.forEach((el)=>{
        el.addEventListener('click', ()=>{
            var inputs = prompt('Enter the number');
            var span = el.childNodes;
            // log(span[0].innerHTML);
            if (Number(inputs)>0 && Number(inputs)<10 && Number.isInteger(Number(inputs))){
                span[0].innerHTML = inputs;
            }
        })
    })
}

const checkUniqeness = ()=>{
    const log = console.log;
    var td = document.querySelectorAll('td');


    
    for(let h=0; h<9; h++){
        var counter = 0;
        for (let iter=0; iter<9; iter++){
            if(counter < 9){
                var span = td[h*9+counter].childNodes;
                x = span[0].innerHTML;
                log(`value of x is ${x}`);
                for (let j=counter+1; j<9; j++){
                    span = td[h*9+j].childNodes;
                    y = span[0].innerHTML;
                    log(`value of y is ${y}`);
                    if (x==y){
                        log(x==y);
                        span[0].innerHTML = '';
                    }
                }
                counter++;
            }
            else {
                counter = 0;
            }      
        }
    }
}