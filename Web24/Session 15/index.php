
<?php

$first_name = "Morteza";
$lastName = 'Ghoddousi';
$age = 30;
$height = 1.85;
$weight = 92;
$isMale = true;

echo "<p>$first_name</p>";
// echo "<br />";
echo "<h1>$lastName</h1>";
echo "<p>Your age is: $age</p>";
echo "<p>Your height: $height</p>";
echo "<p>Your Weight: $weight</p>";
echo "<p>Are you Man? $isMale</p>";



$x = 14;
$y = 17;

$average = ($x + $y) / 2;

echo "<p>The average of $x and $y is: $average</p>";

$res = $x + $y;
echo "<p>$x + $y = $res</p>";

$res = $x - $y;
echo "<p>$x - $y = $res</p>";

$res = $x * $y;
echo "<p>$x * $y = $res</p>";

$res = $x / $y;
echo "<p>$x / $y = $res</p>";

$x = 2;
$y = '3';
settype($y, "integer");

echo gettype($y);
echo "<br />";

echo $x * $y;
echo "<br />";
echo $x + $y;



?>





<!-- <!DOCTYPE html>
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
            <h1>Hello world!</h1>
            <?php echo "<h3>Morteza</h3>"; ?>
        </article>
        <script src="./script.js"></script>
    </body>
</html> -->
