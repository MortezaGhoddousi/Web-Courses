<?php

$i = 0;
if ($i < 4) {
    echo ("<p>$i</p>");
}

echo ("<h1>While loops</h1>");
$i = 0;
while ($i < 4) {
    echo ("<p>$i</p>");
    $i++;
}

echo ("<h1>For loops</h1>");

for ($i = 0; $i < 4; $i++) {
    echo ("<p>$i</p>");
}

echo ("<h1>Functions</h1>");

function f($x, $y) {
    if ($x < 0 && $y < 0) {
        return 4*$x + 3*$y + 7;
    }
    else if ($x > 0 && $y > 5) {
        return $x**2 + 3*$x*$y + 10*$y**2 + 3;
    }
    else {
        return $x**2 + $y**2;
    }
}

$x = f(4, 7);
echo ($x);
echo (f(-2, 0));
echo (f(-2, -7));


echo ("<h1>Arrays</h1>");

$name1 = 'Ava';
$name2 = 'Mahla';
$name3 = 'Morteza';

echo ("<p>$name1</p>");
echo ("<p>$name2</p>");
echo ("<p>$name3</p>");

$names = ["Ava", "Mahla", "Morteza"];

echo ("<p>$names[0]</p>");
echo ("<p>$names[1]</p>");
echo ("<p>$names[2]</p>");

echo (sizeof($names));

for ($i=0; $i<sizeof($names); $i++) {
    echo ("<h4>$names[$i]</h4>");
}

array_push($names, "Iman");

echo ("<p>$names[3]</p>");

print_r ($names);

echo ("<br />");

$names_new = array (0=>"Ava", 1=>"Mahla", 2=>"Morteza", 3=>"Iman");
print_r ($names_new);
echo ("<br />");

$Info = array("firstName"=> "Morteza", "lastName"=> "Ghoddousi", "age"=> 31, "height"=> 1.86, "weight"=> 86, "isMale"=> true);

print_r ($Info);


$students = array(
    "Ava" => array("firstName"=>"Ava", "lastName"=>"Esmaeli", "age"=>19, "weight"=>55, "height"=>1.70, "isMale"=>false),
    "Mahla" => array("firstName"=>"Mahla", "lastName"=>"Razaaghi", "age"=>21, "weight"=>60, "height"=>1.65, "isMale"=>false),
    "Morteza" => array("firstName"=>"Morteza", "lastName"=>"Ghoddousi", "age"=>31, "weight"=>86, "height"=>1.86, "isMale"=>true)
);


echo ("<p><b>First Name: </b>");
echo ($students["Ava"]["firstName"]);
echo ("</p>");

echo ("<p><b>Last Name: </b>");
echo ($students["Ava"]["lastName"]);
echo ("</p>");

echo ("<p><b>Weight: </b>");
echo ($students["Ava"]["weight"]);
echo ("kg</p>");

echo ("<p><b>Height: </b>");
echo ($students["Ava"]["height"]);
echo ("m</p>");

echo ("<p><b>Age: </b>");
echo ($students["Ava"]["age"]);
echo (" years old</p>");




echo ("<p><b>First Name: </b>");
echo ($students["Mahla"]["firstName"]);
echo ("</p>");

echo ("<p><b>Last Name: </b>");
echo ($students["Mahla"]["lastName"]);
echo ("</p>");

echo ("<p><b>Weight: </b>");
echo ($students["Mahla"]["weight"]);
echo ("kg</p>");

echo ("<p><b>Height: </b>");
echo ($students["Mahla"]["height"]);
echo ("m</p>");

echo ("<p><b>Age: </b>");
echo ($students["Mahla"]["age"]);
echo (" years old</p>");



echo ("<p><b>First Name: </b>");
echo ($students["Morteza"]["firstName"]);
echo ("</p>");

echo ("<p><b>Last Name: </b>");
echo ($students["Morteza"]["lastName"]);
echo ("</p>");

echo ("<p><b>Weight: </b>");
echo ($students["Morteza"]["weight"]);
echo ("kg</p>");

echo ("<p><b>Height: </b>");
echo ($students["Morteza"]["height"]);
echo ("m</p>");

echo ("<p><b>Age: </b>");
echo ($students["Morteza"]["age"]);
echo (" years old</p>");


?>