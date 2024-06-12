<?php

// String
$firstName = "Morteza";
$firstName = 'Milad';
$lname = 'Ghoddousi';
// Integer
$age = 30;
// Float
$height = 1.85;
// Boolean
$isMale = true;
// NULL
$error = null;


echo $firstName;
echo "</br>";
echo $lname;
echo "</br>";
echo $age;
echo "</br>";
echo $firstName . $lname;
echo "</br>";

$x = 4;
$y = 7;

echo "$x + $y = ";
echo $x + $y;
echo "</br>";

echo "$x - $y = ";
echo $x - $y;
echo "</br>";


echo "$x * $y = ";
echo $x * $y;
echo "</br>";


echo "$x / $y = ";
echo $x / $y;
echo "</br>";


echo "$x % $y = ";
echo $x % $y;
echo "</br>";

$x++; // $x = $x + 1;

$x = 50;
$x += 100; // $x = $x + 100
echo $x;
echo "</br>";




?>








<!-- 


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
        <article>
            <p>Paragraph</p>
            <?php echo "Hello guys from <b>PHP</b>!"; ?>
            <?php echo $fname; ?>
        </article>
        <script src="./script.js"></script>
    </body>
</html> -->
