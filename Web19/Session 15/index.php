<?php


echo "<h1/>Logical operators</h1>";

echo "true and true => ";
echo true and true;
echo "<br/>";

echo "true and false => ";
echo true and false;
echo "<br/>";

echo "false and true => ";
echo false and true;
echo "<br/>";

echo "false and false => ";
echo false and false;
echo "<br/>";

echo "true or true => ";
echo true or true;
echo "<br/>";

echo "true or false => ";
echo true or false;
echo "<br/>";

echo "false or true => ";
echo false or true;
echo "<br/>";

echo "false or false => ";
echo false or false;
echo "<br/>";

echo "(4<7) or (true or false) => ";
echo (4<7) or (true or false);
echo "<br/>";


echo "<h1/>Numeric Arrays</h1>";

$student1 = 'Nazanin';
$student2 = 'Maedeh';
$student3 = 'Mohammad';
$student4 = 'Mahdi';

$students = ['Nazanin', 'Maedeh', 'Mohammad', 'Mahdi', 11, 8, 9.5, 12];

echo $student1;
echo "<br/>";

print_r($students);
echo "<br/>";

echo $students[0];
echo " = ";
echo $students[4];
echo "<br/>";

echo $students[1];
echo " = ";
echo $students[5];
echo "<br/>";

echo $students[2];
echo " = ";
echo $students[6];
echo "<br/>";

$families = array('Khanroudi', 'AyinParast', 'Jazayeri', 'Asadi');
print_r($families);
echo "<br/>";

// Example

$scores = array(20, 18.5, 16);
$avg = ($scores[0] + $scores[1]+ $scores[2])/3;
echo "The average of your scores is : $avg";


?>