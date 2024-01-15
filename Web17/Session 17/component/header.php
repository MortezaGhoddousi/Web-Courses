<?php 
session_start();

$add = $_SERVER['SCRIPT_NAME'];
// echo $add;


function InfHeader ($username, $job, $email){
    $info = array(
                'username'=>$username,
                'job'=>$job,
                'email'=>$email
                );
    return $info;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 17</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <?php 
            if ($add === '/web17/Session 17/component/login.php'){ ?>
                <h1><a href="index.php"></a>LOGIN</h1>

            <?php }else {?>
                <h1><a href="index.php"><?php echo $_SESSION['user']; ?></a></h1>
            <?php } ?>
        
        <p><?php echo InfHeader('AmirHossein', 'Engineer', 'a.r@gmail.com')['job']; ?></p>
        <p><?php echo InfHeader('AmirHossein', 'Engineer', 'a.r@gmail.com')['email']; ?></p>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="login.php">login</a></li>
                <li><a href="signup.php">signup</a></li>
            </ul>
        </nav>
    </header>