<?php

/*

// For loop

for ($i=0 ;$i<3 ;$i++){
    echo '<p> Hello </p>';
}

echo '<p> End of the for loop </p>';


$names = array ('Morteza', 'Mohammad', 'AmirHossein', 'Hossein');

// $l = sizeof($names);
// echo $l;


echo $names[0]. '<br>';
echo $names[1]. '<br>';
echo $names[2]. '<br>';
echo $names[3]. '<br>';

echo '<h4>Using for loop in order to display names on the screen</h4>';

for ($i=0; $i<sizeof($names); $i++){
    echo $names[$i]. '<br>';
}

echo '<p> End of the for loop </p>';

// Foreach loop

echo '<h4>Using foreach loop in order to display names on the screen</h4>';

foreach ($names as $i){
    echo $i. '<br>'; 
}

echo '<p> End of the for loop </p>';

echo '<h4>Using foreach loop for associative array in order to display names on the screen</h4>';

$Mortez_i = array ('fnames'=>'Morteza', 'lnames'=>'Ghoddousi', 'age'=>29);

foreach ($Mortez_i as $k => $v){
    echo 'Key is: '. $k. '<br>'; 
    echo 'Value is: '. $v. '<br>'; 
}

echo '<p> End of the for loop </p>';

$i = 0;

while ($i<10){
    if ($i == 1){
        break;
    }
    echo $i. '<br>';
    $i++;
}

echo '<p> End of the while loop </p>';

// Functions

function f($x) {
    $y = 2*$x + 3;
    // echo $y;
    return $y;
}

$y = f(4);
echo $y;


*/

function Getname($user){
    return $user;
}

// function Getname($user, $job, $email){
//     return $user;
// }

$username = Getname('Iman');
// $username = Getname('Iman', 'Teacher', 'I.M@gmail.com');


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 16</title>
</head>

<body>
    <header>
        <h1> <?php echo Getname('Morteza'); ?> </h1>
    </header>
    <header>
        <h1> <?php echo Getname('Milad'); ?> </h1>
    </header>
    <header>
        <h1> <?php echo $username; ?> </h1>
    </header>
</body>

</html>