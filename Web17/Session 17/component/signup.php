

<?php include('./header.php'); ?>
<main>
    <h2>Signup</h2>
    <p><?php echo $_SERVER['PHP_SELF']; ?></p>
    <form action="" method="post">
        <label for="user">
            <input type="text" placeholder="Username" name="user">
        </label>
        <label for="pass">
            <input type="password" placeholder="Password" name="pass">
        </label>
        <label for="email">
            <input type="email" placeholder="Email" name="email">
        </label>
        <label for="tel">
            <input type="tel" placeholder="Tel" name="tel">
        </label>
        <label for="submit">
            <input type="submit" value="Login" name="submit">
        </label>
    </form>
</main>
<?php include('./footer.php'); ?>

