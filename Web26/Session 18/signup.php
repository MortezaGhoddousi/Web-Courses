<?php

session_start();

$pattern = "/^[a-zA-Z1-9]\w+$/";

$errors = array("username"=>"", "email"=>"", "password"=>"", "confirmpassword"=>"", "total"=>"");


if (isset($_POST["submit"])) {

    if (empty($_POST["username"])) {
        $errors["username"] = "username must be filled";
    }
    else {
        $username = $_POST["username"];
        if(!preg_match($pattern, $username)){
            $errors["username"] = "Username can be alpha-numeric charachters!";
        }
    }

    if (empty($_POST["email"])) {
        $errors["email"] = "email must be filled";
    }
    else {
        $email = $_POST["email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors["email"] = "email must be in a correct shape!";
        }

    }

    if (empty($_POST["password"])) {
        $errors["password"] = "password must be filled";
    }
    else {
        $password = $_POST["password"];
        if(!preg_match($pattern, $password)){
            $errors["password"] = "Password can be alpha-numeric charachters!";
        }
    }

    if (empty($_POST["confirmpassword"])) {
        $errors["confirmpassword"] = "confirm password must be filled";
    }
    else {
        $confirmpassword = $_POST["confirmpassword"];
        if(!preg_match($pattern, $confirmpassword)){
            $errors["confirmpassword"] = "Confirm password can be alpha-numeric charachters!";
        }

        if ($password != $confirmpassword) {
            $errors["confirmpassword"] = "Confirm password must be matched!";
        }
    }
    
    if (array_filter($errors)) {
        $errors["total"] = "there are some errors in filling the form!";
    }
    else {
        $_SESSION["username"] = $username;
        $_SESSION["email"] = $email;
        $_SESSION["password"] = $password;
        $_SESSION["confirmpassword"] = $confirmpassword;
        header("Location: users.php");
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <article>
        <h1>welcome to signup page</h1>
        <div>
            <?php echo ($errors["total"]); ?>
            <?php if (!empty($_SESSION["error"])){ echo($_SESSION["error"]); } ?>
        </div>
        <form method="post">
            <label for="username">
                <span><?php echo ($errors["username"]); ?> </span>
                <input type="text" name="username" placeholder="username">
            </label>

            <label for="email">
                <span> <?php echo ($errors["email"]); ?></span>
                <input type="text" name="email" placeholder="email">
            </label>

            <label for="password">
                <span> <?php echo ($errors["password"]); ?></span>
                <input type="password" name="password" placeholder="password">
            </label>

            <label for="confirmpassword">
                <span> <?php echo ($errors["confirmpassword"]); ?></span>
                <input type="password" name="confirmpassword" placeholder="confirm password">
            </label>

            <label for="submit">
                <input type="submit" name="submit" value="register">
            </label>
        </form>
    </article>
</body>
</html>