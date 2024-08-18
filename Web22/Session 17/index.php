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
        <title>Session 17</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="logout.php">Logout</a></li>
                <li><a href="profile.php"><?php echo $_SESSION['username']; ?></a></li>
            </ul>
        </nav>
        <article>
            <h1>Welcome to the best page on the Internet!</h1>
            <p>Welcome <?php echo $_SESSION['username']; ?></p>
            <p>Your Password: <?php echo $_SESSION['password']; ?></p>
            <p>Your Email: <?php echo $_SESSION['email']; ?></p>
            <p>Your have registered on: <?php echo $_SESSION['time']; ?></p>
        </article>
        <script src='./script.js'></script>
    </body>
</html>