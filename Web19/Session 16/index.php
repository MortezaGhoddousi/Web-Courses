<?php

echo "<h1>Example1:</h1>";

$scores = array(20, 18, 19.5, 16, 12);

$average = ($scores[0] + $scores[1] + $scores[2] + $scores[3] + $scores[4])/sizeof($scores);

echo "The average of your scores is: $average";
echo "<br/>";

$variance = (($scores[0]-$average)**2 + ($scores[1]-$average)**2 + ($scores[2]-$average)**2 +
($scores[3]-$average)**2 + ($scores[4]-$average)**2)/sizeof($scores);

echo "The variance of your scores is: $variance";
echo "<br/>";

echo "<h1>Numeric Arrays</h1>";

$students = array(array('Nazanin', 'Khanroudi', 22, true) , 
                  array('Maedeh', 'AyinParast', 19, true) , 
                  array('Mahdi', 'Asadi', 38, false) ,
                  array('Mohammad', 'Jazayeri', 23, false));

echo $students[0][0]; 
echo " ";
echo $students[0][1]; 
echo "<br/>";

echo $students[1][0]; 
echo " ";
echo $students[1][1]; 
echo "<br/>";

echo "<h1>Associative Arrays</h1>";

$teacher['fname'] = 'Morteza';
$teacher['lname'] = 'Ghoddousi';
$teacher['age'] = 30;

$student1 = array('fname'=>"Mahdi", 'lname'=>"Asadi", 'age'=>38);

print_r($student1);
echo "<br/>";

print_r($teacher);
echo "<br/>";

echo $student1['fname'], " ", $student1['lname'];
echo "<br/>";

$students = array('student1'=>array('fname'=>'Mahdi', 'lname'=>'Asadi', 'score'=>20),
                  'student2'=>array('fname'=>'Maedeh', 'lname'=>'AyinParast', 'score'=>18),
                  'student3'=>array('fname'=>'Nazanin', 'lname'=>'Khanroudi', 'score'=>19.5),
                  'student4'=>array('fname'=>'Mohammad', 'lname'=>'Jazayeri', 'score'=>16));

echo $students['student1']['fname'], " ", $students['student1']['lname'],  " = ", $students['student1']['score'];
echo "<br/>";
echo $students['student2']['fname'], " ", $students['student2']['lname'],  " = ", $students['student2']['score'];
echo "<br/>";
echo $students['student3']['fname'], " ", $students['student3']['lname'],  " = ", $students['student3']['score'];
echo "<br/>";
echo $students['student4']['fname'], " ", $students['student4']['lname'],  " = ", $students['student4']['score'];
echo "<br/>";


echo "<h1 style='color: red;'>If else statements</h1>";

$age = 17;

if ($age >= 18) {
    echo "<h4>Adult</h4>";
}
else if($age >= 10 && $age < 18){
    echo "<h4>Teenager</h4>";
}
else {
    echo "<h4>Child</h4>";
}



?>