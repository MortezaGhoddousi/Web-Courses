<?php

// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");
// echo ("<h1>Hello</h1>");
// echo ("<hr />");

$i = 0; 

// if ($i < 5) {
//     echo ("<h1>Hello</h1>");
//     echo ("<hr />");
// }

echo ("<h1>While Loops</h1>");


$i = 0; // Initial step


while ($i < 5) { // Final Step
    echo ("<h1>Hello</h1>");
    echo ("<hr />");
    $i++; // Step
}

$i = 0;
while ($i<5) {
    echo ("<section>");
    echo ("<h1>title");
    echo ($i+1);
    echo ("</h1>");
    echo ("<p>price");
    echo (($i+1)*500);
    echo ("$");
    echo ("</p>");
    echo ("</section>");
    $i++; // Step  
}

$name = "Morteza";


echo ("<h1>For Loops</h1>");

for ($i = 0; $i < 5; $i++) {
    echo ("<h1>Hello</h1>");
    echo ("<hr />");
}

$i = 0;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>hello <?php echo ($name); ?></p>

    <article>
        <?php while($i < 5) { ?>
        <section class="sections">
            <h1>Title <?php echo ($i+1); ?></h1>
            <p>Price <?php echo ($i+1); ?> $</p>
        </section>
        <?php $i++;} ?>
    </article>

</body>
</html>