<?php

$conn = mysqli_connect('localhost', 'web18', 'web18', 'web18db');

if ($conn){
    echo "You have connected to database <br/>";
    //Getting data from database
    // $query = "SELECT user,pass,email FROM web18tb";
    // $myname = mysqli_real_escape_string($conn, 'Morteza');
    // $query = "SELECT * FROM web18tb WHERE user='Mohammad'";

    // $result = mysqli_query($conn, $query);
    // $var = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // print_r($var);
    // echo "<br/>";
    // echo $var[0]['user'];
    // echo "<br/>";

    //Inserting data into database

    // $query = "INSERT INTO web18tb (user, pass, email) VALUES ('Mohammad', '333', 'm.sh@gmail.com')";
    // $result = mysqli_query($conn, $query);

    // if ($result){
    //     echo "Data has inserted into database successfully";
    // }

    //Changing data from database

    $query = "UPDATE web18tb SET pass='m123' WHERE id='1'";
    $result = mysqli_query($conn, $query);
    if ($result){
        echo "Data has changed from database successfully";
    }

    //Deleting data from database

    // $query = "DELETE FROM web18tb WHERE id='3'";
    // $result = mysqli_query($conn, $query);
    // if ($result){
    //     echo "Data has deleted from database successfully";
    // }

}
else {
    echo "There are some issues to connect to database! <br/>";
}


?>