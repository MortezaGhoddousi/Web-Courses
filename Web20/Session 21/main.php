<?php
session_start();
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
                <h1>hello <?php echo $_SESSION['username']; ?></h1>
                <p>Your password: <?php echo $_SESSION['password']; ?></p>
                <p>Your email: <?php echo $_SESSION['email']; ?></p>
            </div>
        </article>
        <script src='./script.js'></script>
    </body>
</html>