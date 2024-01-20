<?php include ('header.php'); ?>

<main class="signup">
    <form action="" method="post">
        <div class="error">
            <?php echo $error['total']; ?>
        </div>
        <h3>Login Form</h3>
        <label for="user">
            <div class="error">
                <?php echo $error['user']; ?>
            </div>
            <input type="text" name="user" placeholder="Username">
        </label>
        <label for="password">
            <div class="error">
                <?php echo $error['password']; ?>
            </div>
            <input type="password" name="password" placeholder="Password">
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Login">
        </label>
    </form>
</main>

<?php include ('footer.php'); ?>
