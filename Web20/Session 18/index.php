<?php
echo "<h1>Comparison Operators</h1>";
$x = 4;
$y = 7;

$res = $x == $y;
echo "$x == $y: $res<br/>";

$res = $x != $y;
echo "$x != $y: $res<br/>";

$res = $x <= $y;
echo "$x <= $y: $res<br/>";

$res = $x >= $y;
echo "$x >= $y: $res<br/>";

$res = $x < $y;
echo "$x < $y: $res<br/>";

$res = $x > $y;
echo "$x > $y: $res<br/>";

echo "<h1>Logical Operators</h1>";
$x = true;
$y = true;

$res = $x and $y;
echo "$x and $y: $res<br/>";

$x = true;
$y = false;

$res = $x and $y;
echo "$x and $y: $res<br/>";

$x = false;
$y = true;

$res = $x and $y;
echo "$x and $y: $res<br/>";

$x = false;
$y = false;

$res = $x and $y;
echo "$x and $y: $res<br/>";


$x = true;
$y = true;

$res = $x or $y;
echo "$x or $y: $res<br/>";

$x = true;
$y = false;

$res = $x or $y;
echo "$x or $y: $res<br/>";

$x = false;
$y = true;

$res = $x or $y;
echo "$x or $y: $res<br/>";

$x = false;
$y = false;

$res = $x or $y;
echo "$x or $y: $res<br/>";

echo "<h1>Arrays</h1>";

$name1 = 'vahid';
$name2 = 'soheil';
$name3 = 'ermia';

echo "$name1 <br/>";
echo "$name2 <br/>";
echo "$name3 <br/>";

$names = [$name1, 19, 'soheil', 24, $name3, 14];

echo $names[0], $names[1];
echo "<br/>";
echo $names[2];
echo "<br/>";

$newNames = array($name1, 19, 'soheil', 24, $name3, 14);
echo $newNames[0], $newNames[1];
echo "<br/>";
echo $newNames[2];
echo "<br/>";

print_r($names);
echo "<br/>";

$info = ['Morteza', [30, 1.85, 92]];
print_r($info);
echo "<br/>";

echo $info[1][2];
echo "<br/>";

$information = array('firstName'=>'Morteza', 'lastName'=>'Ghoddousi', 'age'=>30, 'height'=> 1.85, 'weight'=>92);
print_r($information);
echo "<br/>";

echo $information['lastName'];
echo "<br/>";

?>