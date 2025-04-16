<?php

session_start();

$pattern = "/^[a-zA-Z\w]+$/";

$errors = array('username' => '', 'password' => '', 'total' => '');

// check HTTP request is get
// if ($_SERVER['REQUEST_METHOD']==="GET"){
//     echo ("GET Request catches");
// }
// check HTTP request is post
if ($_SERVER['REQUEST_METHOD']==="POST") {

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

    if (array_filter($errors)) {
        $errors['total'] = 'there are some errors on your form! please try again!';
    }
    else {
        $_SESSION['username'] = $username;
        $_SESSION['password'] = $password;
        header("Location: index.php");
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
            <h1>Login Form</h1>

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

                <label for="submit">
                    <input type="submit" name="submit" value="Login">
                    <br />
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>