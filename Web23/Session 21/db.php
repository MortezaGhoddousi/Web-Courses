<?php

// conneting to database
$conn = mysqli_connect('localhost', 'web23', 'web23', 'web23db');

if ($conn) {
    echo '<p>connected to database successfully</p>';

    // // getting data from database
    // $query = "SELECT * FROM web23tb";

    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
    //     print_r($var);
    // }

    // // inserting data into database
    // $username = 'Rozhan';
    // $password = '159';
    // $email = 'r.b@gmail.com';

    // $query = "INSERT INTO web23tb (username, password, email) VALUES ('$username', '$password', '$email')";

    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo '<p>data inserted into database successfully</p>';
    // }

    // // deleting data from database
    // $query = "DELETE FROM web23tb WHERE id='2'";

    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo '<p>data deleted from database successfully</p>';
    // }

    // // updating data from database
    // $query = "UPDATE web23tb SET password='111' WHERE id='3'";

    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo '<p>data updated from database successfully</p>';
    // }

}


?>