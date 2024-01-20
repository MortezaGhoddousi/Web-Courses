<?php include ('header.php'); ?>

<main class="signup">
    <form action="" method="post">
        <h3>Signup Form</h3>
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
        <label for="password1">
            <div class="error">
                <?php echo $error['password']; ?>
            </div>
            <input type="password" name="password1" placeholder="Confirm Password">
        </label>
        <label for="email">
            <div class="error">
                <?php echo $error['email']; ?>
            </div>
            <input type="text" name="email" placeholder="Email">
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Signup">
        </label>
    </form>
</main>

<?php include ('footer.php'); ?>
