<?php

echo ("<h1>Mathematical Operators</h1>");

$x = 4;
$y = 9;

$z = $x + $y;
echo ("$x + $y = $z");
echo ("<br />");

$z = $x - $y;
echo ("$x - $y = $z");
echo ("<br />");

$z = $x * $y;
echo ("$x * $y = $z");
echo ("<br />");

$z = $x ** $y;
echo ("$x ** $y = $z");
echo ("<br />");

$z = $x / $y;
echo ("$x / $y = $z");
echo ("<br />");

$z = $x % $y;
echo ("$x % $y = $z");
echo ("<br />");

$x = $x+1;
$x++; // $x = $x+1 <=> $x++

$x = $x-1;
$x--; // $x = $x-1 <=> $x--

$x = $x*$y;
$x*=$y; // $x = $x*$y <=> $x*=$y

$x = $x/$y;
$x/=$y; // $x = $x/$y <=> $x/=$y

$x = $x+$y;
$x+=$y; // $x = $x+$y <=> $x+=$y

$x = $x-$y;
$x-=$y; // $x = $x-$y <=> $x-=$y

$x = $x%$y;
$x%=$y; // $x = $x%$y <=> $x%=$y

$x = $x**$y;
$x**=$y; // $x = $x**$y <=> $x**=$y

// echo ("hallo");
// echo ("hallo");
// echo ("hallo");
// echo ("hallo");
// echo ("<br />");

// for ($i=0; $i<4000; $i++){
//     echo ("hallo");
// }


echo ("<h1>Comparison Operators</h1>");

$x = 4; 
$y = 5;

$z = $x < $y;
echo ("<p>$x < $y => $z</p>"); 

$z = $x <= $y;
echo ("<p>$x <= $y => $z</p>"); 

$z = $x > $y;
echo ("<p>$x > $y => $z</p>"); 

$z = $x >= $y;
echo ("<p>$x >= $y => $z</p>"); 

$z = $x == $y;
echo ("<p>$x == $y => $z</p>"); 

$z = $x === $y;
echo ("<p>$x === $y => $z</p>"); 

$z = $x != $y;
echo ("<p>$x != $y => $z</p>"); 

$z = $x !== $y;
echo ("<p>$x !== $y => $z</p>"); 


echo ("<h1>Logical Operators</h1>");

$x = true;
$y = true;

$z = $y && $y;
echo ("<p>$x && $y => $z</p>"); 

$x = false;
$y = true;

$z = $y && $y;
echo ("<p>$x && $y => $z</p>"); 

$x = true;
$y = false;

$z = $y && $y;
echo ("<p>$x && $y => $z</p>"); 

$x = false;
$y = false;

$z = $y && $y;
echo ("<p>$x && $y => $z</p>"); 

$x = true;
$y = true;

$z = $y || $y;
echo ("<p>$x || $y => $z</p>"); 

$x = false;
$y = true;

$z = $y || $y;
echo ("<p>$x || $y => $z</p>"); 

$x = true;
$y = false;

$z = $y || $y;
echo ("<p>$x || $y => $z</p>"); 

$x = false;
$y = false;

$z = $y || $y;
echo ("<p>$x || $y => $z</p>"); 

$x = true;
$y = !$x;
echo ("<p>!$x => $y</p>"); 

$x = false;
$y = !$x;
echo ("<p>!$x => $y</p>"); 



?>