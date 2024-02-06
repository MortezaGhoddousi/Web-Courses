$(function(){

    $('[data-toggle="tooltip"]').tooltip();

    $('li').on('click', function(){
        $('li').removeClass('active');
        $(this).addClass('active');
    });
    $('.carousel').carousel({
        interval: 1000,
        pause: false,
        wrap: false,
        keyboard: true
    });
});