<?php

echo ("<h1>Selection structure</h1>");
echo ("<h4>If statements</h4>");

$age = 15;

if ($age > 18) {
    echo ("<p>You are an adult person!</p>");
    echo ("<p>end of if statement!</p>");
}
else {
    echo ("<p>You are a child person!</p>");
    echo ("<p>end of else statement!</p>");
}

echo ("<p>End of the script!</p>");


$age = 5;
if ($age < 10) {
    echo ("<p>child</p>");
}

if ($age < 18 && $age >= 10) {
    echo ("<p>teenager</p>");
}

if ($age < 50 && $age >= 18) {
    echo ("<p>adult</p>");
}

if ($age > 50) {
    echo ("<p>elder</p>");
}


if ($age < 10) {
    echo ("<p>child</p>");
}
else if ($age < 18 && $age >= 10){
    echo ("<p>teenager</p>");
}
else if ($age < 50 && $age >= 18) {
    echo ("<p>adult</p>");
}
else {
    echo ("<p>elder</p>");
}

$player1 = "scissors";
$player2 = "rock";

if ($player1 == player2) {
    echo ("<p>Draw</p>");
}
else if ($player1 == "rock" && $player2 == "scissors") {
    echo ("<p>player1 won</p>");
}
else if ($player1 == 'rock' && $player2 == 'paper') {
    echo ("<p>player2 won</p>");
}
else if ($player1 == 'scissors' && $player2 == 'paper'){
    echo ("<p>player1 won</p>");
}
else if ($player1 == 'scissors' && $player2 == 'rock') {
    echo ("<p>player2 won</p>");
}
else if ($player1 == 'paper' && $player2 == 'rock'){
    echo ("<p>player1 won</p>");
}
else if ($player1 == 'paper' && $player2 == 'scissors') {
    echo ("<p>player2 won</p>");
}




?>