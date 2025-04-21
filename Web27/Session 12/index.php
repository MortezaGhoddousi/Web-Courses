<?php
session_start();

// checking user logged in
if (empty($_SESSION['username'])) {
    header('Location: login.php');
}

// checking logout
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $_SESSION['username'] = "";
    $_SESSION['password'] = "";
    $_SESSION['email'] = "";
    $_SESSION['time'] = "";
    header('Location: login.php');
}

// if (isset($_POST['submit'])) {
//     $_SESSION['username'] = "";
//     $_SESSION['password'] = "";
//     header('Location: login.php');
// }


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
            <h1>Welcome to home page</h1>
            <p>welcome user: <?php echo (htmlspecialchars($_SESSION['username'])); ?></p>

            <form method="post">
                <input type="submit" name="submit" value="Logout">
            </form>

            <form action="update.php" method="post">
                <input type="password" name="oldPassword" placeholder="Old Password">
                <input type="password" name="newPassword" placeholder="New Password">
                <input type="submit" name="submit" value="Update">
            </form>

            <form action="delete.php" method="post">
                <input type="submit" name="submit" value="Delete Account">
            </form>

        </article>
        <script src='./script.js'></script>
    </body>
</html>