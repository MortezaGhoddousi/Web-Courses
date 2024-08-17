<?php

// echo $_SERVER['SCRIPT_NAME'];
// echo"<br />";
// echo $_SERVER['PHP_SELF'];
// echo"<br />";
// echo $_SERVER['REMOTE_ADDR'];
// echo"<br />";
// echo $_SERVER['REMOTE_HOST'];
// echo"<br />";
// echo $_SERVER['REQUEST_URI'];
// echo"<br />";
// echo $_SERVER['SCRIPT_FILENAME'];
// echo"<br />";

session_start();
if (isset($_POST['submit'])){
    $_SESSION['user'] = $_POST['user'];
    header('Location: index.php');
}

?>

<?php include("header.php"); ?>
<article>
    <section>
        <h2>Login</h2>
        <form method="post">
            <lable>
                <input type="text" name="user" placeholder="username">
            </lable>
            <lable>
                <input type="password" name="pass" placeholder="password">
            </lable>
            <lable>
                <input type="submit" name="submit" value="login">
            </lable>
        </form>
    </section>
</article>
<?php include("footer.php"); ?>
        