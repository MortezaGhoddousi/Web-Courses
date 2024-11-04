<?php

$x1 = 15;
$x2 = 20;
$x3 = 5;
$x4 = 13;
$x5 = 17;

$average = ($x1 + $x2 + $x3 + $x4 + $x5) / 5;

$variance = (($x1-$average)**2 + ($x2-$average)**2 + ($x3-$average)**2 + ($x4-$average)**2 + ($x5-$average)**2) / 5;

echo "<p>The variance of these 5 numbers: $variance</p>";

$x = 4;
$y = "5";

$z = $x !== $y;
echo "<p>$z</p>";

$x = true;
$y = true;

$z = $x && $y;
echo "<p>$x && $y => $z</p>";


$z = true && true && true && false && true && false;


echo "true && true && true && false && true && false => $z";

echo "<br />";

$z = true || true || true || false || true || false;


echo "true || true || true || false || true || false => $z";

$z = !((4 == 5) || true);
echo "!((4 == 5) || true) => $z";


echo "<br />";

echo "<h1>If else statement</h1>";

$age = 15;

if ($age >= 18) {
    echo "<p>yay</p>";
    echo "<p>You are adult</p>";
    echo "<p>your age is $age</p>";
}
else {
    echo "<p>poor you</p>";
    echo "<p>You are a child guy</p>";
    echo "<p>your age is $age</p>";
}

echo "<p>end</p>";
    




?>