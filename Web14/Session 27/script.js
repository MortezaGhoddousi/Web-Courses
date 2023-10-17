
window.onload = function(){
    var togglebtn = document.querySelector(".togglebtn"); 
    var mainbody = document.querySelector("body");
    togglebtn.addEventListener("click", function(e){
        e.preventDefault();
        mainbody.classList.toggle("light-mode");  
    });

    var d = new Date();
    var hour = d.getHours();
    if (hour<16){
        mainbody.classList.add("light-mode");
    }
    else {
        mainbody.classList.remove("light-mode");
    }
    console.log(hour);
}


