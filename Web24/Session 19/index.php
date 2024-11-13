<?php

// for ($i = 0 ; $i < 5 ; $i++) {
//     echo "<h1>$i</h1>";
// }

// $i = 0;
// while ($i<5){
//     echo "<h1>$i</h1>";
//     $i++;
// }

function f($x) {
    $z = 2*$x + 3;
    echo $z;

}


$z = f(4);
echo $z;

function sayHello () {
    echo "<h1>Hello Guys!</h1>";
}

sayHello();



function average ($x) {
    // $l = sizeof($x);
    $sum = 0;
    for ($i=0; $i<sizeof($x); $i++) {
        $sum = $sum + $x[$i];
    }

    return $sum / sizeof($x);
}

function variance ($x) {
    $avg = average($x);
    $sum = 0;
    for ($i=0; $i<sizeof($x); $i++) {
        $sum = $sum + ($x[$i]-$avg)**2;
    }

    return $sum / sizeof($x);
}

$x = [4, 7, 8, 10, 15, 2];

$var = variance($x);
$avg = average($x);
echo "<h2>variance: $var</h2>";
echo "<h2>Average: $avg</h2>";


?>