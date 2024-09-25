<?php 

session_start();

if (isset($_POST['submit'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $_SESSION['user'] = $user;
    $_SESSION['pass'] = $pass;

    header('Location: index.php');
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
            <h1>Login form</h1>
            <form method="post">
                <label for="username">
                    <input type="text" name="username" placeholder="Username: ">
                </label>
                <label for="password">
                    <input type="password" name="password" placeholder="Password: ">
                </label>
                <label for="submit">
                    <input type="submit" name="submit" value="Login">
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>