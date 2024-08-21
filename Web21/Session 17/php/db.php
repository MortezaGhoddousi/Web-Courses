<?php

$conn = mysqli_connect('localhost', 'web21', 'web21', 'web21db');

if ($conn) {
    echo "Connected to database successfully! <br />";

    // Getting data from database

    // $query = "SELECT username, password, email FROM web21tb";

    $query = "SELECT * FROM web21tb";

    $result = mysqli_query($conn, $query);
    if($result) {
        $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
        print_r($var);
    }

    // Inserting data into database

    // $username = 'Atena';
    // $password = "0123";
    // $email = "A.A@gmail.com";
    // $query = "INSERT INTO web21tb (username, password, email) VALUES ('$username', '$password', '$email')";
    // $result = mysqli_query($conn, $query);
    // if($result) {
    //     echo "Data inserted into database successfully!";
    // }

    // Deleting data from database

    // $query = "DELETE FROM web21tb WHERE id='3'";
    // $result = mysqli_query($conn, $query);
    // if($result) {
    //     echo "Data deleted from database successfully!";
    // }

    // Updating data from database

    $newpassword = '000';
    $query = "UPDATE web21tb SET password='$newpassword' WHERE id='4'";
    $result = mysqli_query($conn, $query);
    if($result) {
        echo "Data updated from database successfully!";
    }

}

?>