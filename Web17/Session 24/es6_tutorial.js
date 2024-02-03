window.onload = function() {
    var a = 5;
    const fname = 'morteza';
    let c = 15;

    const log = console.log;

    for (var i = 0; i < 2; i++) {
        console.log(i);
    }
    console.log(i);

    for (let j = 0; j < 2; j++) {
        console.log(j);
    }
    // console.log(j);


    console.log('value of a is: ' + a + ' and the end');

    log(`the value of a is ${a} and the end`);

    var myarr = ['morteza', 'Hossein', 'Amirhossein'];

    for (let i = 0; i < myarr.length; i++) {
        log(myarr[i]);
    }

    myarr.forEach(function(e) {
        log(e);
    })

    for (let i of myarr) {
        log(i);
    }

    for (let i in myarr) {
        log(myarr[i]);
    }

    var myobj = {
        fname: 'Morteza',
        lname: 'Ghoddousi',
        age: 29
    };

    for (let i in myobj) {
        log(i);
        log(myobj[i]);
    }

    function sayHello(fname) {
        log(`Hello ${fname}`);
    }

    sayHello('Morteza');

    const sayBye = function(lname) {
        log(`Bye ${fname}`);
    }

    sayBye('Ghoddousi');

    const sayMorning = age => {
        log(`Morning ${age}`);
    }

    sayMorning(29);



}