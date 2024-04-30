<?php


$pattern = "/^[a-zA-Z]\w*$/";

$errorsignup = array('user'=>'', 'pass'=>'', 'email'=>'', 'total'=>'');

if (isset($_POST['submit-signup'])){
    
    // USERNAME 
    if (empty($_POST['user-signup'])){
        $errorsignup['user'] = "USERNAME REQUIRED!";
    }
    else {
        $usersignup = $_POST['user-signup'];
        if (!preg_match($pattern, $usersignup)){
            $errorsignup['user'] = "USERNAME MUST BE INCLUDED JUST ALPHA-NUMERIC CHARACTERS!";
        }
    }


    // PASSWORD 
    if (empty($_POST['password-signup'])){
        $errorsignup['pass'] = "PASSWORD REQUIRED!";
    }
    else {
        $passsignup = $_POST['password-signup'];
        if (!preg_match($pattern, $passsignup)){
            $errorsignup['pass'] = "PASSWORD MUST BE INCLUDED JUST ALPHA-NUMERIC CHARACTERS!";
        }
    }


    // EMAIL 
    if (empty($_POST['email-signup'])){
        $errorsignup['email'] = "EMAIL REQUIRED!";
    }
    else {
        $emailsignup = $_POST['email-signup'];
    }


    // CHECKING ERRORS 
    if (array_filter($errorsignup)){
        $errorsignup['total'] = 'THERE ARE SOME ERRORS IN YOUR FORM!';       
    }
    else {
        header("Location: login.php");
    }
}


$errorlogin = array('user'=>'', 'pass'=>'', 'total'=>'');

if (isset($_POST['submit-login'])){

    // USERNAME 
    if (empty($_POST['user-login'])){
        $errorlogin['user'] = "USERNAME REQUIRED!";
    }
    else {
        $userlogin = $_POST['user-login'];
        if (!preg_match($pattern, $userlogin)){
            $errorlogin['user'] = "USERNAME MUST BE INCLUDED JUST ALPHA-NUMERIC CHARACTERS!";
        }
    }


    // PASSWORD 
    if (empty($_POST['password-login'])){
        $errorlogin['pass'] = "PASSWORD REQUIRED!";
    }
    else {
        $passlogin = $_POST['password-login'];
        if (!preg_match($pattern, $passlogin)){
            $errorlogin['pass'] = "PASSWORD MUST BE INCLUDED JUST ALPHA-NUMERIC CHARACTERS!";
        }
    }


    // CHECKING ERRORS 
    if (array_filter($errorlogin)){
        $errorlogin['total'] = 'THERE ARE SOME ERRORS IN YOUR FORM!';       
    }
    else {
        header("Location: index.php");
    }
}





?>