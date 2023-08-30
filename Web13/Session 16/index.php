<?php

// $x = "Morteza1";

// switch($x){
//     case "Ali":
//         echo "Case 1 is activated";
//         echo "<br> Ali";
//         break;
//     case "Morteza":
//         echo "Case 2 is activated";
//         echo "<br> Morteza";
//         break;
//     case "Parimah":
//         echo "Case 3 is activated";
//         echo "<br> Parimah";
//         break;
//     default:
//         echo "Cannot be matched";
// }

// if ($x == "Ali"){
//     echo "Case 1 is activated";
//     echo "<br> Ali";
// }
// elseif($x == "Morteza"){
//     echo "Case 2 is activated";
//     echo "<br> Morteza";
// }
// elseif($x == "Parimah"){
//     echo "Case 3 is activated";
//     echo "<br> Parimah";
// }
// else{
//     echo "cannot be matched";
// }


// function multipy ($x, $y){
//     echo $x*$y;
//     return $x*$y;
// }

// $x = multipy(3, 2);
// echo $x;

// $a = 2;
// $b = 15;

// $x = multipy($a, $b);
// echo $x;

function sayHello($x="Morteza"){
    echo "Hello ".$x;
}

sayHello();



?>

<?php include("header.php"); ?>
<article>
    <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit eum commodi, vel possimus corrupti architecto officia itaque reiciendis error sed enim? In minima enim ducimus repellat ipsam cum. Cupiditate?</p>
    </section>

    <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum debitis magnam nobis pariatur recusandae. Fugiat sed odio facere voluptate.</p>
    </section>
</article>

<?php require("footer.php"); ?>
