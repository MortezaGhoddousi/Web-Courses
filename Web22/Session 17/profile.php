<?php
session_start();

if (!array_filter($_SESSION)) {
    header('Location: login.php');
}

if (isset($_POST['submit'])) {
    if (empty($_POST['password'])) {
        if (isset($_POST['checkbox'])) {
            $conn = mysqli_connect("localhost", "web22", "web22", "web22db");
            $username = $_SESSION['username'];
            $query = "DELETE FROM web22tb WHERE username='$username'";
            $result = mysqli_query($conn, $query);
            if ($result) {
                mysqli_close($conn);
                header('Location: logout.php'); 
            }
        }
    }
    else {
        $username = $_SESSION['username'];
        $password = $_POST['password'];
        $conn = mysqli_connect("localhost", "web22", "web22", "web22db");
        $query = "UPDATE web22tb SET password='$password' WHERE username='$username'";
        $result = mysqli_query($conn, $query);
        if ($result) {
            mysqli_close($conn);
            header('Location: index.php');
        }
    }
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
            Your Profile
            <form method="post">
                <label for="password">
                    <input type="password" name="password" placeholder="New Password">
                </label>

                <label for="checkbox">
                    Delete your account
                    <input type="checkbox" name="checkbox" value="delete">
                </label>

                <label for="submit">
                    <input type="submit" name="submit" value="Submit">
                </label>
            </form>
            <a href="index.php">Home page</a>
        </article>
        <script src='./script.js'></script>
    </body>
</html>