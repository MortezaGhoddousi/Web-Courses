<?php

// connecting to database
$conn = mysqli_connect('localhost', "web24user", "web24pass", "web24db");

if ($conn) {
    echo "<p>Connected to database successfully!</p>";

    // getting all data from database
    $query = "SELECT * FROM web24tb";
    $result = mysqli_query($conn, $query);

    if ($result) {
        $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
        print_r($var);
        echo "<br/>";
    }

    // getting a specific data from database
    $query = "SELECT * FROM web24tb WHERE username='morteza' AND password='122'";
    $result = mysqli_query($conn, $query);

    if ($result) {
        $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if (array_filter($var)){
            // print_r($var);
            header("Location: index.php");
        }
        else {
            echo "<p>username or password is wrong!</p>";
        }
        echo "<br/>";
    }

    // // inserting data into database
    // $username = 'iman';
    // $password = '159753';
    // $email = 'im@gmail.com';
    // $query = "INSERT INTO web24tb (username, password, email) VALUES ('$username', '$password', '$email')";
    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo "<p>data inserted into database successfully!</p>";
    // }

    // // updating data from database

    // $newPassword = '0';
    // $query = "UPDATE web24tb SET password='$newPassword' WHERE id=3";
    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo "<p>data updated into database successfully!</p>";
    // }

    // deleting data from database
    $query = "DELETE FROM web24tb WHERE id=3";
    $result = mysqli_query($conn, $query);

    if ($result) {
        echo "<p>data deleted into database successfully!</p>";
    }


}


?>