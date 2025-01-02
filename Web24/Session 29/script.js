window.onload = () => {
    // var myObject = {
    //     fname: "Morteza",
    //     lname: "Ghoddousi",
    //     age: 30,
    //     addAge: (age) => {
    //         return age + 1;
    //     },
    // };

    // console.log(myObject);
    // myObject.age = myObject.addAge(myObject.age);
    // console.log(myObject);

    // var mahtab = { ...myObject, fname: "Mahtab", lname: "Asadi", age: 20 };
    // console.log(mahtab);
    // mahtab.age = mahtab.addAge(mahtab.age);
    // console.log(mahtab);

    // var myObject = function (fname, lname, age) {
    //     this.fname = fname;
    //     this.lname = lname;
    //     this.age = age;

    //     this.addAge = () => {
    //         this.age++;
    //     };
    // };

    // var morteza = new myObject("Morteza", "Ghoddousi", 30);
    // var mahtab = new myObject("Mahtab", "Asadi", 20);

    // console.log(morteza);
    // morteza.addAge();
    // console.log(morteza);

    // console.log(mahtab);
    // mahtab.addAge();
    // console.log(mahtab);

    var d = new Date();
    // console.log(d.getHours());
    // console.log(d.getMinutes());
    // console.log(d.getSeconds());

    var p = document.querySelector("article #clock");

    setInterval(() => {
        var d = new Date();
        p.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
    }, 1000);

    var btn = document.querySelector("button");

    var check = true;
    btn.addEventListener("click", (e) => {
        if (check) {
            check = !check;
            document.documentElement.style.setProperty("--bg", "white");
            document.documentElement.style.setProperty("--text", "gray");
            e.target.innerHTML = "dark";
        } else {
            check = !check;
            document.documentElement.style.setProperty("--bg", "gray");
            document.documentElement.style.setProperty("--text", "white");
            e.target.innerHTML = "light";
        }
    });

    if (d.getHours() >= 16 || d.getHours() < 6) {
        document.documentElement.style.setProperty("--bg", "gray");
        document.documentElement.style.setProperty("--text", "white");
        btn.innerHTML = "light";
    } else {
        document.documentElement.style.setProperty("--bg", "white");
        document.documentElement.style.setProperty("--text", "gray");
        btn.innerHTML = "dark";
    }

    var link = document.querySelector("a");
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "wwww.google.com";
    });
};
