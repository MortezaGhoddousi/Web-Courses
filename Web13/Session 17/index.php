<?php

// function sayHello($x="Morteza"){
//     echo "Hello ".$x;
//     echo "<br>";
// }

// sayHello("Morteza");
// sayHello("Ehsan");
// sayHello();

// function Multipy($x, $y){
//     $ans = $x*$y;
//     echo $ans;
//     return $ans;
// }

// $ans = Multipy(3, 5);
// echo $ans;

// echo "<br>";
// echo $_SERVER['SCRIPT_NAME'];
// echo "<br>";
// echo $_SERVER['HTTP_HOST'];
// echo "<br>";




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
    <form action="index.php" method="post">
        <label for="name"></label>
        <input type="text" name="name" placeholder="Username"><br>
        <label for="pass"></label>
        <input type="password" name="pass" placeholder="Password"><br>
        <label for="email"></label>
        <input type="email" name="email" placeholder="Email"><br>
        <input type="submit" value="Send" name="submit">
    </form>
</body>
</html>

