<?php

    // If statements
    $temp = -5;
    if($temp > 30) {
        echo "<p> High Temprature </p>";
    }

    elseif ($temp < 20 && $temp >= 0) {
        echo "<p> Low Temprature </p>";
    }

    elseif ($temp < 0) {
        echo "<p> Freezing Temprature </p>";
    }

    else {
        echo "<p> Normal Temprature </p>";
    }
    echo "<h1> End </h1>";


    // While loops
    $i = 1;
    while($i<5) {
        echo $i;
        echo "<br>";
        $i++;
    }
    echo "<h1> End </h1>";


    // For loops
    for ($i=0; $i<5; $i++) {
        echo $i;
        echo "<br>";
    }
    echo "<h1> End </h1>";

    // Foreach loops
    $names = ["Morteza", "Amir", "Mahdi"];
    // echo "<p>".$names[0]."</p>";
    // echo "<p>".$names[1]."</p>";
    // echo "<p>".$names[2]."</p>";
    for ($i=0; $i<3; $i++){
        echo "<p>".$names[$i]."</p>"; 
    }
    echo "<h1> End </h1>";

    foreach ($names as $name){
        echo "<p>".$name."</p>"; 
    }
    echo "<h1> End </h1>";

    $people = array("online"=>array("Morteza", "Iman", "Hasan"),
    "offline"=>array("Saeed", "Kamal"));

    foreach ($people as $key=>$value){
        echo "<p>".$key."</p>";
        foreach ($people[$key] as $cell) {
            echo "<p>".$cell."</p>";
        } 
    }
    echo "<h1> End </h1>";

    // Example 1
    $scores = [-4, 17, 8, 14, 25];
    for ($i=1; $i<=5; $i++){
        if ($scores[$i-1] >= 10){
            echo "<p> Student ".$i." with the score of ".$scores[$i-1]." has passed </p>"; 
        }
        else {
            echo "<p> Student ".$i." with the score of ".$scores[$i-1]." has failed </p>"; 
        }
    }

?>


<?php include("header.php") ?>
<main>
    <p> Main section of our website </p>
</main>  
<?php include("footer.php") ?>   
    