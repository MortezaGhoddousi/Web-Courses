<?php
session_start();

if (!filter_var($_SESSION['username'])) {
    header("Location: login.php");
}

if (isset($_POST["logoutbtn"])){
    header("Location: logout.php");
}

if (isset($_POST["deletebtn"])){

    $conn = mysqli_connect('localhost', 'web23', 'web23', 'web23db');

    $user = $_SESSION['username'];
    $query = "DELETE FROM web23tb WHERE username='$user'";
    $result = mysqli_query($conn, $query);
    if ($result) {
        header("Location: logout.php");
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
        <title>Document</title>
    </head>
    <body>
        <article>
            <h1>Welcome to the best page on the net!</h1>
            <p>Your Username: <?php echo $_SESSION['username']; ?></p>
            <p>Your Password: <?php echo $_SESSION['password']; ?></p>
            <p>Your Email: <?php echo $_SESSION['email']; ?></p>
            <p>You have signed up on: <?php echo $_SESSION['time']; ?></p>

            <form method="post">
                <button type="submit" name="logoutbtn">Logout</button>
            </form>

            <form method="post">
                <button type="submit" name="deletebtn">Delete</button>
            </form>

        </article>
        <script src='./script.js'></script>
    </body>
</html>