let tableData = document.querySelectorAll("table tr td");
tableData.forEach((td) => {
    td.addEventListener("click", (e) => {
        e.target.innerHTML = "X";
    });
});
//# sourceMappingURL=ticTacToe.js.map