<?php

session_start();

function guidv4($data = null) {
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

$pattern = "/^[a-zA-Z0-9_]+$/";


if ($_SERVER['PHP_SELF'] === '/web25/Session 17/signup.php') {
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
            $db = mysqli_connect('localhost', 'web25user', 'web25pass', 'web25db');
            if ($db){
                $id = guidv4();
                $query = "INSERT INTO web25tb (id, username, password, email) VALUES ('$id', '$username', '$password', '$email')";
                $result = mysqli_query($db, $query);
                if ($result) {
                    mysqli_close($db);
                    header("Location: login.php");
                }
            }
        }
    }
}

if ($_SERVER['PHP_SELF'] === '/web25/Session 17/login.php') {
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
            $db = mysqli_connect('localhost', 'web25user', 'web25pass', 'web25db');
            if ($db) {
                $query = "SELECT * FROM web25tb WHERE username='$username' AND password='$password'";
                $result = mysqli_query($db, $query);
                $values = mysqli_fetch_all($result, MYSQLI_ASSOC);
                if (empty($values)) {
                    $error['total'] = "username or password is incorrect!";
                }
                else {
                    setcookie(username, $username, time() + (86400 * 30));
                    $_SESSION['username'] = $values[0]['username'];
                    $_SESSION['password'] = $values[0]['password'];
                    $_SESSION['email'] = $values[0]['email'];
                    header("Location: index.php");
                }
            }
        }
    }
}

if ($_SERVER['PHP_SELF'] === '/web25/Session 17/index.php') {
    if (!isset($_COOKIE['username'])) {
        header("Location: login.php");
    }

    if (isset($_POST['logout'])) {
        setcookie(username, '');
        header("Location: login.php");
    }

    if (isset($_POST['delete'])) {
        $db = mysqli_connect('localhost', 'web25user', 'web25pass', 'web25db');
        if ($db) {
            $username = $_SESSION['username'];
            $query = "DELETE FROM web25tb WHERE username='$username'";
            $result = mysqli_query($db, $query);

            if ($result) {
                setcookie(username, '');
                header("Location: login.php");
            }
        }
    }

}

?>