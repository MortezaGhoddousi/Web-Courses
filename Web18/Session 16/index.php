<?php
$fname = 'Morteza';
$lname = 'Ghoddousi';
$age = 30;

echo $fname;
echo '<br/>';
echo $lname;

// String
$fname = 'Morteza';
$lname = 'Ghoddousi';

// Integer
$age = 30;

// Float
$height = 1.86;

// Boolean
$isMale = true;

echo '<br/>';
echo $fname . $lname;
echo '<br/>';

$x = 71248;
$y = 4;

echo $x+$y;
echo '<br/>';
echo $x-$y;
echo '<br/>';
echo $x*$y;
echo '<br/>';
echo $x/$y;
echo '<br/>';
echo $x%$y;
echo '<br/>';

$a = $x%2;
echo $a;
echo '<br/>';
if ($a == 0){
    echo "$x is even";
}
else {
    echo "$x is odd";
}
echo '<br/>';

$a = $y%2;
echo $a;
echo '<br/>';
if ($a == 0){
    echo "$y is even";
}
else {
    echo "$y is odd";
}
echo '<br/>';

$x = 50;
$x += 100; // $x = $x + 100;
echo $x;
echo '<br/>';


?>