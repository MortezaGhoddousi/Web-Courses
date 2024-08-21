<?php 
session_start();

if (!array_filter($_SESSION)) {
    header('Location: login.php');
}

?>




<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./style.css'>
        <title>Session 15</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
        <article>
            <h1>Welcome <?php echo $_SESSION['username']; ?></h1>
            <p>your password: <?php echo $_SESSION['password']; ?></p>
            <p>your email: <?php echo $_SESSION['email']; ?></p>
        </article>
        <footer>
            <p>Copyright &copy Morteza</p>
        </footer>
        <script src='./script.js'></script>
    </body>
</html>