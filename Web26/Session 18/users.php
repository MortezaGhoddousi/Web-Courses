<?php

session_start();

$conn = mysqli_connect("localhost", "web26", "web26", "web26db");

if ($conn) {
    $username = $_SESSION["username"];
    $email = $_SESSION["email"];
    $password = $_SESSION["password"];
    $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    $result = mysqli_query($conn, $query);
    if ($result) {
        header("Location: index.php");
    }
    else {
        $_SESSION["error"] = "There are some issues on inserting data into database";
        header("Location: signup.php");
    }
}

// echo ($_SESSION["username"]);
// echo ($_SESSION["email"]);
// echo ($_SESSION["password"]);
// echo ($_SESSION["confirmpassword"]);

?>