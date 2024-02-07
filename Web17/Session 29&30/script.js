window.onload = () => {
    check = true;
    var root = document.querySelector(':root');

    var btn = document.querySelector('.btn_theme');
    btn.addEventListener('click', () => {
        if (check) {
            check = !check;
            var i = document.querySelector('.btn_theme i');
            i.className = 'bx bx-sun';
            root.style.setProperty('--bgcolor', '#212121');
            root.style.setProperty('--textcolor', '#FFFFFF');
            root.style.setProperty('--secbgcolor', '#FF9800');
            root.style.setProperty('--maincolor', '#9C27B0');

            // var body = document.querySelector('body');
            // body.style.background = '#FFFFFF ';
            // body.style.color = '#333333  ';
        } else {
            check = !check;
            var i = document.querySelector('.btn_theme i');
            i.className = 'bx bx-moon';
            root.style.setProperty('--bgcolor', '#FFFFFF');
            root.style.setProperty('--textcolor', '#333333');
            root.style.setProperty('--secbgcolor', '#FFC107');
            root.style.setProperty('--maincolor', '#2196F3');



            // var body = document.querySelector('body');
            // body.style.background = '#212121';
            // body.style.color = '#FFFFFF ';
        }
    })

    var t = new Date();

    console.log(t.getHours());
    if (t.getHours() < 17) {
        var i = document.querySelector('.btn_theme i');
        i.className = 'bx bx-moon';
        root.style.setProperty('--bgcolor', '#FFFFFF');
        root.style.setProperty('--textcolor', '#333333');
        root.style.setProperty('--secbgcolor', '#FFC107');
        root.style.setProperty('--maincolor', '#2196F3');
    } else {
        var i = document.querySelector('.btn_theme i');
        i.className = 'bx bx-sun';
        root.style.setProperty('--bgcolor', '#212121');
        root.style.setProperty('--textcolor', '#FFFFFF');
        root.style.setProperty('--secbgcolor', '#FF9800');
        root.style.setProperty('--maincolor', '#9C27B0');
    }

}

// console.log();