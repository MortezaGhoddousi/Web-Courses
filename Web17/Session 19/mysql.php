<?php

// Connecting to database
// mysqli_connect(Hostname, Username, Password, Database name)
$conn = mysqli_connect('localhost', 'web17', 'web17', 'web17db');

if ($conn){
    echo '<p>Connection successfully</p>';

    // Getting data from database
    // $sql = "SELECT user, pass, email FROM web17tb";
    // $sql = "SELECT * FROM web17tb";
    // $result = mysqli_query($conn, $sql);
    // if ($result){
    //     $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
    //     print_r($var);
    //     echo $var[0]['user'];
    // }

    // Inserting data into database
    // $user = 'Hossein';
    // $pass = '159';
    // $email = 'Hossein@gmail.com';
    // $sql = "INSERT INTO web17tb (user, pass, email) VALUES('$user', '$pass', '$email')";
    // $result = mysqli_query($conn, $sql);
    // if ($result){
    //     echo '<p> Inserting data successfully </p>';
    // }

    $user = 'Hossein';
    $pass = '159';

    $sql = "SELECT * FROM web17tb WHERE user LIKE '$user'";
    $result = mysqli_query($conn, $sql);

    if ($result){
        $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
        print_r($var);
    }



}




?>