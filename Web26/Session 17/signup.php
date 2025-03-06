<?php

if (isset($_POST["submit"])) {

    if (empty($_POST["username"])) {
        echo ("username must be filled");
    }
    else {
        echo ($_POST["username"]);
    }

    if (empty($_POST["email"])) {
        echo ("email must be filled");
    }

    if (empty($_POST["password"])) {
        echo ("password must be filled");
    }

    if (empty($_POST["confirmpassword"])) {
        echo ("confirm password must be filled");
    }
    
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
        <h1>welcome to signup page</h1>
        <form method="post">
            <label for="username">
                <input type="text" name="username" placeholder="username">
            </label>

            <label for="email">
                <input type="email" name="email" placeholder="email">
            </label>

            <label for="password">
                <input type="password" name="password" placeholder="password">
            </label>

            <label for="confirmpassword">
                <input type="password" name="confirmpassword" placeholder="confirm password">
            </label>

            <label for="submit">
                <input type="submit" name="submit" value="register">
            </label>
        </form>
    </article>
</body>
</html>