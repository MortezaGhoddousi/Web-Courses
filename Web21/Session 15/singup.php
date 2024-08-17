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

?>


<?php include("header.php"); ?>
<article>
    <section>
        <h2>Register</h2>
        <form action="">
            <lable><input type="text" placeholder="username"></lable>
            <lable><input type="password" placeholder="password"></lable>
            <lable><input type="email" placeholder="email"></lable>
            <lable><input type="submit" value="signup"></lable>
        </form>
    </section>
</article>
<?php include("footer.php"); ?>