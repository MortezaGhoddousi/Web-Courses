<?php

function f ($x){
    $y = 2*$x + 3;
    // echo $y;
    return $y;
}

$age = 15;
$y = f($age);
echo "<br>";
f(4);
echo "<br>";
echo $y;
// echo $x;

function sayhello ($a="Unknown"){
    echo "Hello" . $a;
}

sayhello("Morteza");
sayhello("Mahdi");
sayhello();

?>