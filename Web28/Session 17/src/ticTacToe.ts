let tableData: NodeListOf<Element> = document.querySelectorAll("table tr td");

let h1: Element = document.querySelector("#turn");

var turn: boolean = true;

const checkWinner = (tableData: NodeListOf<Element>): boolean => {
    for (let i: number = 0; i < 3; i++) {
        if (
            tableData[i * 3 + 0].innerHTML == tableData[i * 3 + 1].innerHTML &&
            tableData[i * 3 + 0].innerHTML == tableData[i * 3 + 2].innerHTML &&
            tableData[i * 3 + 0].innerHTML == "X"
        ) {
            return confirm("player 1 won");
        }
        if (
            tableData[i * 3 + 0].innerHTML == tableData[i * 3 + 1].innerHTML &&
            tableData[i * 3 + 0].innerHTML == tableData[i * 3 + 2].innerHTML &&
            tableData[i * 3 + 0].innerHTML == "O"
        ) {
            return confirm("player 2 won");
        }

        if (
            tableData[i].innerHTML == tableData[i + 3].innerHTML &&
            tableData[i].innerHTML == tableData[i + 6].innerHTML &&
            tableData[i].innerHTML == "X"
        ) {
            return confirm("player 1 won");
        }
        if (
            tableData[i].innerHTML == tableData[i + 3].innerHTML &&
            tableData[i].innerHTML == tableData[i + 6].innerHTML &&
            tableData[i].innerHTML == "O"
        ) {
            return confirm("player 2 won");
        }
    }

    if (
        tableData[0].innerHTML == tableData[4].innerHTML &&
        tableData[0].innerHTML == tableData[8].innerHTML &&
        tableData[0].innerHTML == "X"
    ) {
        return confirm("player 1 won");
    }
    if (
        tableData[0].innerHTML == tableData[4].innerHTML &&
        tableData[0].innerHTML == tableData[8].innerHTML &&
        tableData[0].innerHTML == "O"
    ) {
        return confirm("player 2 won");
    }

    if (
        tableData[2].innerHTML == tableData[4].innerHTML &&
        tableData[2].innerHTML == tableData[6].innerHTML &&
        tableData[2].innerHTML == "X"
    ) {
        return confirm("player 1 won");
    }
    if (
        tableData[2].innerHTML == tableData[4].innerHTML &&
        tableData[2].innerHTML == tableData[6].innerHTML &&
        tableData[2].innerHTML == "O"
    ) {
        return confirm("player 2 won");
    }
};

tableData.forEach((td) => {
    td.addEventListener("click", (e) => {
        if (turn) {
            if (e.target.innerHTML == "") {
                e.target.innerHTML = "X";
                h1.innerHTML = "Player 2";
                turn = !turn;
                setTimeout(() => {
                    if (checkWinner(tableData)) {
                        tableData.forEach(function (t) {
                            t.innerHTML = "";
                            turn = true;
                            h1.innerHTML = "Player 1";
                        });
                    }
                }, 10);
            } else {
                alert("choose another cell");
            }
        } else {
            if (e.target.innerHTML == "") {
                e.target.innerHTML = "O";
                h1.innerHTML = "Player 1";
                turn = !turn;
                setTimeout(() => {
                    if (checkWinner(tableData)) {
                        tableData.forEach(function (t) {
                            t.innerHTML = "";
                            turn = true;
                            h1.innerHTML = "Player 1";
                        });
                    }
                }, 10);
            } else {
                alert("choose another cell");
            }
        }
    });
});
