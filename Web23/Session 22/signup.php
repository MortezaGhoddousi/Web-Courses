<?php
include('php.php');
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
                <h2>USER SIGNUP</h2>
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
                    <label for="email">
                        <i class='bx bx-envelope'></i>
                        <?php if (empty($errors['email'])) { ?>
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <?php } else { ?>
                            <span class="textError" style="color: red; font-size: 10px;"><?php echo $errors['email']; ?></span>
                            <input
                            class="error"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <?php }?>
                        
                    </label>
                    <div>
                        <i id="check" class="bx bx-check"></i>
                        <a href="" class="forget">forget password?</a>
                    </div>
                    <label for="submit">
                        <input type="submit" name="submit" value="SIGNUP" />
                    </label>
                </form>
            </section>
        </article>
        <p id="cr">Designed by MORTEZA</p>
    </body>
</html>