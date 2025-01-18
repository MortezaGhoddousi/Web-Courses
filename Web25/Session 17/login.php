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
        <article class='login'>
            <h1>welcome to login page</h1>
            <p class='error'> <?php echo $error['total']; ?></p>
            <form method='post'>
            <label for="username">
                    <?php if (empty($error['username'])) { ?>
                        <input type="text" name="username" placeholder="username">
                    <?php } else { ?>
                        <p class='error'><?php echo $error['username']; ?></p>
                        <input type="text" class="error" name="username" placeholder="username">
                    <?php } ?>
                </label>

                <label for="password">
                    <?php if (empty($error['password'])) { ?>
                        <input type="password" name="password" placeholder="password">
                    <?php } else { ?>
                        <p class='error'><?php echo $error['password']; ?></p>
                        <input type="password" class="error" name="password" placeholder="password">
                    <?php } ?>
                </label>

                <label for="submit">
                    <input type="submit" name="submit" value="login">
                </label>
            </form>
            <a href="signup.php">create an account</a>
        </article>
        <script src='./script.js'></script>
    </body>
</html>