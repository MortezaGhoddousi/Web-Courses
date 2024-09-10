// ScrollReveal().reveal('.heading', {delay: 1000});

// ScrollReveal().reveal('p', {distance: '150%', origin: 'top'})
// ScrollReveal().reveal('nav li:nth-child(1)', {distance: '150%', origin: 'right', delay: 1000})
// ScrollReveal().reveal('nav li:nth-child(2)', {distance: '150%', origin: 'right', delay: 2000})
// ScrollReveal().reveal('nav li:nth-child(3)', {distance: '150%', origin: 'right', delay: 3000})
// ScrollReveal().reveal('nav li:nth-child(4)', {distance: '150%', origin: 'right', delay: 4000})

var btns = document.querySelectorAll("button");
var sections = document.querySelectorAll("section");
var p = document.querySelectorAll("section p");

// 0 => rock  1 => paper  2 => scissors
var bot = Math.round(Math.random() * 2);

btns.forEach(function (el) {
    el.addEventListener("click", function (e) {
        var u = e.target.innerHTML;
        if (u == 'rock' && bot == 0) {
            p[0].innerHTML = 'Bot chosen: rock'
            p[1].innerHTML = 'Draw';
        }
        if (u == 'paper' && bot == 1) {
            p[0].innerHTML = 'Bot chosen: paper'
            p[1].innerHTML = 'Draw';
        }
        if (u == 'scissors' && bot == 2) {
            p[0].innerHTML = 'Bot chosen: scissors'
            p[1].innerHTML = 'Draw';
        }
        if (u == 'rock' && bot == 1) {
            p[0].innerHTML = 'Bot chosen: paper'
            p[1].innerHTML = 'Bot Won';
        }
        if (u == 'rock' && bot == 2) {
            p[0].innerHTML = 'Bot chosen: scissors'
            p[1].innerHTML = 'You Won';
        }
        if (u == 'paper' && bot == 2) {
            p[0].innerHTML = 'Bot chosen: scissors'
            p[1].innerHTML = 'Bot Won';
        }
        if (u == 'paper' && bot == 0) {
            p[0].innerHTML = 'Bot chosen: rock'
            p[1].innerHTML = 'You Won';
        }
        if (u == 'scissors' && bot == 0) {
            p[0].innerHTML = 'Bot chosen: rock'
            p[1].innerHTML = 'Bot Won';
        }
        if (u == 'scissors' && bot == 1) {
            p[0].innerHTML = 'Bot chosen: paper'
            p[1].innerHTML = 'You Won';
        }
    });
});
