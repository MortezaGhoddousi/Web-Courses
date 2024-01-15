<?php 
session_start();

if (isset($_POST['submit'])){
    $user = $_POST['user'];
    $_SESSION['user'] = $user;
    header('location: index.php');
}

?>

    <?php include('./header.php'); ?>
    <main>
        <h2>Login</h2>
        <p><?php echo $_SERVER['PHP_SELF']; ?></p>
        <p><?php echo $_SESSION['age']; ?></p>
        <form action="" method="post">
            <label for="user">
                <input type="text" placeholder="Username" name="user">
            </label>
            <label for="pass">
                <input type="password" placeholder="Password" name="pass">
            </label>
            <label for="submit">
                <input type="submit" value="Login" name="submit">
            </label>
        </form>
    </main>
    <?php include('./footer.php'); ?>

