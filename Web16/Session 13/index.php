<?php

// If else Statement
$age = 22;

if ($age<10) {
    echo "Child <br>";
}
elseif ($age>=10 && $age<20) {
    echo "Teenager <br>";
}
else {
    echo "Adult <br>";
}

// While loop

$i = 1;
while($i<7){
    echo "value of i is: $i <br>";
    $i++;
}

// For loop

for ($i=1; $i<7; $i++){
    echo "value of i is: $i <br>";
}

$names = ['Morteza', 'Iman', 'Saeed'];
echo $names[0];
echo '<br>';
echo $names[1];
echo '<br>';
echo $names[2];
echo '<br>';

for ($i=0; $i<3; $i++){
    echo $names[$i];
    echo '<br>';
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="">
            <input type="password" name="pass" id="" placeholder="Password">
        </label>
        <label for="">
            <input type="submit" name='submit' value="Login">
        </label>
    </form>
</body>
</html>