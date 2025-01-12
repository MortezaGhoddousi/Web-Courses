<?php

session_start();

$pattern = "/^[a-zA-Z0-9_]+$/";


if ($_SERVER['PHP_SELF'] === '/web25/Session 16/signup.php') {
    $error = array('username'=>'', 'password'=>'', 'ConfirmPassword'=>'', 'email'=>'', 'total'=>'');

    if (isset($_POST['submit'])) {
        if (empty($_POST['username'])) {
            $error['username'] = "username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)) {
                $error['username'] = "username must include alpha-numeric characters!";
            }
        }

        if (empty($_POST['password'])) {
            $error['password'] = "password required!";
        }
        else {
            $password = $_POST['password'];
            if (!preg_match($pattern, $password)) {
                $error['password'] = "password must include alpha-numeric characters!";
            }
            if (!empty($_POST['ConfirmPassword'])) {
                $ConfirmPassword = $_POST['ConfirmPassword'];
                if ($password != $ConfirmPassword) {
                    $error['password'] = "password is not match!";
                    $error['ConfirmPassword'] = "password is not match!";
                }
            } 
        }

        if (empty($_POST['ConfirmPassword'])) {
            $error['ConfirmPassword'] = "confirm password required!";
        }
        else {
            $ConfirmPassword = $_POST['ConfirmPassword'];
            if (!preg_match($pattern, $ConfirmPassword)) {
                $error['ConfirmPassword'] = "confirm password must include alpha-numeric characters!";
            }
        }

        if (empty($_POST['email'])) {
            $error['email'] = "email required!";
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $error['email'] = "email must be in a correct shape!";
            }
        }

        if (array_filter($error)) {
            $error['total'] = "there are some problems on your form! check it again!";
        }
        else {
            header("Location: login.php");
        }

    }
}

if ($_SERVER['PHP_SELF'] === '/web25/Session 16/login.php') {
    $error = array('username'=>'', 'password'=>'', 'total'=>'');

    if (isset($_POST['submit'])) {
        if (empty($_POST['username'])) {
            $error['username'] = "username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)) {
                $error['username'] = "username must include alpha-numeric characters!";
            }
        }

        if (empty($_POST['password'])) {
            $error['password'] = "password required!";
        }
        else {
            $password = $_POST['password'];
            if (!preg_match($pattern, $password)) {
                $error['password'] = "password must include alpha-numeric characters!";
            }
        }

        if (array_filter($error)) {
            $error['total'] = "there are some problems on your form! check it again!";
        }
        else {
            setcookie(username, $username, time() + (86400 * 30));
            $_SESSION['username'] = $username;
            header("Location: index.php");
        }
    }
}

if ($_SERVER['PHP_SELF'] === '/web25/Session 16/index.php') {
    if (!isset($_COOKIE['username'])) {
        header("Location: login.php");
    }

    if (isset($_POST['logout'])) {
        setcookie(username, '');
        header("Location: login.php");
    }
}

?>