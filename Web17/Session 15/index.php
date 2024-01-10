<?php

// If Else Statement

$age = 15;

if ($age < 10){
    echo 'Child';
}
elseif (($age < 18) && ($age >= 10)) {
    echo 'Teenager';
}
else {
    echo 'Adult';
}

echo '<br>';
// While Loop

$i = 0;

while ($i < 5){
    echo 'Hello';
    echo '<br>';
    echo $i.'th of the loop';
    echo '<br>';
    $i++; 
}

echo 'End of the loop';
echo '<br>';

// Example 

$admin = '123';

if (isset($_POST['submit'])){
    $guess = $_POST['pass'];

    while ($admin != $guess){
        echo 'Wrong password <br>';
    }

    echo 'Access granted <br>';

}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="main">
        <form action="#" method="post">
            <label for="user">
                <input type="text"  name="user" placeholder="Username">
            </label>
            <label for="pass">
                <input type="text"  name="pass" placeholder="Password">
            </label>
            <label for="submit">
                <input type="submit" name="submit">
            </label>
        </form>
    </div>
</body>

</html>