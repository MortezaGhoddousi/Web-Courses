<?php

echo "<h1>If else statement</h1>";
$age = 58;

if ($age >= 18 && $age <= 50) {
    echo "<h2>Adult</h2>";
}
else if ($age < 10) {
    echo "<h2>Child</h2>";
}
else if ($age > 50) {
    echo "<h2>Elder</h2>";
}
else {
    echo "<h2>Teenager</h2>";
}

echo "<p>End</p>";

$midTerm = 8;
$final = 9.5;
$avg = ($midTerm+$final)/2;

if ($avg >= 10) {
    echo "<h2>PASSED</h2>";
}
else {
    echo "<h2>FAILED</h2>";
}

echo "<h1>While loop</h1>";

$i = 0;
while ($i < 3) {
    echo "<p>Hello</p>";
    $i++;
}

echo "<p>End</p>";




?>