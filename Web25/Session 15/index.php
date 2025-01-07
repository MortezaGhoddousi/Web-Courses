<?php

echo "<h1>Array</h1>";

$name1 = 'Arshia';
$name2 = 'Mohaddeseh';
$name3 = 'Masoumeh';
$name4 = 'Mahdiar';

echo "<p>$name1</p>";
echo "<p>$name2</p>";
echo "<p>$name3</p>";
echo "<p>$name4</p>";


$names = [$name1, $name2, $name3, $name4];

$myInfoNumeric = ['Morteza', 'Ghoddousi', 30, 90, 1.86, true];

echo $names[2];

$myInfo = array(
    'fname' => 'Morteza', 
    'lname' => 'Ghoddousi',
    'age' => 30,
    'weight' => 90,
    'height' => 1.86,
    'isMale' => true,
    'students' => ['Arshia', 'Mohaddeseh', 'Masoumeh', 'Mahdiar'] 
);

echo "<br />";
echo $myInfo['students'][0];


// example 1

$numbers = [4, 2, 1, 7, 10, 4, 0, 15, 18, 17, 20, 4];

function calAverageMinMax($numbers) {
    $sum = 0;
    $min = 0;
    $max = 0;
    for ($i=0; $i<sizeof($numbers); $i++) {
        $sum = $sum + $numbers[$i];
        if ($numbers[$i] > $max) {
            $max = $numbers[$i];
        }
        if ($numbers[$i] < $min) {
            $min = $numbers[$i];
        }
    }

    $average = $sum / sizeof($numbers);

    return array('average'=>$average, 'min'=>$min, 'max'=>$max);
}

print_r(calAverageMinMax($numbers));

// predefined superglobal variables

echo "<h1>predefined superglobal variables</h1>";
echo $_SERVER['PHP_SELF'];


?>