var body = document.querySelector('body');

// Header
var header = document.createElement('header');


// Brand
var brand = document.createElement('a');
brand.innerHTML = 'Brand';
brand.href = 'header.html';

//Navigation
var nav = document.createElement('nav');
var ul = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var a1 = document.createElement('a');
var a2 = document.createElement('a');
var a3 = document.createElement('a');

a1.innerHTML = 'Home';
a2.innerHTML = 'About';
a3.innerHTML = 'Contact';
a1.href = 'home.html';
a2.href = 'about.html';
a3.href = 'contact.html';

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
nav.appendChild(ul);

// Forms

var div = document.createElement('div');
var signup = document.createElement('button');
var login = document.createElement('button');

signup.innerHTML = 'Signup';
login.innerHTML = 'Login';

div.appendChild(signup);
div.appendChild(login);

header.appendChild(brand);
header.appendChild(nav);
header.appendChild(div);

body.appendChild(header);

// Styling

header.style.display = 'flex';
header.style.flexDirection = 'row';
header.style.justifyContent = 'space-around';
header.style.alignItems = 'center';
header.style.position = 'fixed';
header.style.width = '100%';
header.style.top = '0';
header.style.left = '0';
header.style.background = 'gray';
header.style.color = 'white';

brand.style.textDecoration = 'none';
brand.style.fontSize = '28px';
brand.style.fontWeight = 'bold';
brand.style.textTransform = 'uppercase';
brand.style.color = 'white';

ul.style.display = 'flex';
ul.style.flexDirection = 'row';
ul.style.justifyContent = 'space-around';
ul.style.alignItems = 'center';
ul.style.gap = '20px';
ul.style.listStyle = 'none';

a1.style.fontWeight = 'bold';
a1.style.textTransform = 'uppercase';
a1.style.color = 'white';
a1.style.textDecoration = 'none';

a2.style.fontWeight = 'bold';
a2.style.textTransform = 'uppercase';
a2.style.color = 'white';
a2.style.textDecoration = 'none';

a3.style.fontWeight = 'bold';
a3.style.textTransform = 'uppercase';
a3.style.color = 'white';
a3.style.textDecoration = 'none';