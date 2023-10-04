<?php

$people = array("name"=>array("Morteza", "Parimah", "Ehsan", "Alireza"),
"lastname"=>array("Ghoddousi", "Joshani", "Khakshour", "Ghafourian"),
"age"=>array(29, 21, 18, 29),
"gender"=>array("male", "female", "male", "male")
);

// foreach($people as $key=>$value){
//     foreach($value as $i){
//         echo $i. "<br>";
//     }
// }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <?php foreach($people as $key=>$value){
            if ($key == "gender"){
                foreach($value as $i){ 
                    if ($i == "male"){?>
                        <p style="color:blue;"><?php echo $i; ?></p>
                        <?php } else{ ?>
                        <p style="color:red;"><?php echo $i; ?></p>
                    <?php }}}} ?>
    </div>
</body>
</html>