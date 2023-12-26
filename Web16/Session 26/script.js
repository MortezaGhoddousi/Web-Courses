window.onload = function(){
    var h1 = document.querySelector('header h1');
    var nav = document.querySelector('header nav');
    var li = document.querySelectorAll('header li');

    li[0].addEventListener('click', function(){
        window.location.assign('index.html');
    })

    li[1].addEventListener('click', function(){
        window.location.assign('about.html');
    })

    var check = true;
    li[2].addEventListener('click', function(){
        // window.location.assign('contact.html');
        if (check){
            check = !check;
            var dp = document.querySelector('.dropdown');
            dp.style.display = 'block';
            dp.style.position = 'absolute';
            dp.style.right = '26vw';
        }
        else {
            check = !check;
            var dp = document.querySelector('.dropdown');
            dp.style.display = 'none';
            dp.style.position = 'absolute';
            dp.style.right = '26vw';
        }
        
    })



    h1.addEventListener('click', function(){
        window.location.assign('index.html');
    })
}