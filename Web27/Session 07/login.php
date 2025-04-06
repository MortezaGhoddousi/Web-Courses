<?php

$fname = "Mahla";
$lname = "Razzaghi";

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
            <h1>Hello from php</h1>
            <p>login page</p>
            <a href="index.php">return</a>

            <?php echo ("<p>$fname</p>"); ?>
            <?php echo ("<p>$lname</p>"); ?>

        </article>
        <script src='./script.js'></script>
    </body>
</html>