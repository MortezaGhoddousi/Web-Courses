<?php

$age = 38;

if ($age >= 18) {
    echo ("<h1>Adult</h1>");
}
else if ($age >= 10 && $age < 18) {
    echo ("<h1>Teenager</h1>");
}
else {
    echo ("<h1>Child</h1>");
}

echo ("<p>End</p>");


?>