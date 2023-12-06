// // Array

var names = new Array("Morteza", "Milad", "Yousef", "Keyvan");

console.log(names);

console.log(names[2]);

console.log(names.length);

for (var i = 0; i<names.length; i++){
    console.log(names[i]);
}

var Status = [];

Status["online"] = new Array("Morteza", "Milad");
Status["offline"] = new Array("Yousef");
Status["away"] = new Array("Keyvan");

console.log(Status.length);
console.log(Status["away"]);

// // Objects

var Obj = {
    online: new Array("Morteza", "Milad"),
    offline: new Array("Yousef"),
    away: new Array("Keyvan"),
    age: 29
}

console.log(Obj);
console.log(Obj.online);

var person = {
    firstname: "Morteza",
    lastname: "Ghoddousi",
    age: 29,
    gender: "Male",
    height: 185,
    weight: 88
}


var info = {
    username: "Morteza",
    password: 123,
    email: "m.g@gmail.com",
    // change: function(password){
    //     password: password;
    // }
}

// console.log(info.password);

// console.log(info.password);

// function changePass(password){
//     this.password = password;
// }

function Info (username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
    // this.change = changePass;
    this.changePass = function (password){
        this.password = password;
    };

    this.changeUser = function(user){
        this.username = user;
    }
}

var infoMorteza = new Info ("Morteza", 123, "m.g@yahoo.com");
console.log(infoMorteza.password);

var infoMilad = new Info ("Milad", 789, "m.v@yahoo.com");
console.log(infoMilad.password);

infoMorteza.changePass(159753);
console.log(infoMorteza.password);

infoMorteza.changeUser("ghoddousi");
console.log(infoMorteza.username);
console.log(infoMorteza);

console.log(Math.PI);

console.log(Math.sqrt(2));

var t = new Date();
console.log(t);

setInterval(function(){
    var body = document.querySelector("body");
    var t = new Date();
    var time = `${t.getHours()}: ${t.getMinutes()}: ${t.getSeconds()}   ${t.getUTCDay()}`
    body.innerHTML = time
}, 1000);
