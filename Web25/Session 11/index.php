<!-- <?php 
$fname = 'Morteza';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <title>Document</title>
    </head>
    <body>
        <article>This file displays from xampp softwware on local host</article>
        <?php echo "<h1>This heading shows from php instructions</h1>"; ?>
        <?php echo $fname; ?>
        <p>Arshia</p>
        <script src="./script.js"></script>
    </body>
</html> -->


<?php

// string
$fName = "Morteza";
$lName = "Ghoddousi";

// integer
$age = 30;
$weight = 90;

// float
$height = 1.86;

// boolean
$isMale = true;

echo "<h1>first name: $fName</h1>";
echo "<h1>last name: $lName</h1>";
echo "<h1>age: $age</h1>";
echo "<h1>weight: $weight</h1>";
echo "<h1>height: $height</h1>";
echo "<h1>am I male? $isMale</h1>";

$x = 5;
$y = 3;

$z = $x + $y;
echo "<p>$x + $y = $z</p>";

$z = $x - $y;
echo "<p>$x - $y = $z</p>";

$z = $x * $y;
echo "<p>$x * $y = $z</p>";

$z = $x / $y;
echo "<p>$x / $y = $z</p>";

$z = $x % $y;
echo "<p>$x % $y = $z</p>";




?>