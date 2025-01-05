<?php

echo "<p>Hello</p>";
echo "<p>Hello</p>";
echo "<p>Hello</p>";

echo "<h1>While Loop</h1>";


$i = 0;
while ($i<3) {
    echo "<p>Hello</p>";
    $i++;
}

$i = 10;
while ($i<=99) {
    echo "<p>$i</p>";
    // $i = $i+2;
    $i += 2;
} 

$i = 0;
while ($i<5) {
    $x = 2*$i-1;
    echo "<p>$x</p>";
    $i++;
}


$y = 18;

if((($y-1)%2)==0){
    echo "$y is odd";
}
else {
    echo "$y is even";
}


if ($y%2==0) {
    echo "$y is even";
}
else {
    echo "$y is odd";
}


echo "<h1>For Loop</h1>";

for ($i=0; $i<3; $i++) {
    echo "<p>Hello</p>";
}

$x1 = 15;
$x2 = 25;
$x3 = 7;

if ($x1<$x2 && $x1<$x3) {
    $min = $x1;
}
else if ($x2<$x1 && $x2<$x3){
    $min = $x2;
}
else if ($x3<$x1 && $x3<$x2){
    $min = $x3;
}

if ($x1>$x2 && $x1>$x3) {
    $max = $x1;
}
else if ($x2>$x1 && $x2>$x3){
    $max = $x2;
}
else if ($x3>$x1 && $x3>$x2){
    $max = $x3;
}

echo "<p>maximul number is $max</p>";
echo "<p>minimum number is $min</p>";

$average = ($x1+$x2+$x3)/3;

echo "<p>average of numbers is $average</p>";

$variance = (($x1-$average)**2 + ($x2-$average)**2 + ($x3-$average)**2)/3;

echo "<p>variance of numbers is $variance</p>";


echo "<h1>Functions</h1>";

function f($x) {
    $z = $x**2+4*$x+4;
    return $z;
}

$z = f(2);
echo "$z";





?>