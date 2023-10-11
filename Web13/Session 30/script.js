var p = $("p");
console.log(p);

p.on("click", function() {
    $(this).css("color", "red").css("font-size", "28px");
})