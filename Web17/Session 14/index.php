<?php

// Numeric Array

$class = 'A1';
$num1 = 20;
$num2 = 16;
$num3 = 15;
$num4 = 18;
$num5 = 9.5;

$info = array ($class, $num1, $num2, $num3, $num4, $num5);
echo $info[5];

$names = array('Morteza', 'Amir', 'Mohammad', 'Hossein');
echo $names[0];
$names[0] = 'Iman';
echo $names[0];

$scores[0] = 15;
$scores[1] = 17;

echo $scores[0];

// Associative Array

$ClassA1 = array ('fnames'=>'Morteza', 'lnames'=>'Ghoddousi', 'age'=>29);
echo $ClassA1['age'];



$Mortez_i = array ('fnames'=>'Morteza', 'lnames'=>'Ghoddousi', 'age'=>29);
$Amir_i = array ('fnames'=>'Amir', 'lnames'=>'Ramezani', 'age'=>25);
$Hossein_i = array ('fnames'=>'Hossein', 'lnames'=>'Rajabi', 'age'=>21);
$Mohammad_i = array ('fnames'=>'Mohammad', 'lnames'=>'Hosseini', 'age'=>30);


$Morteza['firstName'] = 'Morteza';
$Morteza['lastName'] = 'Ghoddousi';
$Morteza['age'] = 29;

$Amir['firstName'] = 'Amir';
$Amir['lastName'] = 'Ramezani';
$Amir['age'] = 25;

$Hossein['firstName'] = 'Hossein';
$Hossein['lastName'] = 'Rajabi';
$Hossein['age'] = 21;

$Mohammad['firstName'] = 'Mohammad';
$Mohammad['lastName'] = 'Hosseini';
$Mohammad['age'] = 30;

$ClassWeb = array(
    'Morteza'=>$Mortez_i, 
    'Amir'=>$Amir_i, 
    'Hossein'=>$Hossein_i,
    'Mohammad'=>$Mohammad_i
);

$ClassWeb17 = array(
    'Morteza'=>array('fname'=>'Morteza', 'lname'=>'Ghoddousi', 'age'=>29),
    'Amir'=>array('fname'=>'Amir', 'lname'=>'Ramezani', 'age'=>25),
    'Hossein'=>array('fname'=>'Hossein', 'lname'=>'Rajabi', 'age'=>21),
    'Mohammad'=>array('fname'=>'Mohammad', 'lname'=>'Hosseini', 'age'=>30)
);

echo '<br>';
echo $ClassWeb['Morteza']['lnames'];
echo '<br>';
echo $ClassWeb['Amir']['age'];
echo '<br>';

echo $ClassWeb['Amir']['fnames'] . " ". $ClassWeb['Amir']['lnames']. " is ". $ClassWeb['Amir']['age'];
echo '<br>';

echo $ClassWeb17['Mohammad']['fname'] . " ". $ClassWeb17['Mohammad']['lname']. " is ". $ClassWeb17['Mohammad']['age'];
echo '<br>';

print_r ($ClassWeb17);

?>
