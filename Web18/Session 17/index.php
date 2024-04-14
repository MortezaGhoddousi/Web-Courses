<?php
// Comparison Operators
$x = 7;
$y = 4;

echo "<h1>Comparison Operators</h1>";

echo "$x == $y => ";
echo $x == $y;
echo "<br/>";

echo "$x === $y => ";
echo $x === $y;
echo "<br/>";

echo "$x != $y => ";
echo $x != $y;
echo "<br/>";

echo "$x <> $y => ";
echo $x <> $y;
echo "<br/>";

echo "$x !== $y => ";
echo $x !== $y;
echo "<br/>";

echo "$x >= $y => ";
echo $x >= $y;
echo "<br/>";

echo "$x <= $y => ";
echo $x <= $y;
echo "<br/>";

echo "$x < $y => ";
echo $x < $y;
echo "<br/>";

echo "$x > $y => ";
echo $x > $y;
echo "<br/>";

// Logical Operators

echo "<h1>Logical Operators</h1>";

echo "true and true => ";
echo true and true;
echo "<br/>";

echo "true and false => ";
echo true and false;
echo "<br/>";

echo "false and true => ";
echo false and true;
echo "<br/>";

echo "false and false => ";
echo false and false;
echo "<br/>";

echo "true or true => ";
echo true or true;
echo "<br/>";

echo "true or false => ";
echo true or false;
echo "<br/>";

echo "false or true => ";
echo false or true;
echo "<br/>";

echo "false or false => ";
echo false or false;
echo "<br/>";

// Numeric Arrays

echo "<h1>Numeric Arrays</h1>";
$name1 = 'Mohammad';
$name2 = 'AmirAli';
$name3 = 'Arash';

$names = ['Mohammad', 'AmirAli', 'Arash'];
print_r($names);
echo "<br/>";

echo $name1;
echo "<br/>";

echo $names[0];
echo "<br/>";

$lnames = array('Sheibani', 'Hosseini', 'Ramezani');
print_r($lnames);
echo "<br/>";

echo "<h1>$names[0] $lnames[0]</h1>";
echo "<br/>";

echo "<h1>$names[1] $lnames[1]</h1>";
echo "<br/>";

echo "<h1>$names[2] $lnames[2]</h1>";
echo "<br/>";



?>