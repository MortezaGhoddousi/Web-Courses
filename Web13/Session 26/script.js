window.onload = () => {

    var button = document.querySelector("#togglebut");

    console.log(button);
    var check = true;
    button.addEventListener("click", () => {
        // // // First example
        // if (check) {
        //     var body = document.querySelector("body");
        //     console.log(check);
        //     body.style.backgroundImage = "linear-gradient(#FFFFF7, #A3A398)";
        //     check = false;
        // } else {
        //     var body = document.querySelector("body");
        //     body.style.backgroundImage = "linear-gradient(#CB997E, #6B705C)";
        //     check = true;
        // }

        // // // Second example
        // if (check) {
        //     var body = document.querySelector("body");
        //     body.id = "darkmode";
        //     console.log(body);
        //     check = false;
        // } else {
        //     var body = document.querySelector("body");
        //     body.id = "lightmode";
        //     console.log(body);
        //     check = true;
        // }

        // // // Third example
        // if (check) {
        //     var body = document.querySelector("body");
        //     body.classList.add("darkmode");
        //     check = false;
        // } else {
        //     var body = document.querySelector("body");
        //     body.classList.remove("darkmode");
        //     check = true;
        // }

        // // // Forth example
        var body = document.querySelector("body");
        body.classList.toggle("darkmode");

        if (check) {
            var i = document.querySelector("#togglebut i");
            console.log(i);
            i.classList.remove("bx bxs-moon");
            i.classList.add("bx bxs-sun");

        }

    })

}