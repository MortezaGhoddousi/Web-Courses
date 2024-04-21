<?php
$i = 0;
if ($i<4){
    echo "$i";
    echo "<br/>";
}

echo "The end!";
echo "<br/>";

echo " ========================= ";
echo "<h1>While Loops</h1>";

echo "Hello";
echo "<br/>";

echo "Hello";
echo "<br/>";

echo "Hello";
echo "<br/>";

$i = 0;
while ($i<4){
    echo "$i";
    echo "<br/>";
    $i++;
}

echo "The end!";
echo "<br/>";

$i = 0;
while($i<3){
    echo "Hello";
    echo "<br/>";
    $i++;
}

echo " ========================= ";
echo "<h1>Example1</h1>";

$arr = array('Mohammad', 'AmirAli', 'Arash');
$i = 0;
while ($i < 3){
    echo $arr[$i];
    echo "<br/>";
    $i++;
}

echo " ========================= ";
echo "<h1>Example2</h1>";

$arr = array(20, 14, 15, 14.5, 8, 20, 16, 20, 19.75, 11, 9.75);
$i = 0;
$sum = 0;
$max = -1;
$min = 21;

while ($i < sizeof($arr)){
    if ($arr[$i] < $min){
        $min = $arr[$i];
    }

    if ($arr[$i] > $max){
        $max = $arr[$i];
    }

    $sum = $sum + $arr[$i];
    $i++;
}

$avg = $sum/sizeof($arr);
echo "The average is: $avg";
echo "<br/>";

echo "The Maximum of your scores is: $max";
echo "<br/>";

echo "The Minimum of your scores is: $min";
echo "<br/>";

?>