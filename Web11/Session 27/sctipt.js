// // Image Slider

// window.onload = function() {

//     var counter = 0;
//     var addressimages = new Array();
//     for (var i = 0; i < 3; i++) {
//         addressimages[i] = `./Images/${i}.jpg`;
//     }
//     // console.log(addressimages);

//     var image = document.querySelector("img");
//     image.style.width = "200px";

//     var nextbut = document.querySelector("#next");
//     var prebut = document.querySelector("#pre");

//     nextbut.onclick = function() {
//         counter++;
//         if (counter > addressimages.length - 1) {
//             counter = 0;
//         }
//         image.src = addressimages[counter];
//     }

//     prebut.onclick = function() {
//         counter--;
//         if (counter < 0) {
//             counter = addressimages.length - 1;
//         }
//         image.src = addressimages[counter];
//     }
// }


// // From Validation

// window.onload = function() {

//     var user = document.querySelector("input[type='text']");
//     var pass1 = document.querySelector("input[name='pass1']");
//     var pass2 = document.querySelector("input[name='pass2']");
//     var submit = document.querySelector("input[type='submit']");
//     var form = document.querySelector("form");
//     form.addEventListener("click", function(event) {
//         event.preventDefault()
//     });

//     submit.onclick = function() {
//         var check = true;
//         if (user.value == '') {
//             console.log("UserName required");
//             check = false;
//         }

//         if (pass1.value == '' || pass2.value == '') {
//             console.log("Password required");
//             check = false;
//         }


//         if (pass1.value != pass2.value) {
//             console.log("Password is not match");
//             check = false;
//         }

//         if (check) {
//             window.location.assign("main.html");
//         }
//     }
// }

// Changing theme

window.onload = function() {
    var check = true;
    var but = document.querySelector("#dark");
    console.log(but);
    but.addEventListener("click", () => {
        var mainbody = document.querySelector("body");
        console.log(mainbody);
        if (check) {
            mainbody.classList.remove("light");
            mainbody.classList.add("dark");
            check = false;
        } else {
            mainbody.classList.remove("dark");
            mainbody.classList.add("light");
            check = true;
        }


    })
}