<?php

$pattern = "/^[a-zA-Z\w]+$/";

$errors = array('user'=>'', 'pass'=>'', 'email'=>'', 'total'=>'');

if (isset($_POST['submit'])){
    if (empty($_POST['user'])) {
        $errors['user'] = 'Username required!';
    }
    else {
        $user = $_POST['user'];
        if (!preg_match($pattern, $user)) {
            $errors['user'] = "Username must be just letters, numbers, and underscore!";
        }
    }

    if (empty($_POST['pass'])) {
        $errors['pass'] = 'Password required!';
    }
    else {
        $password = $_POST['pass'];
    }

    if (empty($_POST['email'])) {
        $errors['email'] = 'Email required!';
    }
    else {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $errors['email'] = 'Email must be in a correct form!';
        }
    }


    if (array_filter($errors)){
        $errors['total'] = 'There are some errors on form';
    }
    else {
        $conn = mysqli_connect('localhost', 'web23', 'web23', 'web23db');
        if ($conn) {
            $query = "INSERT INTO web23tb (username, password, email) VALUES ('$user', '$password', '$email')";

            $result = mysqli_query($conn, $query);

            if ($result) {
                header('Location: login.php');
            }
        }
    }
}

?>