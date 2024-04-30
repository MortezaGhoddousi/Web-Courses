<?php 
// echo $_SERVER['PHP_SELF'];
// echo "<br/>";
// echo $_SERVER['SERVER_ADDR'];
// echo "<br/>";
// echo $_SERVER['SERVER_NAME'];
// echo "<br/>";
// echo $_SERVER['HTTP_HOST'];
// echo "<br/>";
// echo $_SERVER['REMOTE_ADDR'];
// echo "<br/>";
// echo $_SERVER['REMOTE_HOST'];
// echo "<br/>";
// echo $_SERVER['REMOTE_PORT'];
// echo "<br/>";
// echo $_SERVER['SCRIPT_FILENAME'];
// echo "<br/>";
// echo $_SERVER['SERVER_PORT'];
// echo "<br/>";
// echo $_SERVER['SCRIPT_NAME'];
// echo "<br/>";
// echo $_SERVER['SCRIPT_URL'];
// echo "<br/>";
?>

<?php include('header.php'); ?>
<article>
    <h1>Welcome to My page</h1>
    <?php if(isset($_SESSION['username'])){ ?>
        <h4><?php echo htmlspecialchars($_SESSION['username']); ?></h4>
    <?php } ?>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, aliquam dolor eligendi placeat voluptate eos!</p>
</article>
<?php include('footer.php'); ?>

        