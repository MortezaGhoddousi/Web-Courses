<?php

session_start();

$pattern = "/^[a-zA-Z1-9]\w+$/";

$errors = array("username"=>"", "password"=>"", "total"=>"");


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

    if (empty($_POST["password"])) {
        $errors["password"] = "password must be filled";
    }
    else {
        $password = $_POST["password"];
        if(!preg_match($pattern, $password)){
            $errors["password"] = "Password can be alpha-numeric charachters!";
        }
    }
    
    if (array_filter($errors)) {
        $errors["total"] = "there are some errors in filling the form!";
    }
    else {

        $conn = mysqli_connect("localhost", "web26", "web26", "web26db");

        if ($conn) {
            $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
            $result = mysqli_query($conn, $query);
            $val = mysqli_fetch_all($result, MYSQLI_ASSOC);
            if (!array_filter($val)){
                $errors["total"] = "there are some issues on inserting data to the database";
                mysqli_close($conn);
            }
            else {
                mysqli_close($conn);
                setcookie("authenticatedUser", $username, time() + (86400 * 30), "/");
                header("Location: addproduct.php");
            }
        }

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
</head>
<body>
    <article>
    <h1>welcome to login page</h1>
        <div>
            <?php echo ($errors["total"]); ?>
            <?php if (!empty($_SESSION["error"])){ echo($_SESSION["error"]); } ?>
        </div>
        <form method="post">
            <label for="username">
                <span><?php echo ($errors["username"]); ?> </span>
                <input type="text" name="username" placeholder="username">
            </label>

            <label for="password">
                <span> <?php echo ($errors["password"]); ?></span>
                <input type="password" name="password" placeholder="password">
            </label>

            <label for="submit">
                <input type="submit" name="submit" value="login">
            </label>
        </form>
    </article>
</body>
</html>