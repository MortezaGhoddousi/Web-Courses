<?php
// example 01
echo ("<h1>Example 1</h1>");
function calAverage($arr) {
    // $sum = $arr[0]+$arr[1]+$arr[2]+$arr[3]+$arr[4]+$arr[5]+$arr[6]+$arr[7]+$arr[8];
    $sum = 0;
    $l = sizeof($arr);
    for ($i=0; $i<$l; $i++) {
        $sum = $sum+$arr[$i];
    }
    return $sum/$l;
}

$myNumbers = [40, 22, 10, 7, 9, 50, 34, 31, 14];
echo (calAverage($myNumbers));
echo ("<br />");
echo (calAverage([40, 11, 5]));
echo ("<br />");
echo (calAverage([115, 4, 8, 9, 10, 54, 67]));
echo ("<br />");

// example 02
echo ("<h1>Example 2</h1>");

function calMinMax ($num) {
    $i = 0;
    $max = $num[0];
    $min = $num[0];
    
    while ($i < sizeof($num)) {
        if ($num[$i] > $max) {
            $max = $num[$i];
        }
    
        if ($num[$i] < $min) {
            $min = $num[$i];
        }
    
        $i++;
    }
    return [$min, $max];
}

$num = [3, 7, 2, 15];
$output = calMinMax ($num);

echo ("<p>maximum number is: $output[1]</p>");
echo ("<p>minimum number is: $output[0]</p>");

$num = [115, 4, 8, 9, 10, 54, 67];
$output = calMinMax ($num);

echo ("<p>maximum number is: $output[1]</p>");
echo ("<p>minimum number is: $output[0]</p>");

echo ("<h1>Associative Arrays</h1>");

$myInfo1 = ["Morteza", "Ghoddousi", true, 1.86, 88, 30, "mgh@gmail.com", "./people-1.jpg"];

$myInfo2 = array("Morteza", "Ghoddousi", true, 1.86, 88, 30, "mgh@gmail.com", "./people-1.jpg");

$myInfo3 = array(0=>"Morteza", 1=>"Ghoddousi", 2=>true, 3=>1.86, 4=>88, 5=>30, 6=>"mgh@gmail.com", 7=>"./people-1.jpg");

print_r($myInfo1);
echo ("<br />");

print_r($myInfo2);
echo ("<br />");

print_r($myInfo3);
echo ("<br />");

$myInfo4 = array("fname"=>"Morteza", "lname"=>"Ghoddousi", "isMale"=>true, "height"=>1.86, "weight"=>88, "age"=>30, "email"=>"mgh@gmail.com", "profileImage"=>"./people-1.jpg");
print_r($myInfo4);
echo ("<br />");

echo ($myInfo1[0]);
echo ("<br />");

echo ($myInfo4["fname"]);
echo ("<br />");

?>