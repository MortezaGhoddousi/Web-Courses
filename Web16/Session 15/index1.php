<?php

// // Opening and appending to files
// $myFile = fopen("./names.txt", 'a+');
// $txt = "Yousef \n";
// fwrite($myFile, $txt);

// fclose($myFile);

// // Reading information from the file
// // $myFile = fopen("./names.txt", 'a+');

// $read = file("./names.txt");

// $len = sizeof($read);
// // echo $len;
// for($i=0; $i<$len; $i++){
//     echo $read[$i];
//     echo "<br>";
// }

// foreach ($read as $line){
//     echo $line;
//     echo "<br>";
// }

// MYSQL

// $conn = mysqli_connect(HostName, Username, Password, DatabaseName);
$conn = mysqli_connect('localhost', 'web16', 'web16', 'web16db');

if ($conn){
    // echo "Connection successfully";
    // $sql = "SELECT id, user, pass FROM web16tb";
    $sql = "SELECT * FROM web16tb";
    $result = mysqli_query($conn, $sql);
    $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
    print_r($var);

    echo "<br>";
    echo $var[0]['user'];
    echo "<br>";
    echo $var[0]['pass'];
    echo "<br>";

    $user = "Yousef";
    $pass = "951";

    $sql = "INSERT INTO web16tb(user, pass) VALUES('$user', '$pass')";
    $result = mysqli_query($conn, $sql);
    if ($result){
        echo "Put information into database successfully";
    }
}
else {
    echo "There is a problem to connect to database";
}




?>