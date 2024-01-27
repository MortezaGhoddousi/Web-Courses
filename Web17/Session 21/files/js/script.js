// $(document).ready(function(){
//     // $('a').click(function(event){
//     //     alert('clicked me');
//     //     event.preventDefault();
//     // })
//     $('a').on('click', function(e){
//         e.preventDefault();
//         alert('clicked me');
//     })
// });

// window.onload = function (){
//     var a = document.querySelector('button');
//     // a.addEventListener('click', function(e){
//     //     alert ('clicked me')
//     //     e.preventDefault();
//     // })
//     a.onclick = function(event){
//         alert ('clicked me')
//         event.preventDefault();
//     }
// }

// var a = document.querySelector('a');
// setTimeout(function(){
//     a.classList.add('abold');
// }, 3000);
// setTimeout(function(){
//     a.classList.remove('abold');
// }, 6000);

$(document).ready(function(){

    // var pos = 0;
    // var t = setInterval(function(){
    //     $('a').css({
    //         position: 'relative',
    //         left: pos+'px'
    //     })
    //     pos+=10;
    //     if (pos == 100) {
    //         clearInterval(t);
    //     }
    // }, 500);

    $('a').click(function(e){
        e.preventDefault();
        $(this).hide('slow');
    })


    setTimeout(function(){
        $("a").addClass('abold');
    }, 3000);

    setTimeout(function(){
        $("a").removeClass('abold');
    },6000);


})