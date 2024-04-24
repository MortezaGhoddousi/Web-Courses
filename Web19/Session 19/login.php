<?php
session_start();


if(isset($_POST['submit'])){
    $user = $_POST['user'];
    echo $user;
    echo "<br/>";

    $pass = $_POST['pass'];
    echo $pass;
    echo "<br/>";
    $_SESSION['user'] = $user;
    header("Location: index.php");
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
    <header>
        <h1>Welcome to your site</h1>
    </header>

    <main>
        <form method="post">
            <label for="user">
                <input type="text" name="user" placeholder="USERNAME">
            </label>
            <label for="pass">
                <input type="password" name="pass" placeholder="PASSWORD">
            </label>
            <label for="submit">
                <input type="submit" name="submit" value="LOGIN">
            </label>
        </form>
    </main>
</body>
</html>