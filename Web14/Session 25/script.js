window.onload = function(){
    var input1btn = document.querySelector("input[type='text']");
    var input2btn = document.querySelector("input[name='pass']");
    var input3btn = document.querySelector("input[name='pass1']");
    var input4btn = document.querySelector("input[type='email']");
    var submitbtn = document.querySelector("input[type='submit']");
    var form = document.querySelector("form");

    input1.onmouseover = function(){
        alert("Hello");
    }



    // // Form Validation

    // submitbtn.addEventListener("click", function(){
    //     // alert("submit btn clicked");
    //     var value1 = input1btn.value;
    //     var value2 = input2btn.value;
    //     var value3 = input3btn.value;
    //     var value4 = input4btn.value;
    //     if (value1 == "" || value2 == "" || value3 == "" || value4 == ""){
    //         alert("The form is not filled");
    //     }
    //     else {
    //         if (value2 != value3){
    //             alert("Your password must be sync");
    //         }
    //     }       
    // })
 
    form.addEventListener("submit", function(){
        var value1 = input1btn.value;
        var value2 = input2btn.value;
        var value3 = input3btn.value;
        var value4 = input4btn.value;
        if (value1 == "" || value2 == "" || value3 == "" || value4 == ""){
            alert("The form is not filled");
        }
        else {
            if (value2 != value3){
                alert("Your password must be sync");
            }
        }       
    })

  


}