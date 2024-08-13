<?php

$scores = array(15, 8, 17, 19.75, 20, 2, 8.75, 9.75, 20, 10, 15, 16, 17, 8, 7, 19, 20, 14, 16, 1, 0, 5, 19);
// echo $scores[0];


echo sizeof($scores);

echo "<h1>while loop</h1>";

$i = 0;
while ($i<sizeof($scores)){

    if ($scores[$i]<10) {
        echo "<p>$scores[$i] failed</p>";
    }
    else {
        echo "<p>$scores[$i] passed</p>";
    } 
    $i++;
}

echo "End";

echo "<h1>for loop</h1>";

for ($i=0; $i<sizeof($scores); $i++){
    if ($scores[$i]<10) {
        echo "<p>$scores[$i] failed</p>";
    }
    else {
        echo "<p>$scores[$i] passed</p>";
    } 
}


// if ($scores[0]<10) {
//     echo "<p>$scores[0] failed</p>";
// }
// else {
//     echo "<p>$scores[0] passed</p>";
// }

// if ($scores[1]<10) {
//     echo "<p>$scores[1] failed</p>";
// }
// else {
//     echo "<p>$scores[1] passed</p>";
// }

// if ($scores[2]<10) {
//     echo "<p>$scores[2] failed</p>";
// }
// else {
//     echo "<p>$scores[2] passed</p>";
// }

// if ($scores[3]<10) {
//     echo "<p>$scores[3] failed</p>";
// }
// else {
//     echo "<p>$scores[3] passed</p>";
// }

// if ($scores[4]<10) {
//     echo "<p>$scores[4] failed</p>";
// }
// else {
//     echo "<p>$scores[4] passed</p>";
// }

// if ($scores[5]<10) {
//     echo "<p>$scores[5] failed</p>";
// }
// else {
//     echo "<p>$scores[5] passed</p>";
// }

// if ($scores[6]<10) {
//     echo "<p>$scores[6] failed</p>";
// }
// else {
//     echo "<p>$scores[6] passed</p>";
// }

// if ($scores[7]<10) {
//     echo "<p>$scores[7] failed</p>";
// }
// else {
//     echo "<p>$scores[7] passed</p>";
// }

?>