<?php

// Variables

$x = 12; // Integer variable
$name = 'Morteza'; // String variable
$score = 18.94; // Float variable
echo $x;
echo "<br>";

$x = 20;
echo $x;
echo "<br>";

// Constants

define("pass", "123");

echo pass;
echo "<br>";

// Data types

$name = "Morteza";
$lastName = "Ghoddousi";
$s = $name . $lastName; // Concatenation operation
echo $s;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php echo "Hello World!" ?>
</body>
</html>