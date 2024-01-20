<?php include('php.php'); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 19</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>

        <?php 
            if ($add === '/web17/Session 19/main.php'){ ?>
                <h1><a href="main.php"><?php echo $_SESSION['user']; ?></a></h1>

            <?php }else {?>
                <h1><a href="login.php">Portfolio</a></h1>
            <?php } ?>
        <nav>
            <ul>
                <li>
                    <a href="main.php">Home</a>
                </li>
                <li>
                    <a href="signup.php">Signup</a>
                </li>
                <li>
                    <a href="login.php">Login</a>
                </li>
            </ul>
        </nav>
    </header>