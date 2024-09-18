<?php

$i = 0;
while ($i<3) {
    echo "<p>Hello</p>";
    $i++;
}


echo "<h1>For loop</h1>";

for ($i=0; $i<3; $i++) {
    echo "<p>Hello</p>";
}

$names = ['Melika', 'Rozhan', 'Arash', 'Iman', 'Saeed', 'Nazgol', 'Milad', "Pooria", 'AmirALi', 'Atena', 'Hamed', 'Elham'];
echo "<h1>$names[0]</h1>";
echo "<h1>$names[1]</h1>";
echo "<h1>$names[2]</h1>";

for ($i=0; $i<sizeof($names); $i++){
    echo "<h2>$names[$i]</h2>";
}

$Names = array('Melika', 'Rozhan', 'Arash', 'Iman', 'Saeed', 'Nazgol', 'Milad', "Pooria", 'AmirALi', 'Atena', 'Hamed', 'Elham');

$i = 0;
while ($i < sizeof($Names)) {
    echo "<h3>$names[$i]</h3>";
    $i++;
}

$Info = array('Morteza', 'Ghoddousi', 30, 1.86, 92, true);

$Information = array('fname'=>'Morteza', 'lname' => 'Ghoddousi', 'age' => 30, 'height' => 1.86, 'weight' => 92, 'isMale' => true);

echo $Information['fname'];

$students = array(0 => array('Melika', 'Anvari', 19, 1.68, 52, false), 
                  1 => array('Rozhan', 'Bagherzadeh', 20, 1.63, 68, false),
                  2 => array('Arash', 'Sadeghi', 18, 1.67, 65, true),
                  3 => array('Morteza', 'Ghoddousi', 30, 1.86, 92, true));

// echo $students['Rozhan'][0];
// echo $students['Rozhan'][1];

// echo '<section>';
//     echo '<h3>';
//         echo $students[0][0];
//         echo ' ';
//         echo $students[0][1];
//     echo '</h3>';

//     echo '<p>';
//         echo "Age: ";
//         echo $students[0][2];
//     echo '</p>';

//     echo '<p>';
//         echo "Height: ";
//         echo $students[0][3];
//         echo "m";
//     echo '</p>';

//     echo '<p>';
//         echo "Weight: ";
//         echo $students[0][4];
//         echo "kg";
//     echo '</p>';
// echo '</section>';

// echo '<section>';
//     echo '<h3>';
//         echo $students[1][0];
//         echo ' ';
//         echo $students[1][1];
//     echo '</h3>';

//     echo '<p>';
//         echo "Age: ";
//         echo $students[1][2];
//     echo '</p>';

//     echo '<p>';
//         echo "Height: ";
//         echo $students[1][3];
//         echo "m";
//     echo '</p>';

//     echo '<p>';
//         echo "Weight: ";
//         echo $students[1][4];
//         echo "kg";
//     echo '</p>';
// echo '</section>';

// echo '<section>';
//     echo '<h3>';
//         echo $students[2][0];
//         echo ' ';
//         echo $students[2][1];
//     echo '</h3>';

//     echo '<p>';
//         echo "Age: ";
//         echo $students[2][2];
//     echo '</p>';

//     echo '<p>';
//         echo "Height: ";
//         echo $students[2][3];
//         echo "m";
//     echo '</p>';

//     echo '<p>';
//         echo "Weight: ";
//         echo $students[2][4];
//         echo "kg";
//     echo '</p>';
// echo '</section>';

// echo '<section>';
//     echo '<h3>';
//         echo $students[3][0];
//         echo ' ';
//         echo $students[3][1];
//     echo '</h3>';

//     echo '<p>';
//         echo "Age: ";
//         echo $students[3][2];
//     echo '</p>';

//     echo '<p>';
//         echo "Height: ";
//         echo $students[3][3];
//         echo "m";
//     echo '</p>';

//     echo '<p>';
//         echo "Weight: ";
//         echo $students[3][4];
//         echo "kg";
//     echo '</p>';
// echo '</section>';

echo "<hr/>";

for ($i=0; $i<sizeof($students); $i++) {
    echo '<section>';
        echo '<h3>';
            echo $students[$i][0];
            echo ' ';
            echo $students[$i][1];
        echo '</h3>';

        echo '<p>';
            echo "Age: ";
            echo $students[$i][2];
        echo '</p>';

        echo '<p>';
            echo "Height: ";
            echo $students[$i][3];
            echo "m";
        echo '</p>';

        echo '<p>';
            echo "Weight: ";
            echo $students[$i][4];
            echo "kg";
        echo '</p>';
    echo '</section>';
}

?>