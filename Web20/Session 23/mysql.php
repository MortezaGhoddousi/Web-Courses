<?php

$conn = mysqli_connect('localhost', 'web20', 'web20', 'web20db');

// Connecting to databse
if ($conn){
    echo "You connected to dtabase successfully! <br/>";
    // getting data from databse
    // $query = "SELECT * FROM web20tb";
    // $result = mysqli_query($conn, $query);
    // $val = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // print_r($val);
    // echo $val[1]['username'];
    // echo "<br/>";
    // echo $val[1]['password'];
    // echo "<br/>";
    // echo $val[1]['email'];
    // echo "<br/>";

    // inserting data into database
    // $username = 'Soheil';
    // $password = '123456789';
    // $email = 's@gmail.com';
    // $query = "INSERT INTO web20tb (username, password, email) VALUES ('$username', '$password', '$email')";
    // $result = mysqli_query($conn, $query);
    // if ($result){
    //     echo 'inserting data into database successfully! <br/>';
    // }

    // deleting data from database
    // $query = "DELETE FROM web20tb WHERE id='2'";
    // $result = mysqli_query($conn, $query);
    // if ($result){
    //     echo 'deleting data from database successfully! <br/>';
    // }

    // updating data from database
    // $query = 'UPDATE web20tb SET password="123456" WHERE id="4"';
    // $result = mysqli_query($conn, $query);
    // if ($result){
    //     echo 'updating data from database successfully! <br/>';
    // }

    echo hash('sha256', '124');
    

}

?>