<?php

echo ("<h1>Predefined super global variables</h1>");
echo ("<h2>SERVER</h2>");
echo ($_SERVER['PHP_SELF']);

echo ("<br />");
print_r($_SERVER);

echo ("<h2>Session</h2>");

session_start();

$username = $_SESSION['user'];
$password = $_SESSION['pass'];

echo ("username: $username" );
echo ("<br />");

echo ("password: $password" );
echo ("<br />");

echo ("<h2>GET & POST</h2>");





?>