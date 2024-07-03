
<?php

include('php.php');

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
            <h1>Welcome to your website!</h1>
            <h4>Welcome <?php
                if(isset($username)){
                    echo htmlspecialchars($username); 
                } 
            ?></h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus inventore veritatis tempora beatae in incidunt, iste molestias. Ducimus ipsam incidunt ex corporis illo iusto numquam. Itaque corrupti ab neque?</p>
        </article>
        <script src='./script.js'></script>
    </body>
</html>