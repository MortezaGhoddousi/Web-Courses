<?php

// function name (inputs) {
//     statements
//     output (return) 
// }

function f($x, $y) {
    $x = 5;
    if ($x<0 && $y >= 10){
        return 2*$x + 3*$y;
    }
    else {
        return $x**2 + 3*$y + 7;
    }
}

echo ($x);
echo (f(4, 8));
echo ("<br />");
echo (f(-4, 11));
echo ("<br />");
echo (f(0, 10));

$x = f(3, 7);
echo ("<br />");
echo ($x);

function sayHello($name1, $name2) {
    echo ("<h1>Hello $name1, $name2</h1>");
}

// sayHello("Morteza");
// sayHello("Matin");
sayHello("Matin", "Fatemeh");

function makeSection(){
    echo ("<section><p>Hello</p></section>");
}

makeSection();
makeSection();

function makeSection1($text, $add){
    echo ("<section><p>$text</p> <img src=$add /></section>");
}

makeSection1("paragraph1", "./people-3.jpg");
makeSection1("paragraph2", "./people-4.jpg");

for ($i = 1; $i<=4; $i++){
    makeSection1("paragraph$i", "./people-$i.jpg");
}

function calAverage($x, $y, $z) {
    $average = ($x + $y + $z) / 3;
    return $average;
}

echo (calAverage(100, 78, 123));
echo ("<br />");

echo (calAverage(180, 178, 329));
echo ("<br />");

$name1 = "Morteza";
$name2 = "Matin";
$name3 = "Fatemeh";
$name4 = "Mahdiyar";
$name5 = "MohammadJavad";

echo ("<h5>$name1</h5>");
echo ("<h5>$name2</h5>");
echo ("<h5>$name3</h5>");
echo ("<h5>$name4</h5>");
echo ("<h5>$name5</h5>");

$names = ["Morteza", "Matin", "Fatemeh", "Mahdiyar", "MohammadJavad"];

echo ("<h5>$names[0]</h5>");
echo ("<h5>$names[1]</h5>");
echo ("<h5>$names[2]</h5>");
echo ("<h5>$names[3]</h5>");
echo ("<h5>$names[4]</h5>");

for ($i=0; $i<5; $i++) {
    echo ("<h5>$names[$i]</h5>");
}

$MortezaInfo = ["Morteza", "Ghoddousi", true, 1.86, 88, 30, "mgh@gmail.com", "./people-1.jpg"];
echo (sizeof($MortezaInfo));

echo ("<h1>Morteza's Information</h1>");
echo ("<p>First Name: $MortezaInfo[0]</p>");
echo ("<p>Last Name: $MortezaInfo[1]</p>");
echo ("<p>Is he boy: $MortezaInfo[2]</p>");
echo ("<p>height: $MortezaInfo[3] m</p>");
echo ("<p>Weight: $MortezaInfo[4] kg</p>");
echo ("<p>Age: $MortezaInfo[5] years old</p>");
echo ("<p>My email: $MortezaInfo[6]</p>");
echo ("<p>Profile Image</p>");
echo ("<img src=$MortezaInfo[7] />");




?>