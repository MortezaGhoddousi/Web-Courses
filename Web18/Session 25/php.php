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

        $conn = mysqli_connect('localhost', 'web18', 'web18', 'web18db');
        if ($conn){       
            //Inserting data into database
        
            $query = "INSERT INTO web18tb (user, pass, email) VALUES ('$usersignup', '$passsignup', '$emailsignup')";
            $result = mysqli_query($conn, $query);
        
            if ($result){
                $errorsignup['total'] = "Data has inserted into database successfully";
                header("Location: login.php");
            }       
        }

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

        $conn = mysqli_connect('localhost', 'web18', 'web18', 'web18db');

        if ($conn){
            //Getting data from database
            $query = "SELECT pass  FROM web18tb WHERE user='$userlogin'";

            $result = mysqli_query($conn, $query);
            $var = mysqli_fetch_all($result, MYSQLI_ASSOC);

            if (empty($var)){
                $errorlogin['total'] = 'USERNAME OR PASSWORD IS WRONG!'; 
            }
            else {
                if ($passlogin == $var[0]['pass']){
                    header("Location: index.php");
                }
                else {
                    $errorlogin['total'] = 'USERNAME OR PASSWORD IS WRONG!'; 
                }
            }

        }

    }
}

?>