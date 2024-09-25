<?php
session_start();
// echo $_SERVER['PHP_SELF'];
// echo "<br/>";
// echo $_SERVER['SERVER_ADDR'];

$user = $_SESSION['user'];
$pass = $_SESSION['pass'];

echo "<h1>WELCOME $user</h1>";
echo "<p>Your password: $pass</p>";

?>


