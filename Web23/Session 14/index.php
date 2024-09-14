<?php

// $i = 0;
// $i = 2;
// $i = $i+3;
// echo $i;

$b = '5';

$b = $b + 7;

echo $b;

echo "<h1>Morteza</h1>";

$g = null;

$fname = 'Morteza';
$lname = "Ghoddousi";

$fullname = $fname.$lname;

echo "<h1>$fullname</h1>";
echo $b;

echo '<h1>Arithmetic Operators</h1>';
$x = 5;
$y = 3;

$z = $x + $y;
echo "<p>$x + $y = $z</p>";

$z = $x - $y;
echo "<p>$x - $y = $z</p>";

$z = $x * $y;
echo "<p>$x * $y = $z</p>";

$z = $x / $y;
echo "<p>$x / $y = $z</p>";

$z = $x % $y;
echo "<p>$x % $y = $z</p>";

echo '<h1>Comparison Operators</h1>';
$x = 5;
$y = 3;

$z = $x < $y;
echo "<p>$x < $y => $z</p>";

$z = $x <= $y;
echo "<p>$x <= $y => $z</p>";

$z = $x > $y;
echo "<p>$x > $y => $z</p>";

$z = $x >= $y;
echo "<p>$x >= $y => $z</p>";

$z = $x == $y;
echo "<p>$x == $y => $z</p>";

$z = $x != $y;
echo "<p>$x != $y => $z</p>";

echo '<h1>Logical Operators</h1>';

$z = true && true;
echo "<p>true && true => $z</p>";

$z = true && false;
echo "<p>true && false => $z</p>";

$z = false && true;
echo "<p>false && true => $z</p>";

$z = false && false;
echo "<p>false && false => $z</p>";

$z = true || true;
echo "<p>true || true => $z</p>";

$z = true || false;
echo "<p>true || false => $z</p>";

$z = false || true;
echo "<p>false || true => $z</p>";

$z = false || false;
echo "<p>false || false => $z</p>";

$z = !true;
echo "<p>!true => $z</p>";

$z = !false;
echo "<p>!false => $z</p>";

?>
