<?php
// echo $_SERVER['PHP_SELF'];
// echo "<br/>";
// echo $_SERVER['SERVER_ADDR'];
// echo "<br/>";
// echo $_SERVER['SERVER_NAME'];
// echo "<br/>";
// echo $_SERVER['HTTP_HOST'];
// echo "<br/>";
// echo $_SERVER['REMOTE_ADDR'];
// echo "<br/>";
// echo $_SERVER['REMOTE_HOST'];
// echo "<br/>";
// echo $_SERVER['REMOTE_PORT'];
// echo "<br/>";
// echo $_SERVER['SCRIPT_FILENAME'];
// echo "<br/>";
// echo $_SERVER['SERVER_PORT'];
// echo "<br/>";
// echo $_SERVER['SCRIPT_NAME'];
// echo "<br/>";
// echo $_SERVER['SCRIPT_URL'];
// echo "<br/>";

session_start();




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
    <header>
        <h1>Hello <?php echo $_SESSION['user']; ?></h1>
    </header>
</body>
</html>