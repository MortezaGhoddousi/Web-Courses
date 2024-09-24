<?php

include('php.php');

?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./assets/css/style.css'>
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Welcome to my SHOP</h1>
        </header>
        <article>
            <?php for ($i=0; $i<sizeof($var); $i++) { $add = $var[$i]['address']; ?>
                <section>
                    <p class="name"><?php echo $var[$i]['name']; ?></p>
                    <p class="price"><?php echo $var[$i]['price']; ?> $</p>
                    <p><?php echo $var[$i]['discount']; ?> $</p>
                    <img src="<?php echo htmlspecialchars($add); ?>" alt="">
                </section>
            <?php } ?>
        </article>
        <script src='./script.js'></script>
    </body>
</html>