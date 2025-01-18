<?php

include('php.php');

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
        <article class='main'>
            <h1>welcome to your profile page</h1>
            <p>your username is <?php echo $_SESSION['username']; ?></p>
            <p>your email is <?php echo $_SESSION['email']; ?></p>
            <p>your password is <?php echo $_SESSION['password']; ?></p>
            <form method='post'>
                <input type="submit" value='logout' name='logout' />
                <input type="submit" value="delete account" name="delete" />
            </form>
        </article>
    </body>
</html>