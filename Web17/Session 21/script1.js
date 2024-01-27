function math(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.volume = function() {
        return this.width * this.height * this.length
    }
}

// Math Object
var cube = new math(4, 3, 2);
console.log(cube);
var volume = cube.volume()
console.log(volume);

console.log(Math.floor(-2.2));
console.log(Math.floor(Math.PI));

// Date Object 
var d = new Date();
console.log(d);


window.addEventListener('load', () => {
    var body = document.querySelector('body');
    var div = document.createElement('div');
    var p = document.createElement('p');
    div.appendChild(p);
    body.appendChild(div);
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.background = 'gray';
    div.style.color = 'white';
    div.style.fontWeight = 'bold';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    var d = new Date();
    p.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()} -- ${d.getFullYear()} / ${d.getMonth()+1} / ${d.getDate()}`;
    setInterval(() => {
        var d = new Date();
        p.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()} -- ${d.getFullYear()} / ${d.getMonth()+1} / ${d.getDate()}`;
    }, 1000);

    // DOCUMENT OBJECT MODEL (DOM)





})