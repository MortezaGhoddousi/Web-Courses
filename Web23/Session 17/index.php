<?php

function f($x) {
    $z = 2*$x;
    return $z;
}


echo f(3);
echo f(5);

function g($x, $y) {
    $z = $x**2 + 3*$y;
    $z1 = $z**2;
    return $z1;
}

$z = g(4, 7);
echo $z;

function sayHello ($name) {
    echo "Hello $name";
}

sayHello("Morteza");
sayHello("Melika");
sayHello("Arash");
sayHello("Rozhan");

?>