<?php

echo "<h1>if else statements</h1>";

$age = 20;

if ($age >= 18){
    echo "Adult";
}
else if($age >= 10 && $age < 18){
    echo "Teenager";
}
else {
    echo "Child";
}

echo "<br/>";

$score = -28;
if ($score >= 10 && $score <=20){
    echo "Passed";
}
else if ($score < 10 && $score >= 0){
    echo "Failed";
}
else {
    echo "Invalid Score";
}

echo "<br/>";


?>