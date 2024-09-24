<?php

$conn = mysqli_connect('localhost', 'shop', 'shop', 'shop');

if ($conn) {
    $query = "SELECT * from shop";
    $result = mysqli_query($conn, $query);

    $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
}

?>