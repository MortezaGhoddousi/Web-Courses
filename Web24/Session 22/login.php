<?php
include('server.php');
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
            <h1>WELCOME TO LOGIN PAGE</h1>
            <p><?php echo $errors['total']; ?></p>
            <form method="post">
                <label for="username">
                    <p><?php echo $errors['username']; ?></p>
                    <input type="text" name="username" placeholder="username">
                </label>

                <label for="password">
                    <p><?php echo $errors['password']; ?></p>
                    <input type="password" name="password" placeholder="password">
                </label>

                <label for="submit">
                    <input type="submit" name="submit" value="login">
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>