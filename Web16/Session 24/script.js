var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
var key = 60;

window.onload = ()=>{
    // const sel = document.querySelector;
    var body = document.querySelector('body');
    var pShow = document.querySelector('.show p');
    var encode = document.querySelector("input[name='encode']");
    var decode = document.querySelector("input[name='decode']");
    var break1 = document.querySelector("input[name='break']");
    var user = document.querySelector("input[type='text']");
    var message = document.querySelector('textarea');

    var errors = [];
    encode.addEventListener('click', ()=>{
        if (user.value == '' || message.value == ''){
            errors['total'] = 'Inputs required';
        }
        else {
            var encryptedText = '';
            var text = message.value;
            for (var letter of text){
                var indl = letters.indexOf(letter);
                indl += key;
                if (indl > letters.length-1){
                    indl -= letters.length;
                }
                var encl = letters.charAt(indl);
                encryptedText += encl;
            }
            pShow.innerHTML = encryptedText;
        }

    });

    decode.addEventListener('click', ()=>{
        if (user.value == '' || message.value == ''){
            errors['total'] = 'Inputs required';
        }
        else {
            var decryptedText = '';
            var text = message.value;
            for (var letter of text){
                var indl = letters.indexOf(letter);
                indl -= key;
                if (indl < 0){
                    indl += letters.length;
                }
                var decl = letters.charAt(indl);
                decryptedText += decl;
            }
            pShow.innerHTML = decryptedText;
        }
    });

    break1.addEventListener('click', ()=>{
        if (user.value == '' || message.value == ''){
            errors['total'] = 'Inputs required';
        }
        else {
            var decText = []
            for (var key=0; key<letters.length; key++){
                var decryptedText = '';
                var text = message.value;
                for (var letter of text){
                    var indl = letters.indexOf(letter);
                    indl -= key;
                    if (indl < 0){
                        indl += letters.length;
                    }
                    var decl = letters.charAt(indl);
                    decryptedText += decl;
                }
                decText[key] = decryptedText;
                console.log(decText[key]);

            }
        }
        // console.log(decText)
    });




}