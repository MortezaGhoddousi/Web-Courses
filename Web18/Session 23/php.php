<?php

session_start();
session_reset();

if (isset($_POST['submit'])){
    // echo $_POST['user'];
    // echo "<br/>";
    // echo $_POST['password'];
    // echo "<br/>";
    $_SESSION['username'] = $_POST['user'];
    $_SESSION['password'] = $_POST['password'];
    header('Location: index.php');
}


?>