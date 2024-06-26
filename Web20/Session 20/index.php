<?php

$scores = array(20, 16, 15.5, 17, 18);

$i = 0;
$sum = 0;
$min = 21; //15.5
$max = -1; //20


// while ($i<sizeof($scores)){
//     $sum += $scores[$i];
    
//     if ($scores[$i] < $min) {
//         $min = $scores[$i];
//     }

//     if ($scores[$i] > $max) {
//         $max = $scores[$i];
//     } 

//     $i++;
// }

for ($i=0; $i<sizeof($scores); $i++){
    $sum += $scores[$i];
    
    if ($scores[$i] < $min) {
        $min = $scores[$i];
    }

    if ($scores[$i] > $max) {
        $max = $scores[$i];
    } 
}

echo $sum/sizeof($scores);
echo $min;
echo $max;
echo "<br/>";

function f($x, $y){
    $result = 2*$x+3*$y+5;
    echo $x;
    return $result;
}

$result = f(6, 9);
echo "<br/>";
echo $result;

function sumation($arr) {
    $sum = 0;
    for ($i=0; $i<sizeof($arr); $i++){
        $sum += $arr[$i];
    }
    return $sum/sizeof($arr);
}

$avg = sumation($scores);
echo $avg;

echo sumation([20, 20, 18, 16]);



?>