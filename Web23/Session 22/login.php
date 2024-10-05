<?php

session_start();

$pattern = "/^[a-zA-Z\w]+$/";

$errors = array('user'=>'', 'pass'=>'', 'total'=>'');

if (isset($_POST['submit'])){
    if (empty($_POST['user'])) {
        $errors['user'] = 'Username required!';
    }
    else {
        $user = $_POST['user'];
        if (!preg_match($pattern, $user)) {
            $errors['user'] = "Username must be just letters, numbers, and underscore!";
        }
    }

    if (empty($_POST['pass'])) {
        $errors['pass'] = 'Password required!';
    }
    else {
        $password = $_POST['pass'];
    }

    if (array_filter($errors)){
        $errors['total'] = 'There are some errors on form';
    }
    else {
        $conn = mysqli_connect('localhost', 'web23', 'web23', 'web23db');
        if ($conn) {
            $query = "SELECT * FROM web23tb WHERE username = '$user' AND password = '$password'";

            $result = mysqli_query($conn, $query);
            $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
            
            // print_r($var);
            if (sizeof($var) > 0) {
                $_SESSION['username'] = $var[0]['username'];
                $_SESSION['password'] = $var[0]['password'];
                $_SESSION['email'] = $var[0]['email'];
                $_SESSION['time'] = $var[0]['time'];
                header('Location: index.php');
            }
            else {
                $errors['total'] = 'username or password is wrong!';
            }
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />

        <title>Login</title>
        <meta name="description" content="DESCRIPTION" />

        <!-- <link href="style.css" rel="stylesheet" /> -->
        <link href="style.css?v=<?php echo time(); ?>" rel="stylesheet" type="text/css" />
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Sofia"
        />

        <script defer src="script.js"></script>
    </head>

    <body>
        <article>
            <section class="left">
                <h1>Welcome to website</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit recusandae voluptatibus tempore quam cupiditate
                    dolore nobis repellendus? Minima numquam eius tempore
                    beatae, illum, quos veritatis, suscipit sint esse recusandae
                    corrupti!
                </p>
            </section>
            <section class="right">
                <h2>USER LOGIN</h2>
                <p style="color: red; font-size: 14px; padding-bottom: 10px;"><?php echo $errors['total']; ?></p>
                <form method="post">
                    <label for="user">
                        <i class="bx bx-user"></i>
                        <?php if (empty($errors['user'])) { ?>
                            <input type="text" name="user" placeholder="Username" />
                        <?php } else { ?>
                            <span class="textError" style="color: red; font-size: 10px;"><?php echo $errors['user']; ?></span>
                            <input type="text" class="error" name="user" placeholder="Username" />
                        <?php }?>
                    </label>
                    <label for="pass">
                        <i class="bx bx-lock"></i>
                        <?php if (empty($errors['pass'])) { ?>
                            <input
                            type="password"
                            name="pass"
                            placeholder="Password"
                        />
                        <?php } else { ?>
                            <span class="textError" style="color: red; font-size: 10px;"><?php echo $errors['pass']; ?></span>
                            <input
                            class="error"
                            type="password"
                            name="pass"
                            placeholder="Password"
                        />
                        <?php }?>
                    </label>
                    <div>
                        <i id="check" class="bx bx-check"></i>
                        <a href="signup.php" class="forget">sign up</a>
                    </div>
                    <label for="submit">
                        <input type="submit" name="submit" value="LOGIN" />
                    </label>
                </form>
            </section>
        </article>
        <p id="cr">Designed by MORTEZA</p>
    </body>
</html>