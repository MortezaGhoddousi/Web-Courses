function passGenerator(obj){
    var length = obj.Length;
    var upper = obj.Upper;
    var lower = obj.Lower;
    var number = obj.Number;
    var symbol = obj.Symbol;

    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (upper && !lower && !number && !symbol){
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    else if (!upper && lower && !number && !symbol) {
        str = 'abcdefghijklmnopqrstuvwxyz';
    }
    else if (!upper && !lower && number && !symbol) {
        str = '0123456789';
    }
    else if (!upper && !lower && !number && symbol){
        str = '!@#$%^&*';
    }
    else if (upper && lower && !number && !symbol){
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    else if (upper && !lower && number && !symbol) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }
    else if (upper && !lower && !number && symbol) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
    }
    else if (!upper && lower && number && !symbol) {
        str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    }
    else if (!upper && lower && !number && symbol) {
        str = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*';
    }
    else if (!upper && !lower && number && symbol) {
        str = '0123456789!@#$%^&*';
    }
    else if (upper && lower && number && !symbol) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    else if (upper && lower && !number && symbol) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*';
    }
    else if (upper && !lower && number && symbol) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    }
    else if (upper && lower && number && symbol) {
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    }

    var pass = '';
    for (var i=0; i<length; i++){
        var char = Math.floor(Math.random()*str.length+1);
        pass += str.charAt(char);
    }

    return pass;

}

var passbox = document.querySelector('.Password span');
var range = document.querySelector('input[name="range"]');
var upper = document.querySelector('input[name="upper"]');
var lower = document.querySelector('input[name="lower"]');
var number = document.querySelector('input[name="number"]');
var symbol = document.querySelector('input[name="symbol"]');
var submitbtn = document.querySelector('input[name="submit"]');
var l = document.querySelector('.l');

range.addEventListener('change', function(){
    l.innerHTML = range.value;
})



submitbtn.addEventListener('click', function(){
    var obj = {
        Length: range.value,
        Upper: upper.checked,
        Lower: lower.checked,
        Number: number.checked,
        Symbol: symbol.checked
    }

    var password = passGenerator(obj);
    passbox.innerHTML = password;
    
})


