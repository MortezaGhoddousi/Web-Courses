<?php

// $conn = mysqli_connect(hostname, username, password, databasename);
$conn = mysqli_connect("localhost", "web26", "web26", "web26db");


if ($conn) {
    echo ("connecting to database successfully!");
    echo ("<br />");
    
    
    $query = "ALTER TABLE users ADD UNIQUE (username)";
    $result = mysqli_query($conn, $query);
    if ($result) {
        echo ("inserting data into database successfully");
        echo ("<br />");
    }

    // // inserting data into database
    // $username = "Matin";
    // $email = "m.n@gmail.com";
    // $password = "012";
    // $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    // $result = mysqli_query($conn, $query);
    // if ($result) {
    //     echo ("inserting data into database successfully");
    //     echo ("<br />");
    // }

    // // getting data from database
    // $query = "SELECT * FROM users";

    // $result = mysqli_query($conn, $query);
    // if ($result) {
    //     $val = mysqli_fetch_all($result, MYSQLI_ASSOC);
    //     print_r($val);
    //     echo ("<br />");
    //     echo ("getting data from database successfully");
    //     echo ("<br />");
    // }

    // // updating data in database
    // $newPassword = "0";
    // $query = "UPDATE users SET password=$newPassword WHERE id=3";

    // $result = mysqli_query($conn, $query);
    // if ($result) {
    //     echo ("updasting data in database successfully");
    //     echo ("<br />");
    // }

    // // deleting data from database
    // $newPassword = "0";
    // $query = "DELETE FROM users WHERE id=3";

    // $result = mysqli_query($conn, $query);
    // if ($result) {
    //     echo ("deleting data from database successfully");
    //     echo ("<br />");
    // }

    mysqli_close($conn);


}


?>