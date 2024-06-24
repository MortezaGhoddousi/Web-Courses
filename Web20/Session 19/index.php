<?php 

$age = 14;

if ($age < 18 && $age >= 10){
    echo "Teenager <br/>";
}
else if ($age < 10){
    echo "Child <br/>";
}
else {
    echo "Adult <br/>";
}

// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";
// echo "hello <br/>";

$i = 0;
while ($i < 30){
    echo "hello ";
    echo "$i <br/>";
    $i++;
}

$students = array('Vahid', 'Soheil', 'Reza');

// echo $students[0];
// echo "<br/>";
// echo $students[1];
// echo "<br/>";
// echo $students[2];
// echo "<br/>";

$i = 0;
while ($i< sizeof($students)){
    echo $students[$i];
    echo "<br/>";
    $i++;
}


$i = 0;

while($i<=10){
    echo "$i <br/>";
    // $i = $i+2;
    $i += 2;
}


$i = 0;

while($i<=10){

    if ($i%2 == 0){
        echo "$i <br/>";
    }

    // $i = $i+2;
    $i++;
}

$scores = array(20, 18, 15.5, 19.75, 12, 16.5, 20, 19, 20, 14, 15, 8, 9.75);

$sum = 0;
$i = 0;

while ($i<sizeof(($scores))){
    $sum = $sum + $scores[$i];
    // $sum += $scores[$i];
    $i++;
}

$avg = $sum / sizeof($scores);

echo "The average of your scores: $avg <br/>";

$avg = array_sum($scores) / sizeof($scores);

echo "The average of your scores: $avg <br/>";







?>