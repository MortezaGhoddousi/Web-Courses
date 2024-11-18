<?php

// echo $_SERVER["PHP_SELF"];

$errors = array("username" => '', "password1" => '', "password2" => '', "email" => '', "total" => '');
$pattern = "/^[a-zA-Z0-9_]+$/";
if ($_SERVER["PHP_SELF"] == "/web24/Session 21/signup.php") {
    if(isset($_POST['submit'])) {
        if (empty($_POST['username'])) {
            $errors["username"] = "<p style='color:red;'>USERNAME REQUIRED!</p>";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)){
                $errors["username"] = "<p style='color:red;'>USERNAME MUST BE JUST ALPHA-NUMERIC CHARACHTERS AND UNDERSCORE!</p>";
            }
        }

        if (empty($_POST['password1'])) {
            $errors["password1"] = "<p style='color:red;'>PASSWORD REQUIRED!</p>";
        }
        else {
            $password1 = $_POST['password1'];
            if (empty($_POST['password2'])) {
                $errors["password2"] = "<p style='color:red;'>PASSWORD REQUIRED!</p>";
            }
            else {
                $password2 = $_POST['password2'];
                if ($password1 != $password2) {
                    $errors["password1"] = "<p style='color:red;'>PASSWORD MUST BE SAME!</p>";
                    $errors["password2"] = "<p style='color:red;'>PASSWORD MUST BE SAME!</p>";
                }
            }
        }

        if (empty($_POST['password2'])) {
            $errors["password2"] = "<p style='color:red;'>PASSWORD REQUIRED!</p>";
        }


        if (empty($_POST['email'])) {
            $errors["email"] = "<p style='color:red;'>EMAIL REQUIRED!</p>";
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors["email"] = "<p style='color:red;'>EMAIL MUST BE IN A CORRECT WAY!</p>";
            }

        }

        if (array_filter($errors)) {
            $errors["total"] = "<p style='color:red;'>THERE ARE SOME PROBLEMS ON YOUR FORM</p>";
        }
        else {
            header("Location: index.php");
        }

    }
}

if ($_SERVER["PHP_SELF"] == "/web24/Session 21/login.php") {
    
}

if ($_SERVER["PHP_SELF"] == "/web24/Session 21/index.php") {
    
}

?>