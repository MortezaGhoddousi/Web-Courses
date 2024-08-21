<?php

$pattern = "/^[a-zA-Z0-9\s]+$/";

if ($_SERVER['PHP_SELF'] == "/web21/Session 17/login.php"){
    $error = array('username'=>'', 'password'=>'', 'total'=>'');
    
    if (isset($_POST['submit'])) {
    
        if(empty($_POST['username'])){
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            // if (!preg_match($pattern, $username)) {
            //     $error['username'] = "Username must include just alpha-numeric characters!";
            // }
        }
    
        if(empty($_POST['password'])){
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
        }
    
    
        if (array_filter($error)){
            $error['total'] = 'There are some errors on your form! try again ...';
        }
        else {
            $conn = mysqli_connect('localhost', 'web21', 'web21', 'web21db');
            if($conn) {
                $query = "SELECT * FROM web21tb WHERE username='$username' AND password='$password'";
                $result = mysqli_query($conn, $query);
                $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
                if (sizeof($var) > 0) {
                    $_SESSION['username'] = $var[0]['username'];
                    $_SESSION['password'] = $var[0]['password'];
                    $_SESSION['email'] = $var[0]['email'];
                    // header("Location: index.php");
                }
                
            }

        }   
    }
}
else if ($_SERVER['PHP_SELF'] == "/web21/Session 17/signup.php"){
    $error = array('username'=>'', 'password'=>'', 'email'=>'', 'total'=>'');
    
    if (isset($_POST['submit'])) {
    
        if(empty($_POST['username'])){
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)) {
                $error['username'] = "Username must include just alpha-numeric characters!";
            }
        }
    
        if(empty($_POST['password'])){
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
        }

        if(empty($_POST['email'])){
            $error['email'] = "Email required!";
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $error['email'] = "Email is not in a correct form!";
            }
        }
    
    
        if (array_filter($error)){
            $error['total'] = 'There are some errors on your form! try again ...';
        }
        else {
            $conn = mysqli_connect('localhost', 'web21', 'web21', 'web21db');
            if ($conn) {
                $query = "INSERT INTO web21tb (username, password, email) VALUES ('$username', '$password', '$email')";
                $result = mysqli_query($conn, $query);
                if($result) {
                    mysqli_close($conn);
                    header("Location: login.php");
                }
            }
        }   
    }
}


?>