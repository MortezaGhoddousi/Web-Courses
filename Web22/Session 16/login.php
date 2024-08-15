
<?php 
session_start();
include ("php.php");
?>

<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./style.css'>
        <title>Session 16</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="login.php">Login</a></li>
                <li><a href="signup.php">Register</a></li>
            </ul>
        </nav>
        <article>
            <h2>Login</h2>
            <form method="post">
                <label for="username">
                    <input type="text" name="username" placeholder="username">
                </label>
                <label for="password">
                    <input type="password" name="password" placeholder="password">
                </label>
                <label for="submit">
                    <input type="submit" name="submit" value="Login">
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>