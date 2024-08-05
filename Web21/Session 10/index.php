<?php 
    // String 
    $firstName = "Morteza";
    // String 
    $lastName = "Ghoddousi";
    // String 
    $fullName = $firstName.$lastName; // "MortezaGhoddousi"
    // Integer 
    $age = 30;
    // Float
    $height = 1.86;
    // Integer
    $weight = 92;


    echo $firstName;
    echo "<br/>";
    echo $lastName;
    echo "<br/>";
    echo "<h1 style='color: red;'>$fullName</h1>";
    echo "<br/>";
    echo $age;
    echo "<br/>";
    echo $height;
    echo "<br/>";
    echo $weight;
    echo "<br/>";

    $x = 9;
    $y = 4;

    $z = $x + $y;
    echo "<h3>$x + $y = $z</h3>";

    $z = $x - $y;
    echo "<h3>$x - $y = $z</h3>";

    $z = $x * $y;
    echo "<h3>$x * $y = $z</h3>";

    $z = $x / $y;
    echo "<h3>$x / $y = $z</h3>";

    $z = $x % $y;
    echo "<h3>$x % $y = $z</h3>";

    $i = 1;

    // $i = 2;

    // $i = $i + 2;
    $i += 2;

    // $i = $i - 2;
    $i -= 2;

    // $i = $i * 2;
    $i *= 2;

    // $i = $i / 2;
    $i /= 2;

    // $i = $i % 2;
    $i %= 2;

    // $i = $i + 1;
    $i++;

    // $i = $i - 1;
    $i--;

    echo $i;

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
            <p>
                <?php echo "<h1>Hello from PHP</h1>" ?>
            </p>
        </article>
        <script src="./script.js"></script>
    </body>
</html> -->
