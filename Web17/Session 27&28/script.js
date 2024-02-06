
window.onload = ()=>{
    var start_btn = document.querySelector('.btn-main');
    var cls = new dispScores();
    
    start_btn.addEventListener('click', ()=>{
        cls.num_stu();
        cls.check_Form().then(function(resolve){
            if (resolve) {
                var form = document.querySelector('form');
                form.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    var input = document.querySelector('form input[name="num"]');
                    var stuNum = input.value;
                    console.log(stuNum);
                    cls.removeInput();
                    cls.appInput(stuNum);
                    cls.takeValues();
                })
            }
        }, function(error){
            console.log(error);
        })
    })  
}

class dispScores {

    num_stu(){
        var main = document.querySelector('.jumbotron .container');
        var p = document.querySelector('.jumbotron .container p');
        var btn = document.querySelector('.btn-main');

        main.removeChild(btn);
        p.innerHTML = 'Please enter how many students do you have? ';

        var form = document.createElement('form');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var label1 = document.createElement('label');
        var label2 = document.createElement('label');
        var input = document.createElement('input');
        var submitBtn = document.createElement('input');

        div1.className = 'form-group';
        div2.className = 'form-group';

        label1.htmlFor = 'num';
        input.name = 'num';
        input.placeholder = 'Number of Students: ';
        input.type = 'text';
        input.className = 'form-control';



        label2.htmlFor = 'submit';
        submitBtn.name = 'submit';
        submitBtn.type = 'submit';
        submitBtn.className = 'btn btn-primary';

        // label1.className = 'sr-only';
        // label2.className = 'sr-only';

        label1.appendChild(input);
        label2.appendChild(submitBtn);

        div1.appendChild(label1);
        div2.appendChild(label2);

        form.appendChild(div1);
        form.appendChild(div2);

        main.appendChild(form);
    }

    removeInput(){
        var form = document.querySelector('.jumbotron .container form');
        var label = document.querySelectorAll('.jumbotron .container form div');
        label.forEach(element => {
            form.removeChild(element);
        }) 
    }

    createInput(i){
        var form = document.querySelector('.jumbotron .container form');
        var div = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        var count = i+1;
        label.htmlFor = 'num' + i;
        // label.className = 'sr-only';
        input.name = 'num' + i;
        input.placeholder = 'Score of Student ' + count;
        input.className = 'form-control';

        div.className = 'form-group';

        label.appendChild(input);
        div.appendChild(label);
        form.appendChild(div);
    }

    appInput(num_stu){
        var myList = [];
        for (var i=0; i<num_stu; i++){
            myList.push(i);
        }
        
        myList.map((e)=>{
            return this.createInput(e);
        });

        var form = document.querySelector('.jumbotron .container form');
        var label = document.createElement('label');
        var input = document.createElement('input');
        var div = document.createElement('div');
        div.className = 'form-group';
        label.htmlFor = 'submit';
        // label.className = 'sr-only';
        input.name = 'submit';
        input.type = 'submit';
        input.value = 'submit';
        input.id = 'submit';
        input.className = 'btn btn-primary';
        label.appendChild(input);
        div.appendChild(label);
        form.appendChild(div);
    }

    takeValues(){
        // var form = document.querySelector('form');
        var subBtn = document.querySelector('#submit');
        subBtn.addEventListener('click', ()=>{
            var inputs = document.querySelectorAll('.jumbotron .container form input');
            var myList = [];
            inputs.forEach(element =>{               
                if (element.name == 'submit'){
                    console.log(element.value);
                }
                else {
                    myList.push(element.value);
                }
            })
            this.myList = myList;
            console.log(this.myList);
            this.dispResult();
        })
    }

    dispResult(){

        var sum = 0;
        this.myList.forEach(e =>{
            e = Number(e);
            sum += e;
        })

        var average = sum/this.myList.length;
        var minNum = Math.min(...this.myList);
        var maxNum = Math.max(...this.myList);

        this.removeInput()
        var form = document.querySelector('.jumbotron .container form');
        var main = document.querySelector('.jumbotron .container');

        main.removeChild(form);

        var p1 = document.createElement('p');
        p1.innerHTML = 'The average of scores: ' + average;

        var p2 = document.createElement('p');
        p2.innerHTML = 'The Minimum of scores: ' + minNum;

        var p3 = document.createElement('p');
        p3.innerHTML = 'The Maximum of scores: ' + maxNum;

        main.appendChild(p1);
        main.appendChild(p2);
        main.appendChild(p3);
    }

    check_Form(){
        return new Promise(function(resolve, reject){
            var form = document.querySelector('.jumbotron .container form');
            if (form){
                resolve(true);
            }
            reject('Form cannot be created');
        })
    }
}


