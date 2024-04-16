<?php

echo "<h1>Numeric Arrays</h1>";

$firstNames = ["Mohammad", 'AmirAli', 'Arash'];

$lastNames = array("Sheybani", 'Hosseini', 'Ramezani');

$ages[0] = 24;
$ages[1] = 12;
$ages[2] = 11;

print_r($firstNames);
echo "<br/>";
print_r($lastNames);
echo "<br/>";
print_r($ages);
echo "<br/>";

$scores = array(18, 15.5, 14.25, 20);

print_r($scores);
echo "<br/>";

echo sizeof($scores);
echo "<br/>";

$avg = ($scores[0]+$scores[1]+$scores[2]+$scores[3])/sizeof($scores);

echo "The average of your scores is : $avg";

echo "<h1>Associative Arrays</h1>";

$ages["0"] = 24;
$ages["1"] = 12;
$ages["2"] = 11;

print_r($ages);
echo "<br/>";

$Students['Mohammad'] = ['Mohammad', 'Sheybani', 24, 18, true];
$Students['AmirAli'] = ['AmirAli', 'Hosseini', 12, 15.5, true];
$Students['Arash'] = ['Arash', 'Ramezani', 11, 14.25, true];

print_r($Students);
echo "<br/>";

print_r($Students['Mohammad']);
echo "<br/>";

$Student = array("Mohammad"=>array('Mohammad', 'Sheybani', 24, 18, true),
                'AmirAli'=>['AmirAli', 'Hosseini', 12, 15.5, true],
                'Arash'=>array('Arash', 'Ramezani', 11, 14.25, true),
            "Teacher"=>'Morteza');

print_r($Student);
echo "<br/>";

echo $Student["Teacher"];
echo "<br/>";
echo $Student["Mohammad"][1];
echo "<br/>";

?>