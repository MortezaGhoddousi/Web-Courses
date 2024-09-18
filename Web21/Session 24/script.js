window.onload = function () {
    var submitbtn = document.querySelector('form input[type="submit"]');
    submitbtn.addEventListener("click", function (e) {
        e.preventDefault();
        var inputs = document.querySelectorAll("form input");
        var counter = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "") {
                var parent = inputs[i].parentNode;
                pError = parent.lastElementChild;
                pError.innerHTML = "This field must be filled!";
                counter++;
            } else {
                var parent = inputs[i].parentNode;
                pError = parent.lastElementChild;
                pError.innerHTML = "";
            }
        }
        if (counter == 0) {
            window.location.href = "main.html";
        }
    });
};
