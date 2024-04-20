<?php

echo "Hello";
echo "<br/>";

echo "Hello";
echo "<br/>";

echo "Hello";
echo "<br/>";

echo "Hello";
echo "<br/>";

echo "Hello";
echo "<br/>";

$age = 30;

if ($age >= 18){
    echo "Adult";
    echo "<br/>";
}

while ($age >= 18) {
    echo "Adult";
    echo "<br/>";
    echo "$age";
    echo "<br/>";
    $age--;
}

echo " ============================================== ";
echo "<br/>";
echo "<h1>Example1</h1>";
echo "<br/>";


$x = array (20, 18, 15, 10, 20, 15.5, 20, 14.75, 16, 14, 8, 6.25);
$i = 0;
$sum = 0;

while ($i < sizeof($x)){
    $sum += $x[$i];
    $i++;
}

$avg = $sum/sizeof($x);
echo "The average is : $avg";
echo "<br/>";


echo " ============================================== ";
echo "<h1>For loops</h1>";
echo "<br/>";

for ($i=0; $i<5; $i++){
    echo $i;
    echo "<br/>";

    echo "Hello";
    echo "<br/>";
}

echo " ============================================== ";
echo "<br/>";
echo "<h1>Example2</h1>";
echo "<br/>";


$x = array (20, 18, 15, 10, 20, 15.5, 20, 14.75, 16, 14, 8, 6.25);
$sum = 0;

for($i=0; $i<sizeof($x); $i++){
    $sum += $x[$i];
}

$avg = $sum/sizeof($x);
echo "The average is : $avg";
echo "<br/>";



?>