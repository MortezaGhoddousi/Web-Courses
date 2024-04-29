<?php


// Connecting to the DataBase
$conn = mysqli_connect('localhost', 'web19', 'web19', 'web19db');

if ($conn) {
    echo "You connected to db! <br/>";

    // Getting data from DataBase
    $query = "SELECT * FROM web19tb";
    $result = mysqli_query($conn, $query);

    $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
    print_r($var);

    // Inserting data into DataBase
    $query = "INSERT INTO web19tb (id, user, pass, email) VALUES ('5', 'Mohammad', '159', 'm.j@gamil.com')";
    $result = mysqli_query($conn, $query);

    if ($result){
        echo 'Data was inserted into database!';
    }
    else {
        echo "You cannot insert data into db!";
    }

}
else {
    echo "You cannot connect to db!";
}

?>