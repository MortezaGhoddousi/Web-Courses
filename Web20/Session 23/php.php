<?php
session_start();

$error = array('username'=>'', 'password'=>'', 'repassword'=>'', 'email'=>'', 'total'=>'');

$pattern = '/^[a-zA-Z\w]+$/';
// checking signup page
if ($_SERVER['SCRIPT_FILENAME'] == 'C:/xampp/htdocs/Web20/Session 23/signup.php'){
    // checking submit button
    if (isset($_POST['submit'])){
        // username
        if (empty($_POST['username'])){
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            $_SESSION['username'] = $username;
            // checking pattern
            if (!preg_match($pattern, $username)){
                $error['username'] = "username must include alpha-numeric characters only!";
            }
        }

        // password
        if (empty($_POST['password'])){
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
            // checking pattern
            if (!preg_match($pattern, $password)){
                $error['password'] = "password must include alpha-numeric characters only!";
            }
        }
        

        // confirm password
        if (empty($_POST['repassword'])){
            $error['repassword'] = "Password required!";
        }
        else {
            $repassword = $_POST['repassword'];
            if ($password != $repassword){
                $error['password'] = 'Passwords are not match!';
                $error['repassword'] = 'Passwords are not match!';
            }
            // checking pattern
            if (!preg_match($pattern, $repassword)){
                $error['repassword'] = "password must include alpha-numeric characters only!";
            }
        }

        

        // email
        if (empty($_POST['email'])){
            $error['email'] = "Email required!";
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $error['email'] = 'email is not correct!';
            }
        }
        
        // checking errors
        if (array_filter($error)){
            $error['total'] = 'there are some errors on your code!';
        }
        else {
            $conn = mysqli_connect('localhost', 'web20', 'web20', 'web20db');
            if ($conn){
                $hashedPassword = hash('sha256', $password);
                $query = "INSERT INTO web20tb (username, password, email) VALUES ('$username', '$hashedPassword', '$email')";
                $result = mysqli_query($conn, $query);
                if ($result){
                    header('Location: index.php');
                }
            
            }
        }
    }
}

if ($_SERVER['SCRIPT_FILENAME'] == 'C:/xampp/htdocs/Web20/Session 23/index.php'){
    $username = $_SESSION['username'];
}

?>