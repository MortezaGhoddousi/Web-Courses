<?php

session_start();

$conn = mysqli_connect("localhost", 'web27user', 'web27password', 'web27db');

$pattern = "/^[a-zA-Z\w]+$/";

$errors = array('username' => '', 'email' => '', 'password' => '', 'confirmPassword' => '', 'total' => '');

// check HTTP request is get
if ($_SERVER['REQUEST_METHOD']==="GET"){
    if ($conn) {
        $query = "CREATE TABLE IF NOT EXISTS `web27db`.`web27tb` (`id` INT NOT NULL AUTO_INCREMENT,`username` VARCHAR(255) NOT NULL,`password` VARCHAR(255) NOT NULL,`email` VARCHAR(255) NOT NULL,`time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (`id`)) ENGINE = InnoDB";
        $result = mysqli_query($conn, $query);
        if (!$result) {
            $errors['total'] = "database query cannot be run!";
            mysqli_close($conn);
        }
    }
}
// check HTTP request is post
else if ($_SERVER['REQUEST_METHOD']==="POST") {

    // check username input is empty
    if (empty($_POST['username'])) {
        $errors['username'] = "username required!";
    }
    else {
        $username = $_POST['username'];
        if (!preg_match($pattern, $username)) {
            $errors['username'] = "Username must be only alpha-numeric characters!";
        }
    }

    // check email input is empty
    if (empty($_POST['email'])) {
        $errors['email'] = "email required!";
    }
    else {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = "email must be in a correct format!";
        }
    }


    // check password input is empty
    if (empty($_POST['password'])) {
        $errors['password'] = "password required!";
    }
    else {
        $password = $_POST['password'];
        if (!preg_match($pattern, $password)) {
            $errors['password'] = "Password must be only alpha-numeric characters!";
        }
    }

    // check confirm password input is empty
    if (empty($_POST['confirmPassword'])) {
        $errors['confirmPassword'] = "password required!";
    }
    else {
        $confirmPassword = $_POST['confirmPassword'];
        if (!preg_match($pattern, $confirmPassword)) {
            $errors['confirmPassword'] = "Confirm Password must be only alpha-numeric characters!";
        }

        if ($password != $confirmPassword) {
            $errors['confirmPassword'] = "Passwords must be matched!";
        }

    }

    if (array_filter($errors)) {
        $errors['total'] = 'there are some errors on your form! please try again!';
    }
    else {
        $hashedPassword = hash('sha256', $password);
        $query = "INSERT INTO web27tb (username, password, email) VALUES ('$username', '$hashedPassword', '$email')";
        $result = mysqli_query($conn, $query);

        if ($result) {
            mysqli_close($conn);
            header("Location: login.php");
        }
        else {
            $errors['total'] = 'there are some errors on inserting data into the database! please try again!';
        }
    }

}

?>


<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./style.css'>
        <title>Document</title>
    </head>
    <body>
        <article>
            <h1>Register Form</h1>

            <?php if (!empty($errors['total'])) { ?>
                <p class="error"><?php echo ($errors['total']); ?></p>
            <?php } ?>

            <form method="post">
                <label for="username">
                    <div>
                        <?php if (empty($errors['username'])) { ?>
                            <input type="text" name="username" placeholder="username">
                        <?php }else { ?>
                            <p class="error"><?php echo ($errors['username']); ?></p>
                            <input type="text" class="error" name="username" placeholder="username">
                        <?php } ?>
                    </div>
                    <br />
                </label>

                <label for="email">
                    <div>
                        <?php if (empty($errors['email'])) { ?>
                            <input type="text" name="email" placeholder="email">
                        <?php }else { ?>
                            <p class="error"><?php echo ($errors['email']); ?></p>
                            <input type="text" class="error" name="email" placeholder="email">
                        <?php } ?>
                    </div>
                    <br />
                </label>

                <label for="password">
                    <div>
                        <?php if (empty($errors['password'])) { ?>
                            <input type="password" name="password" placeholder="password">
                        <?php }else { ?>
                            <p class="error"><?php echo ($errors['password']); ?></p>
                            <input type="password" class="error" name="password" placeholder="password">
                        <?php } ?>
                    </div>
                    <br />
                </label>

                <label for="confirmPassword">
                    <div>
                        <?php if (empty($errors['confirmPassword'])) { ?>
                            <input type="password" name="confirmPassword" placeholder="confirmPassword">
                        <?php }else { ?>
                            <p class="error"><?php echo ($errors['confirmPassword']); ?></p>
                            <input type="password" class="error" name="confirmPassword" placeholder="confirmPassword">
                        <?php } ?>
                    </div>
                    <br />
                </label>

                <label for="submit">
                    <input type="submit" name="submit" value="Register">
                    <br />
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>