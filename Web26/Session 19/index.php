<?php
session_start();

if (empty($_SESSION["isLoggedIn"])){
    header("Location: login.php");
}

$username = $_SESSION["username"];
$password = $_SESSION["password"];
$email = $_SESSION["email"];

if (isset($_POST['submit'])){
    $_SESSION["isLoggedIn"] = "";
    header("Location: login.php");
}

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
    <article>
        <h1>Profile page</h1>
        <p>welcome to your profile page</p> 
        <p>your username: <?php echo($username); ?></p>  
        <p>your password: <?php echo($password); ?></p>  
        <p>your email: <?php echo($email); ?></p>  
    </article>
    <form method="post">
        <input type="submit" name="submit" value="logout">
    </form>
</body>
</html>