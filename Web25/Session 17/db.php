<?php

function guidv4($data = null) {
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

$db = mysqli_connect('localhost', 'web25user', 'web25pass', 'web25db');

if ($db) {
    
    // // Inserting data into database
    
    // $username = 'Arshia';
    // $password = '111';
    // $email = 'a.m@gmail.com';
    // $id = guidv4();
    
    // $query = "INSERT INTO web25tb (id, username, password, email) VALUES ('$id', '$username', '$password', '$email')";

    // $result = mysqli_query($db, $query);

    // if ($result) {
    //     echo 'Inserting data into database successfully!';
    // }

    // // Fetching data from database

    // $query = "SELECT * FROM web25tb";

    // $result = mysqli_query($db, $query);
    // $values = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // print_r($values);

    // // Updating data from database

    // $new_password = '000';
    // $query = "UPDATE web25tb SET password='$new_password' WHERE id=1";

    // $result = mysqli_query($db, $query);

    // if ($result) {
    //     echo 'updating data from database successfully!';
    // }

    // Deleting data from database

    $query = "DELETE FROM web25tb WHERE id=1";

    $result = mysqli_query($db, $query);

    if ($result) {
        echo 'deleting data from database successfully!';
    }


}




?>