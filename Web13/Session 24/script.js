// // // Adding element to the web page

// var body = document.querySelector("body");

// var section = document.createElement("section");
// // var node = document.createTextNode("Hello from JavaScript");
// var p = document.createElement("p");
// var node = document.createTextNode("Hello from JavaScript");

// p.appendChild(node);
// section.appendChild(p);

// body.appendChild(section);

// section.id = "main";
// body.style.backgroundColor = "gray";
// body.style.color = "white";

// // // Removing element to the web page after 3 seconds
// setTimeout(function() {
//     let section = document.querySelector("section");
//     let p = document.querySelector("p");
//     section.removeChild(p);
// }, 3000);

window.onload = () => {
    // // Creating Animation

    var body = document.querySelector("body");

    var section1 = document.createElement("section");
    var section2 = document.createElement("section");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");

    body.appendChild(section1);
    body.appendChild(section2);
    body.appendChild(button1);
    body.appendChild(button2);

    section1.style.width = "200px";
    section2.style.width = "20px";

    section1.style.height = "200px";
    section2.style.height = "20px";

    section1.style.backgroundColor = "Green";
    section2.style.backgroundColor = "red";

    section1.style.position = "absolute";
    section2.style.position = "relative";

    button1.style.position = "relative";
    button1.style.left = "250px";
    button1.innerHTML = "Click Me!";

    button2.style.position = "relative";
    button2.style.left = "350px";
    button2.innerHTML = "Click Me!";

    button1.onclick = () => {
        var move = 0;
        t = setInterval(() => {
            section2.style.left = `${move}px`;
            section2.style.top = `${move}px`;
            if (move >= 200 - 20) {
                clearInterval(t);
            }
            move++;
        }, 10)
    }

    // button.onclick = shownotif;


    function shownotif() {
        alert("Hello guys :) !");
    }

    button2.addEventListener("click", () => {
        var d = new Date;
        alert(`${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`);
        button2.removeEventListener("click", (click) => any);
    });
}