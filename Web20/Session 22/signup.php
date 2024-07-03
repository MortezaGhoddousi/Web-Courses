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
        <article>
            <h1>SignUp!</h1>
            <div>
                <p style="color: red; font-size: 18px";><?php echo $error['total']; ?></p>
            </div>
            <form method="post">
                <div>
                    <p style="color: red; font-size: 14px;"><?php echo $error['username']; ?></p>
                    <label for="username">
                        <input type="text" name="username" placeholder="username">
                    </label>
                </div>
                <div>
                    <p style="color: red; font-size: 14px;"><?php echo $error['password']; ?></p>
                    <label for="password">
                        <input type="password" name="password" placeholder="password">
                    </label>
                </div>
                <div>
                    <p style="color: red; font-size: 14px;"><?php echo $error['repassword']; ?></p>
                    <label for="password">
                        <input type="password" name="repassword" placeholder="confirm password">
                    </label>
                </div>
                <div>
                    <p style="color: red; font-size: 14px;"><?php echo $error['email']; ?></p>
                    <label for="email">
                        <input type="email" name="email" placeholder="email">
                    </label>
                </div>
                <div>
                    <label for="submit">
                        <input type="submit" name="submit" value="signup">
                    </label>
                </div>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>