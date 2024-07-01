<?php
session_start();
echo $_SERVER['SCRIPT_NAME'];
echo "<br/>";
echo $_SERVER['HTTP_HOST'];

echo "<br/>";

// $username = 'Vahid';
// $password = '123';

// $_SESSION['user'] = $username;
// $_SESSION['pass'] = $password;


if (isset($_GET['submit'])){

    $_SESSION['username'] = $_GET['username'];
    $_SESSION['password'] = $_GET['password'];
    $_SESSION['email'] = $_GET['email'];

    header('Location: main.php');

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
            <div>
                <form method="GET">
                    <label for="user">
                        <input type="text" name="username" placeholder="Username: ">
                    </label>
                    <label for="password">
                        <input type="password" name="password" placeholder="Password: ">
                    </label>
                    <label for="email">
                        <input type="email" name="email" placeholder="Email: ">
                    </label>
                    <label for="submit">
                        <input type="submit" name="submit" value="Submit">
                    </label>
                </form>
            </div>
        </article>
        <script src='./script.js'></script>
    </body>
</html>