
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
        <title>Session 17</title>
        <style>
            div p {
                color: red;
                font-size: 12px;
            }

            div h4 {
                color: white;
                font-size: 14px;
                background: red;
                border: 2px solid red;
                border-radius: 7px;
                width: fit-content;
                padding: 5px;
            }

            label {
                display: block;
            }
        </style>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="login.php">Login</a></li>
                <li><a href="signup.php">Register</a></li>
            </ul>
        </nav>
        <article>
            <h2>Sign up</h2>
            <?php if(!empty($error['total'])) { ?>
                <div>
                    <h4><?php echo $error['total']; ?></h4>
                </div>
            <?php } ?>
            <form method="post">
                <label for="username">
                    <?php if(!empty($error['username'])) { ?>
                        <div>
                            <p><?php echo $error['username']; ?></p>
                        </div>
                    <?php } ?>
                    <input type="text" name="username" placeholder="username">
                </label>
                <label for="password">
                    <?php if(!empty($error['password'])) { ?>
                        <div>
                            <p><?php echo $error['password']; ?></p>
                        </div>
                    <?php } ?>
                    <input type="password" name="password" placeholder="password">
                </label>
                <label for="email">
                    <?php if(!empty($error['email'])) { ?>
                        <div>
                            <p><?php echo $error['email']; ?></p>
                        </div>
                    <?php } ?>
                    <input type="text" name="email" placeholder="email">
                </label>
                <label for="submit">
                    <input type="submit" name="submit" value="Signup">
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>