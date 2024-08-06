<?php 
echo "<h1>Comparison Operators</h1>";

$x = 4;
$y = 7;

$z = $x < $y;
echo "<h1>$x < $y = $z</h1>";

$z = $x <= $y;
echo "<h1>$x <= $y = $z</h1>";

$z = $x > $y;
echo "<h1>$x > $y = $z</h1>";

$z = $x >= $y;
echo "<h1>$x >= $y = $z</h1>";

$z = $x == $y;
echo "<h1>$x == $y = $z</h1>";

$z = $x != $y;
echo "<h1>$x != $y = $z</h1>";

echo "<h1>Logical Operators</h1>";

$x = true; 
$y = true;
$z = $x && $y;
echo "<h2>$x and (&&) $y: $z</h2>";

$x = true; 
$y = false;
$z = $x && $y;
echo "<h2>$x and (&&) $y: $z</h2>";

$x = false; 
$y = true;
$z = $x && $y;
echo "<h2>$x and (&&) $y: $z</h2>";

$x = false; 
$y = false;
$z = $x && $y;
echo "<h2>$x and (&&) $y: $z</h2>";



$x = true; 
$y = true;
$z = $x || $y;
echo "<h2>$x or (||) $y: $z</h2>";

$x = true; 
$y = false;
$z = $x || $y;
echo "<h2>$x or (||) $y: $z</h2>";

$x = false; 
$y = true;
$z = $x || $y;
echo "<h2>$x or (||) $y: $z</h2>";

$x = false; 
$y = false;
$z = $x || $y;
echo "<h2>$x or (||) $y: $z</h2>";


$x = 7!=8;
$y = true && (4==4);
$z = (4<5) || (10 >= 7);

echo $x && $y || $z;

echo "<br/>";

$name1 = "Mahdi";
$name2 = "Aref";
$name3 = "Mahya";
$name4 = "Maedeh";
$name5 = "Honey";
$name6 = "Reyhaneh";
$name7 = "Zeinab";


$names = ["Mahdi", "Aref", "Mahya", "Maedeh", "Honey", "Reyhaneh", "Zeinab"];

echo $names[4];

$myInfo = ["Morteza", "Ghoddousi", 30, 1.86, 92, true];

$Information = [["Morteza", "Ghoddousi", 30, 1.86, 92, true],
                ["Mahdi", "Kardani", 20, 1.65, 78, true], 
                ["Aref", "Askari", 16, 1.80, 80, true], 
                ["Mahya", "Hamidi", 16, 1.61, 60, false], 
                ["Maedeh", "Goharshahi", 20, 1.62, 45, false], 
                ["Honey", "Zarif", 24, 1.71, 79, false], 
                ["Reyhaneh", "Soltani", 16, 1.68, 58, false],
                ["Zeinab", "Gharib", 17, 1.63, 60, false]];

echo "<br/>";
echo $Information[0][1];
echo "<br/>";
echo $Information[1][1];
echo "<br/>";
echo $Information[2][2];
echo "<br/>";
echo $Information[3][5];
echo "<br/>";
echo $Information[4][2];
echo "<br/>";
echo $Information[5][3];
echo "<br/>";
echo $Information[6][0];
echo "<br/>";
echo $Information[7][5];
echo "<br/>";

$myArr = array("Morteza", "Ghoddousi", 30, 1.86, 92, true);

$Info = array("fname"=>"Morteza", "lname"=>"Ghoddousi", "age"=>30);

echo $Info["age"];







?>