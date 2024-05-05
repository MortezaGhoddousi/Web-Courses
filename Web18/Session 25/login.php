

<?php include('header.php'); ?>
<article class="login-page">
    <h1>LOGIN</h1>
    <p><?php echo $errorlogin['total']; ?></p>
    <form method="post">
        <label for="user-login">
            <p><?php echo $errorlogin['user']; ?></p>
            <input type="text" name="user-login" placeholder="USERNAME">
        </label>
        <label for="password-login">
            <p><?php echo $errorlogin['pass']; ?></p>
            <input type="password" name="password-login" placeholder="PASSWORD">
        </label>
        <label for="submit-login">
            <input type="submit" name="submit-login" value="LOGIN">
        </label>
    </form>
    <a href="Signup.php">Signup</a>
</article>
<?php include('footer.php'); ?>
