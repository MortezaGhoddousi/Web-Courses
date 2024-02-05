window.onload = function() {
    var myArr = ['Clothes', 'Pants', 'Sockes', 'Shoes', 'Gloves', 'Ties'];
    var myClass = new makeBoxes(myArr);
    myClass.dispBoxes();
}

class makeBoxes {
    constructor(arr) {
        this.arr = arr;
    }

    createBoxed(x) {
        var row = document.querySelector('.row');

        var div1 = document.createElement('div');
        div1.className = 'col-xs-6 col-sm-3';

        var div2 = document.createElement('div');
        div2.className = 'panel panel-primary';

        var div3 = document.createElement('div');
        div3.className = 'panel-heading';

        var div4 = document.createElement('div');
        div4.className = 'panel-body';
        div4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium debitis.';

        var div5 = document.createElement('div');
        div5.className = 'panel-footer';

        var a = document.createElement('a');
        a.href = '';
        a.innerHTML = 'More info';


        div3.innerHTML = `<h1> ${x} </h1>`;
        div5.appendChild(a);
        div2.appendChild(div3);
        div2.appendChild(div4);
        div2.appendChild(div5);
        div1.appendChild(div2);
        row.appendChild(div1);
    }

    dispBoxes() {
        this.arr.map(element => {
            this.createBoxed(element);
        })
    }
}