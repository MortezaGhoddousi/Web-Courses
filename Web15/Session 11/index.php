<?php
    $firstname = "Morteza";
    $lastname = 'Ghoddousi';
    $age = 29;
    $firstname = "Iman";

    echo $firstname;
    echo "<br>";
    echo $lastname;
    echo "<br>";
    echo $age;
    echo "<br>";
    echo $firstname." ".$lastname;

    $x = 12;
    $y = 8;

    echo "<br>";
    echo $x+$y;
    echo "<br>";
    echo $x-$y;
    echo "<br>";
    echo $x*$y;
    echo "<br>";
    echo $x/$y;
    echo "<br>";
    echo $x%$y;
    echo "<br>";

    $scores = array (19, 18.5, 17, 20);
    echo $scores[3];
    echo "<br>";
    
    $names[0] = "Morteza";
    $names[1] = "Iman";
    echo $names[0];
    echo "<br>";

    $people["online"] = "Morteza";
    $people["offline"] = "Iman";
    $people[0] = 19;

    echo $people["online"];
    echo "<br>";
    echo $people[0];
    echo "<br>";

    $ages = array ("morteza"=>29, "Iman"=>25, "Ehsan"=>27, 0=>array("ali"));

    echo $ages["morteza"];
    echo $ages[0][0];
    echo "<br>";

    $ind = array("online"=>array("morteza", "milad"),
    "offline"=>array("ali", "saeed"));

    echo $ind["online"][1];
    echo "<br>";


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 11</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <p>Hello from PHP</p>
    <?php 
        // Greeting
        echo "<p>Hello from <strong>PHP</strong> echo function <br></p>";
    ?>
</body>

</html>