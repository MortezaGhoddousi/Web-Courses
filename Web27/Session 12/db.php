<?php

// connecting to the database
$conn = mysqli_connect("localhost", "web27user", "web27password", "web27db");

// checking connection successfully or not
if ($conn) {
    echo ("<p>connecting to the database successfully!</p>");


    $query = "ALTER TABLE `web27db`.`web27tb` ADD UNIQUE (`username`)";
    $result = mysqli_query($conn, $query);


    if ($result) {
        echo ("<p>updating table from the database successfully!</p>");
    }

    // CRUD Operations (CREATE, READ, UPDATE, DELETE)

    // // READ (fetch) data from databse

    // // $query = "SELECT username, password FROM web27tb";
    // // $query = "SELECT * FROM web27tb WHERE id=1";
    // $query = "SELECT * FROM web27tb";
    // $result = mysqli_query($conn, $query);
    // $var = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // print_r($var);

    // // UPDATE data on the database

    // $new_password = '111';
    // $query = "UPDATE web27tb SET password='$new_password' WHERE id=1";
    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo ("<p>updating data on the database successfully!</p>");
    // }

    // // DELETE data from the database

    // $query = "DELETE FROM web27tb WHERE id=1";
    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo ("<p>deleting data from the database successfully!</p>");
    // }

    // // CREATE(insert) data into the database

    // $username = "Morteza";
    // $password = '0123456';
    // $email = 'm@gmail.com';

    // $query = "INSERT INTO web27tb (username, password, email) VALUES ('$username', '$password', '$email')";
    // $result = mysqli_query($conn, $query);

    // if ($result) {
    //     echo ("<p>inserting data into the database successfully!</p>");
    // }

    


}



?>


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Username: <?php echo($var[0]['username']) ?></p>
    <p>Password: <?php echo($var[0]['password']) ?></p>
</body>
</html> -->
