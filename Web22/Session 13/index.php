<?php
$sex = 'female';

if($sex == 'male'){
    echo "<h1>Male</h1>";
}
else {
    echo "<h1>Female</h1>";
}

$age = 22;

if ($age < 18) {
    echo "<h1>Teenager</h1>";
}
else if ($age >=18 && $age < 30) {
    echo "<h1>Adolesonce</h1>";
}
else {
    echo "<h1>Elderly</h1>";
}




?>