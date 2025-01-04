<?php

// if-else statement

// $age = 66;

// if ($age >= 18) {
//     echo "<p>You are an adult man!</p>";
// }
// else {
//     echo "<p>You are a child boy!</p>";
// }

// if ($age < 10) {
//     echo "<p>You are child!</p>";
// }
// else if ($age >= 10 && $age < 18) {
//     echo "<p>You are teenager!</p>";
// }
// else if ($age >= 18 && $age < 50) {
//     echo "<p>You are adult!</p>";
// }
// else {
//     echo "<p>You are elder!</p>";
// }


// echo "<p>End of the script!</p>";

// $storedPassword = '123';
// $password = '123'; 

// if ($storedPassword == $password) {
//     echo "Good job!";
//     echo "<h1>Welcome to your profile page!</h1>";
// }
// else {
//     echo "<p style='color:red;'>Your password is wrong!</p>";
// }


$a = 3;
$b = 1;
$c = -4;

$delta = -1*$b - 4*($a)*($c);

if ($delta < 0) {
    echo "This polynomial equation has no roots!";
}
else if ($delta == 0) {
    $x = (-1*$b) / (2*$a);
    echo $x;
}
else {
    $x1 = (-1*$b+sqrt($delta)) / (2*$a);
    $x2 = (-1*$b-sqrt($delta)) / (2*$a);
    echo $x1;
    echo "<br/>";
    echo $x2;
}


?>