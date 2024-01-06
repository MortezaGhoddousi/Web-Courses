<?php

// Constants
$a = 2;
// echo $a;
$a = 'morteza';
// echo $a;

define('b', 2);
// echo b;
// b = 4;
// echo b;

// Types of variables

$a = 2; // Integer
$b = 2.5; // Float
$c = 'Morteza'; // String
$d = array('Morteza', 'Ghoddousi'); // Array
$e = true; // Boolean
// $f = {1: 'Morteza', 2: 'Ghoddousi'}; // Object

echo 'Integer ';
echo $a;
echo '<br>';
echo 'Float ';
echo $b;
echo '<br>';
echo 'String ';
echo $c;
echo '<br>';
echo 'Array ';
echo $d[0];
echo '<br>';
echo 'Boolean ';
echo $e;
echo '<br>';

$a1 = '2';
$b1 = '4';
echo $a1+$b1;
echo $a1.$b1;
echo '<br>';

// Arithmetic Operators

echo 'Addition: ';
echo $a + $b .'<br>';
echo 'Substraction: ';
echo $a - $b .'<br>';
echo 'Multipy: ';
echo $a * $b .'<br>';
echo 'Divide: ';
echo $a / $b .'<br>';
echo 'Modulus: ';
echo $a % 4 .'<br>';


// Comparison Operators

echo 'Equal: ';
echo $a == $b .'<br>';
echo 'Not Equal: ';
echo $a != $b .'<br>';
echo 'Lower: ';
echo $a < $b .'<br>';
echo 'Lower and Equal: ';
echo $a <= $b .'<br>';
echo 'Greater: ';
echo $a > $b .'<br>';
echo 'Greater and Equal: ';
echo $a >= $b .'<br>';


// Logical Operators









?>