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
        // if (!preg_match($pattern, $username)) {
        //     $errors['username'] = "Username must be only alpha-numeric characters!";
        // }
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

        $conn = mysqli_connect("localhost", 'web27user', 'web27password', 'web27db');
        if ($conn) {
            $hashedPassword = hash('sha256', $password);
            $query = "SELECT * FROM web27tb WHERE username='$username' AND password='$hashedPassword'";
            echo ($query);
            $result = mysqli_query($conn, $query);

            $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
            print_r($result);
            print_r($var);
            if (array_filter($var)) {
                $_SESSION['username'] = $var[0]['username'];
                $_SESSION['password'] = $var[0]['password'];
                $_SESSION['email'] = $var[0]['email'];
                $_SESSION['time'] = $var[0]['time'];
                mysqli_close($conn);
                header("Location: index.php");
            }
            else {
                $errors['total'] = 'username or password wrong! please try again!';
            }
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

            <a href="signup.php">If you have no account, click here</a>
        </article>
        <script src='./script.js'></script>
    </body>
</html>