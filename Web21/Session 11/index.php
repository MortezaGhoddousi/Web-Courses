<?php

echo "<h1>Comparison Operators</h1>";

$x = 7;
$y = 5;

$z = $x < $y;
echo "<h4>$x < $y = $z</h4>";

$z = $x <= $y;
echo "<h4>$x <= $y = $z</h4>";


$z = $x > $y;
echo "<h4>$x > $y = $z</h4>";


$z = $x >= $y;
echo "<h4>$x >= $y = $z</h4>";


$z = $x == $y;
echo "<h4>$x = $y = $z</h4>";


$z = $x != $y;
echo "<h4>$x != $y = $z</h4>";




echo "<h1>Logical Operators</h1>";

$x = true;
$y = true;
$z = $x && $y;
echo "<h4>$x and $y = $z</h4>";

$x = true;
$y = false;
$z = $x && $y;
echo "<h4>$x and $y = $z</h4>";

$x = false;
$y = true;
$z = $x && $y;
echo "<h4>$x and $y = $z</h4>";

$x = false;
$y = false;
$z = $x && $y;
echo "<h4>$x and $y = $z</h4>";


$x = true;
$y = true;
$z = $x || $y;
echo "<h4>$x or $y = $z</h4>";

$x = true;
$y = false;
$z = $x || $y;
echo "<h4>$x or $y = $z</h4>";

$x = false;
$y = true;
$z = $x || $y;
echo "<h4>$x or $y = $z</h4>";

$x = false;
$y = false;
$z = $x || $y;
echo "<h4>$x or $y = $z</h4>";


$name1 = "Pooria";
$name2 = "Atena";
$name3 = "AmirAli";
$name4 = "Kiamehr";
$name5 = "Nima";
$name6 = "Arash";
$name7 = "Zohreh";
$name8 = "Mahdi";

$names1 = ["Pooria", "Atena", "AmirAli", "Kiamehr", "Nima", "Arash", "Zohreh", "Mahdi"];
$names2 = array("Pooria", "Atena", "AmirAli", "Kiamehr", "Nima", "Arash", "Zohreh", "Mahdi");

echo "<p>$names1[5]</p>";
print_r($names1);
echo "<br />";
print_r($names2);

$myInfo = ["Morteza", "Ghoddosui", 30, 92, 1.86, true];


$Information = [["Morteza", "Ghoddosui", 30, 92, 1.86, true],
                ["Pooria", "Nadimi", 20, 85, 1.76, true],
                ["Atena", "Asadi", 19, 75, 1.70, false],
                ["AmirAli", "MasoumShahi", 20, 53, 1.71, true],
                ["Kiamehr", "Keramati", 13, 51, 1.60, true],
                ["Nima", "Javanshir", 17, 86, 1.70, true],
                ["Arash", "HasanPour", 15, 77, 1.66, true],
                ["Zohreh", "Okhravi", 20, 52, 1.55, false],
                ["Mahdi", "Khayatan", 17, 56, 1.70, true]];

echo "<br />";
echo $Information[1][1];
echo "<br />";
echo $Information[2][2];
echo "<br />";
echo $Information[3][5];
echo "<br />";
echo $Information[4][4];
echo "<br />";
echo $Information[5][0];
echo "<br />";
echo $Information[6][3];
echo "<br />";
echo $Information[7][1];
echo "<br />";
echo $Information[8][5];
echo "<br />";

print_r($Information);
echo "<br />";

$Info = array("fname"=>"Morteza", "lname"=>"Ghoddousi", "age"=>30, "weight"=>92, "height"=>1.86, "sex"=>true);
print_r($Info);
echo "<br />";

?>