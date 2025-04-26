window.onload = function () {
    var article = document.querySelectorAll("article");
    // article[0].onclick = function () {
    //     article[0].style.display = "none";
    // };

    function sayHello(name) {
        console.log(name);
    }

    sayHello("Morteza");

    var sayHello2 = function (name) {
        console.log(name);
    };

    sayHello2("Morteza");

    var sayHello3 = (name) => {
        console.log(name);
    };

    sayHello3("Morteza");

    class myClass {
        constructor(fName, lName, age, weight, height) {
            this.fName = fName;
            this.lName = lName;
            this.age = age;
            this.weight = weight;
            this.height = height;
        }

        addAge() {
            this.age++;
        }

        changeName(newFName, newLName) {
            this.fName = newFName;
            this.lName = newLName;
        }
    }

    var Morteza = new myClass("Morteza", "Ghoddousi", 31, 86, 1.86);
    console.log(Morteza);

    console.log(Morteza.fName);
    console.log(Morteza.lName);
    console.log(Morteza.age);

    Morteza.addAge();
    console.log(Morteza.age);

    Morteza.changeName("Ava", "Esmaeily");

    console.log(Morteza.fName);
    console.log(Morteza.lName);

    class mathOperators {
        sumNumbers(arr) {
            var s = 0;
            for (var i = 0; i < arr.length; i++) {
                s = s + arr[i];
            }
            return s;
        }

        averageNumbers(arr) {
            var s = this.sumNumbers(arr);
            return s / arr.length;
        }

        varNumbers(arr) {
            var avg = this.averageNumbers(arr);
            var s = 0;
            for (var i = 0; i < arr.length; i++) {
                s = s + (arr[i] - avg) ** 2;
            }
            return s / arr.length;
        }

        maxNumbers(arr) {
            var m = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > m) {
                    m = arr[i];
                }
            }
            return m;
        }

        minNumbers(arr) {
            var m = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] < m) {
                    m = arr[i];
                }
            }
            return m;
        }
    }

    var arr = [4, 14, 19, 8, 7.75, 15];
    var mo = new mathOperators();

    console.log(mo.sumNumbers(arr));
    console.log(mo.averageNumbers(arr));
    console.log(mo.varNumbers(arr));
    console.log(mo.maxNumbers(arr));
    console.log(mo.minNumbers(arr));

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    arr.forEach(function (number, index) {
        console.log(number, index);
    });

    var mappedArr = arr.map(function (number) {
        return `<h1>Price: ${number * 0.95}$</h1>`;
    });

    console.log(mappedArr);

    var filteredArr = arr.filter(function (number) {
        return number * 0.95 < 15;
    });

    console.log(filteredArr);

    var mappedArr = filteredArr.map(function (number) {
        return `<h1>Price: ${number * 0.95}$</h1> <button>shop now</button>`;
    });

    mappedArr.forEach(function (number, index) {
        article[0].innerHTML = article[0].innerHTML + number;
    });

    var btns = document.querySelectorAll("button");
    btns.forEach((element) => {
        // element.onclick = (e) => {
        //     console.log(e.target);
        // };

        element.addEventListener("click", (e) => {
            console.log(e.target);
            article[0].removeChild(e.target.previousElementSibling);
            article[0].removeChild(e.target);
        });
    });

    var link = document.querySelectorAll("a");
    link[0].addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "www.google.com";
    });
};
