<?php
echo "<h1>While loop</h1>";
$i = 0;
while($i<5){
    if ($i == 2){
        $i++;
        continue;
    }
    echo $i;
    echo "<br/>";
    $i++;
}

echo "The end of while loop";
echo "<br/>";

echo "<h1>For loop</h1>";
for ($i=0; $i<5; $i++){
    echo $i;
    echo "<br/>";
}

echo "<h3>Example1</h3>";
for ($a = 0; $a < 6; $a++) {
    echo "Value of a : ". $a . "<br />";
}
    
$students = array('Mohammad', 'Arash', 'AmirAli');
print_r($students);
echo '<br/>';

echo "<h2>Foreach loop</h2>";
echo "<h3>while</h3>";

$i = 0;
while($i<3){
    echo $students[$i];
    echo '<br/>';
    $i++;
}

echo "<h3>for</h3>";

for($i=0; $i<3; $i++){
    echo $students[$i];
    echo '<br/>';
}

echo "<h3>foreach</h3>";

foreach ($students as $i){
    // if ($i == 'Arash'){
    //     continue;
    // }
    echo $i;
    echo '<br/>';
}

echo "<h1>Functions</h1>";

function f($x){
    $y = (2*$x) + 3;
    return $y;
}

$y = f(5);
echo $y;
echo '<br/>';

function greet($name){
    echo "Hello ".$name;
    echo '<br/>';
}

greet('Morteza');

function sayHello(){
    echo "Hello";
    echo '<br/>';
}

sayHello();
sayHello();

for ($i=0; $i<10; $i++){
    sayHello();
}

function greet1($name1, $name2){
    echo "Hello " . $name1 . " and " . $name2;
    echo '<br/>';
}

greet1('Morteza', 'Mohammad');

echo "<h3>Example2</h3>";


function rec($x, $y){
    $area = $x * $y;
    $primeter = 2*$x + 2*$y;
    $ouputs = array($area, $primeter);
    return $ouputs;
}

$ouputs = rec(3, 4);
echo "Area of the rectangle is: $ouputs[0]";
echo '<br/>';
echo "Primeter of the rectangle is: $ouputs[1]";
echo '<br/>';


?>