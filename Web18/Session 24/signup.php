
<?php include('header.php'); ?>
<article class="signup-page">
    <h1>SIGNUP</h1>
    <form method="post">
        <label for="user-signup">
            <p><?php echo $errorsignup['user']; ?></p>
            <input type="text" name="user-signup" placeholder="USERNAME">
        </label>
        <label for="password-signup">
            <p><?php echo $errorsignup['pass']; ?></p>
            <input type="password" name="password-signup" placeholder="PASSWORD">
        </label>
        <label for="email-signup">
            <p><?php echo $errorsignup['email']; ?></p>
            <input type="email" name="email-signup" placeholder="EMAIL">
        </label>
        <label for="submit-signup">
            <input type="submit" name="submit-signup" value="SIGNUP">
        </label>
    </form>
</article>
<?php include('footer.php'); ?>