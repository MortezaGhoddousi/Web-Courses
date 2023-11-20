<?php

// Comparison Operators
$x = 10;
$y = 15;

echo $x==$y; // False
echo "<br>";
echo $x!=$y; // True
echo "<br>";
echo $x>=$y; // False
echo "<br>";
echo $x<=$y; // True
echo "<br>";
echo $x>$y; // False
echo "<br>";
echo $x<$y; // True
echo "<br>";

// Array
$names = array('Morteza', 'Milad', 'Yousef', 'Keyvan', 'Ali', 'Mohammad');
echo $names[0];
echo "<br>";

$ages = [29, 30, 20, 17, 19, 19];
echo $ages[0];
echo "<br>";

$gender = array();
$gender[0] = 'Male';
$gender[1] = 'Male';
$gender[2] = 'Male';
$gender[3] = 'Male';
$gender[4] = 'Male';
$gender[5] = 'Male';
echo $gender[0];
echo "<br>";

$status = array();
$status['online'] = 'Morteza';
$status['offline'] = 'Milad';
echo $status['online'];
echo "<br>";

$ints = array('name'=>'Morteza', 'age'=>29, 'favcolor'=>'Blue');
echo $ints['age'];
echo "<br>";

$people = array('morteza'=>array("Morteza", "Ghoddousi", 29, "Volleyball player"),
'milad'=>array("Milad", "Vahdati", 30, "Football player"),
'Ali'=>array('Ali', 'Mohammadnezhad', 19, 'Seller'),
'Mohammad'=>array('MohammadJavad', 'HajiAbadi', 19, 'Gamer')
);

echo $people['morteza'][0];
echo "<br>";

?>