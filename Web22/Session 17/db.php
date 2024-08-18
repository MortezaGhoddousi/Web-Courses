<?php

// Connection to database
// host name, username, password, databse name
$conn = mysqli_connect("localhost", "web22", "web22", "web22db");

if ($conn) {
    echo "connected to database successfully! <br />"; 
    
    // Getting data from database

    // $query = "SELECT username, password FROM web22tb";
    $query = "SELECT * FROM web22tb";
    $result = mysqli_query($conn, $query);
    $var = mysqli_fetch_all($result, MYSQLI_ASSOC);

    print_r($var);
    echo "<br />";

    // Inserting data into database

    // $username = 'Mahya';
    // $password = '1598753';
    // $email = 'm.h@gmail.com';
    // $query = "INSERT INTO web22tb (username, password, email) VALUES ('$username', '$password', '$email')";
    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo "inserting data into database successfully! <br />"; 
    // }

    // deleting data from database 

    // $query = "DELETE FROM web22tb WHERE id='2'";

    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo "deleting data from database successfully! <br />"; 
    // }

    // updating data from database
    
    $newPassword = '000';
    $query = "UPDATE web22tb SET password='$newPassword' WHERE id='3'";

    $result = mysqli_query($conn, $query);

    if ($result) {
        echo "updating data from database successfully! <br />"; 
    }
}


?>