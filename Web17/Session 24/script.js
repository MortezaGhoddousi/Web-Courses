window.onload = function() {
    // var image = document.querySelector('img');
    // var buttons = document.querySelectorAll('button');

    // var counter = 1;
    // image.src = './images/' + counter + '.jpg';
    // image.style.display = 'block';

    // buttons[0].addEventListener('click', function() {
    //     counter--;
    //     if (counter < 1) {
    //         counter = 4;
    //     }
    //     image.src = './images/' + counter + '.jpg';
    // });

    // buttons[1].addEventListener('click', function() {
    //     counter++;
    //     if (counter > 4) {
    //         counter = 1;
    //     }
    //     image.src = './images/' + counter + '.jpg';
    // });
    // console.log(buttons);

    // buttons.forEach(function(el) {
    //     el.addEventListener('click', function(e) {
    //         if (e.target.innerHTML == 'Next') {
    //             counter++;
    //             if (counter > 4) {
    //                 counter = 1;
    //             }
    //             image.src = './images/' + counter + '.jpg';
    //         } else {
    //             counter--;
    //             if (counter < 1) {
    //                 counter = 4;
    //             }
    //             image.src = './images/' + counter + '.jpg';
    //         }
    //     })
    // });

    var form = document.querySelector('form');

    function information(user, pass) {
        this.user = user;
        this.pass = pass;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var inputs = document.querySelectorAll('input');
        var err = false;
        inputs.forEach(function(e) {
            if (e.value == '') {
                alert('input required');
                err = true;
            }
        })

        if (!err) {
            var newinf = new information(inputs[0].value, inputs[1].value);
            console.log(newinf);
            inputs.forEach(function(e) {
                e.value = '';
            })
            window.location.href = 'main.html';
        }



    })

    console.log('end');
}