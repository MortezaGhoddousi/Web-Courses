<?php

$x = 4;
$y = 7;

echo "<p>$x</p>";
echo "<p>$y</p>";

$x = $x-1;
echo "<p>$x</p>";

$x--;
echo "<p>$x</p>";

$y = $x - $y;
echo "<p>$x</p>";

$y -= $x;
echo "<p>$y</p>";


// Comparison Operators
echo "<h1>Comparison Operators</h1>";
$x = 4;
$y = 7;
$z = $x < $y;
echo "<p>$x < $y = $z</p>";

$x = 4;
$y = 7;
$z = $x <= $y;
echo "<p>$x <= $y = $z</p>";

$x = 4;
$y = 7;
$z = $x > $y;
echo "<p>$x > $y = $z</p>";

$x = 4;
$y = 7;
$z = $x >= $y;
echo "<p>$x >= $y = $z</p>";

$x = 4;
$y = 7;
$z = $x == $y;
echo "<p>$x == $y = $z</p>";

$x = 4;
$y = 7;
$z = $x != $y;
echo "<p>$x != $y = $z</p>";

// Logical Operators
echo "<h1>Logical Operators</h1>";

$x = true;
$y = true;
$z = $x && $y;
echo "<p>$x && $y = $z</p>";

$x = true;
$y = false;
$z = $x && $y;
echo "<p>$x && $y = $z</p>";

$x = false;
$y = true;
$z = $x && $y;
echo "<p>$x && $y = $z</p>";

$x = false;
$y = false;
$z = $x && $y;
echo "<p>$x && $y = $z</p>";

$x = true;
$y = true;
$z = $x || $y;
echo "<p>$x || $y = $z</p>";

$x = true;
$y = false;
$z = $x || $y;
echo "<p>$x || $y = $z</p>";

$x = false;
$y = true;
$z = $x || $y;
echo "<p>$x || $y = $z</p>";

$x = false;
$y = false;
$z = $x || $y;
echo "<p>$x || $y = $z</p>";


$h = !((5+3)!=(4+2) && false or true );
echo "<p>$h</p>";



?>