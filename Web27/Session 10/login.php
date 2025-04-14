<?php

session_start();
// $username = "Morteza";
// $_SESSION['user'] = $username;

echo ($_SERVER['REQUEST_METHOD']);
echo ('<br />');

if (isset($_POST['submit'])) {
    echo ($_POST['username']);
    echo ('<br />');

    echo ($_POST['password']);
    echo ('<br />');

    $_SESSION['user'] = $_POST['username'];
    $_SESSION['pass'] = $_POST['password'];

}


?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./style.css'>
        <title>Document</title>
    </head>
    <body>
        <article>
            <h1>Login</h1>
            <form action="php.php" method="post">
                <label for="username">
                    <input type="text" name="username" placeholder="username" />
                </label>

                <label for="password">
                    <input type="password" name="password" placeholder="password" />
                </label>

                <label for="submit">
                    <input type="submit" name="submit" value="Login" />
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>

