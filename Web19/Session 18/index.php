<?php

echo "<h1>For loops</h1>";

$arr = array ('Mahdi', 'Maedeh', 'Mohammad', 'Nazanin');

for ($i=0; $i<sizeof($arr); $i++){
    echo $arr[$i];
    echo '<br/>';
}

foreach ($arr as $name) {
    echo $name;
    echo '<br/>';
}

$information = array('Morteza'=>array(1.86, 92, true),
                     'Mahdi'=>array(1.80, 76, true),
                     'Maedeh'=>array(1.67, 49, false),
                     'Mohammad'=>array(1.79, 79, true),
                     'Nazanin'=>array(1.60, 70, false));



foreach ($information as $key => $value) {
    echo $key;
    echo ' => ';
    echo "Height: $value[0], ";
    echo "Weight: $value[1], ";
    if ($value[2]){
        echo 'Male';
    }
    else {
        echo 'Female';
    }   
    echo '<br/>'; 
}

echo "<h1>Functions</h1>";

function f($x){
    $y = 2*$x+3;
    return $y;
}

$y = f(4);
echo $y;
echo '<br/>'; 

$a = f(5);
echo $a;
echo '<br/>';

function sayHello($name1, $name2){
    echo "Hello ". $name1 . " and ". $name2;
    echo '<br/>';
}

sayHello('Mahdi', 'Mohammad');
sayHello('Maedeh', 'Nazanin');

?>