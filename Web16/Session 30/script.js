const fs = require('fs');

window.onload = function(){
    var form = document.querySelector('.main form');
    form.onsubmit = function(event){
        event.preventDefault();
    }
    var submitbtn = document.querySelector('input[type="submit"]');
    submitbtn.addEventListener('click', function(){
        var user = document.querySelector("input[name='name']").value;
        var pass1 = document.querySelector("input[name='pass1']").value;
        var pass2 = document.querySelector("input[name='pass2']").value;
        var email = document.querySelector("input[name='email']").value;
        var div = document.querySelector('.errors');


        // function Obj(user, pass, email, total){
        //     this.user = user;
        //     this.pass = pass;
        //     this.email = email;
        //     this.total = total;
        // };

        var check_error = false;
        
        var error = [];
        if (user == ''){
            error['user'] = '<p>Username required</p>'
            check_error = true;
        }

        if (pass1 == ''){
            error['pass'] = '<p>Password required</p>'
            check_error = true;
        }

        if (email == ''){
            error['email'] = '<p>Email required</p>'
            check_error = true;
        }

        if (pass1 != pass2){
            error['total'] = '<p>Passwords must be match required</p>'
            check_error = true;
        }
        
        if (check_error){
            div.innerHTML = error['user']+error['pass']+error['email']+error['total'];
        }
        else {
            var inf = new Inf(user, pass1, email);
            // console.log(inf);
            
            var json = JSON.stringify(inf);
            fs.writeFileSync('data.json', json);

            // window.location.href = 'main.html';
        }

        

    });

    var btn = document.querySelector('.visibilitybtn');

    var check = true;
    btn.addEventListener('click', function(){
        if (check){
            var pass1 = document.querySelector("input[name='pass1']");
            var pass2 = document.querySelector("input[name='pass2']");
            pass1.type = 'text';
            pass2.type = 'text';
            btn.innerHTML = 'Hide Password';
            check = false;
        }
        else {
            var pass1 = document.querySelector("input[name='pass1']");
            var pass2 = document.querySelector("input[name='pass2']");
            pass1.type = 'password';
            pass2.type = 'password';
            btn.innerHTML = 'Show Password';
            check = true;
        }
    });

    var dark = true;
    var change = document.querySelector('.changeMode');
    change.addEventListener('click', function(){
        // if (dark){
        //     var body = document.querySelector('body');
        //     body.classList.remove('light');
        //     body.classList.add('dark');
        //     change.innerHTML = 'Light';
        //     dark = false;
        // }
        // else{
        //     var body = document.querySelector('body');
        //     body.classList.remove('dark');
        //     body.classList.add('light');
        //     change.innerHTML = 'Dark';
        //     dark = true;
        // }

        var body = document.querySelector('body');
        body.classList.toggle('dark');
    });
}


function Inf (user, pass, email){
    this.user = user;
    this.pass = pass;
    this.email = email;
}