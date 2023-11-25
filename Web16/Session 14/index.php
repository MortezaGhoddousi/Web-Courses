
<?php

function f($x, $y){
    $a = 2*$x + $y*$y + 3; 
    echo $a;
    echo "The end of function <br>";
    return $a;
}

echo "Hello <br>";
$first = f(3, 6);
$second = f(5, 9);
$a = f(1, 2);

echo $a;
$b = $a+3;
echo "<p> $b </p>";
echo "End of the script <br>";

function sayHellotoUser($x){
    echo "<h1> Hello $x </h1>";
}

sayHellotoUser("Morteza");
sayHellotoUser("Milad");

?>



<?php include('header.php'); ?>
<section class="main">
    <h1>Main page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam animi ullam aliquam quibusdam nesciunt beatae culpa minima pariatur sunt neque porro eligendi, itaque aperiam odit sit. Adipisci reiciendis ipsam ad.</p>
</section>
<?php include('footer.php'); ?>
