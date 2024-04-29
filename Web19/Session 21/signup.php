<?php include("php.php"); ?>
<?php include("header.php"); ?>
<section class="form">
    <h1>SIGN UP</h1>
    <?php
    if (array_filter($errors)){ ?>
    <p><?php echo htmlspecialchars($errors['total']); ?></p>
    <?php } ?>

    <form action="" method="post">
        <p><?php echo htmlspecialchars($errors['user']); ?></p>
        <label for="user">
            <input type="text" name="user" placeholder="Username">
        </label>
        <p><?php echo htmlspecialchars($errors['password']); ?></p>
        <label for="password">
            <input type="password" name="password" placeholder="Password">
        </label>
        <p><?php echo htmlspecialchars($errors['email']); ?></p>
        <label for="email">
            <input type="text" name="email" placeholder="Email">
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="SIGNUP">
        </label>
    </form>
</section>
<?php include("footer.php"); ?>

        