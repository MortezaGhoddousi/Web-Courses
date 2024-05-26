window.onload = function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
    });

    document
        .querySelector('input[type="submit"]')
        .addEventListener("click", function (e) {
            var inputs = document.querySelectorAll(
                'input:not(input[type="submit"])'
            );
            console.log(inputs);

            var error = 0;

            inputs.forEach(function (tag) {
                if (tag.value == "") {
                    error++;
                }
            });
            console.log(error);
            if (error == 0) {
                window.location.href = "main.html";
            }
        });
};
