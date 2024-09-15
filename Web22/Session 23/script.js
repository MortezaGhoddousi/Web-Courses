window.onload = function () {
    var td = document.querySelectorAll("td");
    var turn = true;

    counter = 0;
    td.forEach(function (el) {
        el.addEventListener("click", function (e) {
            if (turn) {
                e.target.innerHTML = "X";
                turn = !turn;
                if (checkWin(td)) {
                    alert(checkWin(td));
                    window.location.reload();
                } else {
                    counter++;
                }
                if (counter > 8) {
                    alert("draw");
                    window.location.reload();
                }
            } else {
                e.target.innerHTML = "O";
                turn = !turn;
                if (checkWin(td)) {
                    alert(checkWin(td));
                    window.location.reload();
                } else {
                    counter++;
                }
                if (counter > 8) {
                    alert("draw");
                    window.location.reload();
                }
            }
        });
    });
};

function checkWin() {
    var td = document.querySelectorAll("td");
    for (var i = 0; i < 3; i++) {
        if (
            td[3 * i].innerHTML == td[3 * i + 1].innerHTML &&
            td[3 * i].innerHTML == td[3 * i + 2].innerHTML &&
            td[3 * i].innerHTML == "X"
        ) {
            return "X Won";
        }
        if (
            td[3 * i].innerHTML == td[3 * i + 1].innerHTML &&
            td[3 * i].innerHTML == td[3 * i + 2].innerHTML &&
            td[3 * i].innerHTML == "O"
        ) {
            return "O Won";
        }
        if (
            td[i].innerHTML == td[i + 3].innerHTML &&
            td[i].innerHTML == td[i + 6].innerHTML &&
            td[i].innerHTML == "X"
        ) {
            return "X Won";
        }
        if (
            td[i].innerHTML == td[i + 3].innerHTML &&
            td[i].innerHTML == td[i + 6].innerHTML &&
            td[i].innerHTML == "O"
        ) {
            return "O Won";
        }
    }
    if (
        td[0].innerHTML == td[4].innerHTML &&
        td[0].innerHTML == td[8].innerHTML &&
        td[0].innerHTML == "X"
    ) {
        return "X Won";
    }
    if (
        td[0].innerHTML == td[4].innerHTML &&
        td[4].innerHTML == td[8].innerHTML &&
        td[0].innerHTML == "O"
    ) {
        return "O Won";
    }
    if (
        td[2].innerHTML == td[4].innerHTML &&
        td[2].innerHTML == td[6].innerHTML &&
        td[2].innerHTML == "X"
    ) {
        return "X Won";
    }
    if (
        td[2].innerHTML == td[4].innerHTML &&
        td[2].innerHTML == td[6].innerHTML &&
        td[2].innerHTML == "O"
    ) {
        return "O Won";
    }
    return false;
}
