<?php

// $age = 60;

// if ($age < 18 && $age > 10) {
//     echo "<p>You are teenager!</p>";
// }

// else if ($age <p 10) {
//     echo "<p>You are child!</p>";
// }

// else if ($age > 50) {
//     echo "<p>You are elder!</p>";
// }

// else {
//     echo "<p>You are adult!</p>";
// }

// echo "<hr />";

// $num1 = 15;
// $num2 = 8;
// $num3 = 12;

// if ($num1 > $num2) {
//     echo "<p>$num1</p>";
// }
// else {
//     echo "<p>$num2</p>";
// }

// if ($num1 > $num2 && $num1 > $num3) {
//     echo "<p>$num1</p>";
// }
// if ($num2 > $num1 && $num2 > $num3) {
//     echo "<p>$num2</p>";
// }
// if ($num3 > $num1 && $num3 > $num2) {
//     echo "<p>$num3</p>";
// }

// if () {

// }

// while () {

// }

// $i = 0;

// while ($i<3){
//     echo "<h1>Hello world!</h1>";
//     $i++; // $i = $i+1;
// }

// $a = 5;
// $b = 100;

// $i = $a;

// while ($i <= $b) {
//     // echo $i;
//     // echo "<br/>";
//     // $i++;
//     // $i = $i+2;
//     // $i += 2;

//     $r = $i%2;

//     if ($r == 0) {
//         echo $i;
//         echo "<br/>";
//     }

//     $i++;
// }

$a = 5;

$i = 0;
$counter = 0;

while ($i == 0){
    $counter++;
    $a = $a / 2;
    if ($a < 1) {
        $i = 1;
    }
}

echo $counter;








?>