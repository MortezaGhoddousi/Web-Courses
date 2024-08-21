<?php 
session_start();
include("php.php"); 

echo htmlspecialchars($_POST['username']);
?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./style.css'>
        <title>Session 15</title>
        <style>
            article p {
                font-size: 12px;
                color: red;
                font-weight: bold;
            }

            h5 {
                border: 2px solid red;
                background: orangered;
                color: white;
                padding: 7px;
                width: fit-content;
                border-radius: 7px;
            }
        </style>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="signup.php">Signup</a></li>
                <li><a href="login.php">Login</a></li>
            </ul>
        </nav>
        <article>
            <h2>Login</h2>
            <?php if (!empty($error['total'])) { ?>
                <div><h5><?php echo $error['total']; ?></h5></div>
            <?php } ?>
            <form method="post">
                <label for="username">
                    <div><p><?php echo $error['username']; ?></p></div>
                    <input type="text" name="username" placeholder="username">
                </label>
                <label for="password">
                    <div><p><?php echo $error['password']; ?></p></div>
                    <input type="password" name="password" placeholder="password">
                </label>
                <label for="submit">
                    <input type="submit" name="submit" value="login">
                </label>
            </form>
            <a href="signup.php">Register</a>
        </article>
        <p>Copyright &copy Morteza</p>

        <script src='./script.js'></script>
    </body>
</html>