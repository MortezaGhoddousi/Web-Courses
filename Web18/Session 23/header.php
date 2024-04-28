<?php include("php.php"); ?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='style.css'>
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>MY WEBSITE</h1>      
                <?php 
                if ($_SERVER['SCRIPT_FILENAME'] == 'C:/xampp/htdocs/Web18/Session 23/index.php') { ?>
                    <h4><?php echo htmlspecialchars($_SESSION['username']); ?></h4>                  
                <?php } ?>
        </header>