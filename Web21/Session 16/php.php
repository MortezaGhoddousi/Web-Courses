<?php 

$pattern = "/^[a-zA-Z\s]+$/";

if ($_SERVER['PHP_SELF'] == "/web22/Session 16/signup.php") {
    
    $error = array("username"=>'', 'password'=>'', 'email'=>'', 'total'=>'');
    
    if (isset($_POST['submit'])){   
        if (empty($_POST['username'])) {
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)){
                $error['username'] = "Username can only include alpha-numeric characters!";
            }
        }
    
        if (empty($_POST['password'])) {
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
        }
    
        if (empty($_POST['email'])) {
            $error['email'] = "Email required!";
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $error['email'] = "Email is not in correct shape!";
            }
        }
    
        if (array_filter($error)) {
            $error['total'] = "there are some errors on your sign up form!";
        }
        else {
            header("Location: login.php");
        }
    }
}
else if ($_SERVER['PHP_SELF'] == "/web22/Session 16/login.php"){
    
    $error = array("username"=>'', 'password'=>'', 'total'=>'');
    
    if (isset($_POST['submit'])){   
        if (empty($_POST['username'])) {
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)){
                $error['username'] = "Username can only include alpha-numeric characters!";
            }
        }
    
        if (empty($_POST['password'])) {
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
        }
    
    
        if (array_filter($error)) {
            $error['total'] = "there are some errors on your sign up form!";
        }
        else {
            $_SESSION['username'] = $username;
            $_SESSION['password'] = $password;
            header("Location: index.php");
        }
    }
}

?>