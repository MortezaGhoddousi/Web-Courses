<?php

// Exercise 01
// $numbers = [10, 74, 54, 15, 30, 22, 17, 47, 3];

// for($i=0; $i<sizeof($numbers); $i++) {
//     if ($numbers[$i]%5 == 0){
//         echo $numbers[$i];
//         echo "<br />";
//     }
// }

// Exercise 02

// $numbers = [10, 74, 54, 15, 30, 22, 17, 47, 3, 105, 1373];

// function reversNumber($num) {
//     $revNum = '';
//     while (true) {
//         $rem = $num%10;
//         $revNum = $revNum . strval($rem);
//         $num = (int)($num/10);
//         if ($num == 0) {
//             break;
//         }
//     }
//     return $revNum;
// }

// for($i=0; $i<sizeof($numbers); $i++) {
//     $x = reversNumber($numbers[$i]);
//     echo "<p>$x</p>";
// }

// Exercise 03

// function calMax($nums) {
//     $max = $nums[0];
//     for ($i=0; $i<sizeof($nums); $i++) {
//         if ($nums[$i] > $max) {
//             $max = $nums[$i];
//         }
//     }
//     return $max;
// }

// function calMin($nums) {
//     $min = $nums[0];
//     for ($i=0; $i<sizeof($nums); $i++) {
//         if ($nums[$i] < $min) {
//             $min = $nums[$i];
//         }
//     }
//     return $min;
// }

// $numbers = [10, 74, 54, 15, 30, 22, 17, 47, 3, 105, 1373];

// $max = calMax($numbers);
// $min = calMin($numbers);
// echo "<p>Max is $max</p>";
// echo "<p>Min is $min</p>";

// $Morteza = ['Morteza', 'Ghoddousi', 30, true, 92, 1.85];

// $Morteza = array('Morteza', 'Ghoddousi', 30, true, 92, 1.85);
// $Mahtab = ['Mahtab', 'Asadi', 19, false, 41, 1.55];

// $db = [$Morteza, $Mahtab];

// for ($i=0; $i<sizeof($db); $i++) {
//     $fname = $db[$i][0];
//     $lname = $db[$i][1];
//     $age = $db[$i][2];
//     $weight = $db[$i][4];
//     $height = $db[$i][5];

//     echo "<h1>Welcome $fname $lname </h1>";
//     echo "<p>Your Age is: $age</p>";
//     echo "<p>Your Weight is: $weight kg</p>";
//     echo "<p>Your Height is: $height m</p>";

//     echo "<hr/>";

// }

// $MortezaInfo = array("fname" => "Morteza", "lname" => "Ghoddousi", "age" => 30, 
//                 "isMale" => true, "weight" => 92, "height" => 1.85);

// $MahtabInfo = array("fname" => "Mahtab", "lname" => "Asadi", "age" => 19, 
//                 "isMale" => false, "weight" => 41, "height" => 1.55);

// $db = [$MortezaInfo, $MahtabInfo];

// for ($i=0; $i<sizeof($db); $i++) {
//     $fname = $db[$i]["fname"];
//     $lname = $db[$i]["lname"];
//     $age = $db[$i]["age"];
//     $weight = $db[$i]["weight"];
//     $height = $db[$i]["height"];

//     echo "<h1>Welcome $fname $lname </h1>";
//     echo "<p>Your Age is: $age</p>";
//     echo "<p>Your Weight is: $weight kg</p>";
//     echo "<p>Your Height is: $height m</p>";

//     echo "<hr/>";

// }

// print_r($MahtabInfo);
// echo "<br/>";
// print_r($Mahtab);


// echo $_SERVER['PHP_SELF'];

session_start();
$username = $_SESSION['user'];
$email = $_SESSION['email'];
echo "Welcome $username";
echo "Email $email";

?>

