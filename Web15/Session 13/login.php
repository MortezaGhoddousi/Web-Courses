<?php
$user = '';
$email = '';
$pass = '';
$error = array("user"=>'',
                "pass"=>'',
                "total"=>'');
// Checking submit button if clicked
if (isset($_POST['submit'])){
    // checking username input filled 
    if (empty($_POST['user'])){
        $error['user'] = "Username required <br>";
    }
    else {
        $user = $_POST['user'];
        if (!preg_match('/^[a-zA-Z\w]+$/', $user)){
            $error['user'] = "Username must be include just lettes, numbers or underscore <br>";
        }
    }
    // checking Password input filled 
    if (empty($_POST['pass'])){
        $error['pass'] = "Password required <br>";
    }
    else {
        $pass = $_POST['pass'];
        if (!preg_match('/^[a-zA-Z\w]+$/', $pass)){
            $error['pass'] = "Password must be include just lettes, numbers or underscore <br>";
        }
    }

    if (array_filter($error)){
        $error['total'] = "There are some errors in your sign-up form";
    }
    else {
        header("Location: index.php");
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 13</title>
    <style>
        p{
            color: red;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <section class="container">
        <h1>Log in form</h1>
        <div class="error">
            <p><?php echo $error['total'];  ?></p>
        </div>
        <form action="#" method="post">
            <label for="user">
                <div class="error">
                    <p><?php echo $error['user'];  ?></p>
                </div>
                <input type="text" name="user" placeholder="Username:"> <br>
            </label>
            <label for="pass">
                <div class="error">
                    <p><?php echo $error['pass'];  ?></p>
                </div>
                <input type="password" name="pass" placeholder="Password:"> <br>
            </label>
            <label for="submit">
                <input type="submit" name="submit" value="Signup"> <br>
            </label>
        </form>
    </section>
</body>

</html>