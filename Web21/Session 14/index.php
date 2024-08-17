<?php

$scores = array(18, 17.5, 20, 8.75, 9.75);

if ($scores[0] >= 10) {
    echo "$scores[0] passed";
    echo "<br/>";
}
else {
    echo "$scores[0] failed";
    echo "<br/>";
}

if ($scores[1] >= 10) {
    echo "$scores[1] passed";
    echo "<br/>";
}
else {
    echo "$scores[1] failed";
    echo "<br/>";
}

if ($scores[2] >= 10) {
    echo "$scores[2] passed";
    echo "<br/>";
}
else {
    echo "$scores[2] failed";
    echo "<br/>";
}

if ($scores[3] >= 10) {
    echo "$scores[3] passed";
    echo "<br/>";
}
else {
    echo "$scores[3] failed";
    echo "<br/>";
}

if ($scores[4] >= 10) {
    echo "$scores[4] passed";
    echo "<br/>";
}
else {
    echo "$scores[4] failed";
    echo "<br/>";
}

echo "<h1>While loop</h1>";

$i = 0;
$scores = array(18, 17.5, 20, 8.75, 9.75, 10, 16.75, 14.25, 15);


while ($i<sizeof($scores)) {
    if ($scores[$i] >= 10) {
        echo "$scores[$i] passed";
        echo "<br/>";
    }
    else {
        echo "$scores[$i] failed";
        echo "<br/>";
    }
    $i++;
}

echo "<h1>For loop</h1>";

for ($i=0; $i<sizeof($scores); $i++) {
    if ($scores[$i] >= 10) {
        echo "$scores[$i] passed";
        echo "<br/>";
    }
    else {
        echo "$scores[$i] failed";
        echo "<br/>";
    }
}

for ($i=0;$i<100;$i++){
    echo "<p>Hello</p>";
}


function f($x, $y) {
    if($x < 10) {
        return 2*$x + $y;
    }
    else {
        return 2*$x + $y + 1;
    }
}

$x = f(3, 7);
echo f(3, 7);
echo $x;



?>