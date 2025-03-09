<?php

session_start();

$conn = mysqli_connect("localhost", "web26", "web26", "web26db");

if ($conn) {
    $username = $_SESSION["username"];
    $password = $_SESSION["password"];
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);
    $val = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if (array_filter($val)) {
        $_SESSION["email"] = $val[0]['email'];
        $_SESSION["isLoggedIn"] = true;
        mysqli_close($conn);
        header("Location: index.php");
    }
    else {
        $_SESSION["error"] = "There are some issues on getting data from database";
        mysqli_close($conn);
        header("Location: login.php");
    }


}

?>