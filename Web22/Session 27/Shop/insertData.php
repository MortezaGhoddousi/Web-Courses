<?php

$conn = mysqli_connect('localhost', 'shop', 'shop', 'shop');

if ($conn) {
    echo 'connecting to the database successfully';

    $names = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10', 'name11', 'name12'];
    $prices = ['1.5', '2', '3.5', '2.75', '0.95', '10', '11.5', '8', '3.5', '11.5', '111.5', '54', '1.5', '2.75'];
    $discounts = ['1.3', '1.95', '3', '2.5', '0.75', '9', '10', '7.99', '3', '10', '111', '50', '1.25', '2'];
    $addresses = ['./assets/images/ac.jpg', './assets/images/b.jpg', './assets/images/bg.jpg', 
    './assets/images/c.jpg', './assets/images/ga.jpg', './assets/images/h.jpg', './assets/images/laptob.jpg', 
    './assets/images/mo.jpg', './assets/images/sf.jpg', './assets/images/sh.jpg', './assets/images/sp.jpg', 
    './assets/images/un.jpg'];

    for ($i=0; $i<sizeof($names); $i++){
        $name = $names[$i];
        $price = $prices[$i];
        $discount = $discounts[$i];
        $address = $addresses[$i];
        $query = "INSERT INTO shop (name, price, discount, address) VALUES ('$name', '$price', '$discount ', '$address')";

        $result = mysqli_query($conn, $query);
        if ($result) {
            echo "<p>Data insterted</p>";
            echo "<p>$name, $price, $discount, $address</p>";
        }
    }

mysqli_close($conn);
}


?>