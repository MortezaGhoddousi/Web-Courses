<?php

$conn = mysqli_connect('localhost', 'web23', 'web23', 'shop');

if ($conn) {
    $query = "SELECT * FROM shop";

    $result = mysqli_query($conn, $query);
    $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
}

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
        <header>
            <h1>Welcome to the best shop on the net!</h1>
        </header>
        <article>
            <?php for($i=0; $i<sizeof($var); $i++) { ?>
                <section>
                    <h2><?php echo $var[$i]['name']; ?></h2>
                    <img src="<?php echo htmlspecialchars($var[$i]['address']); ?>" alt="">
                    <p class="first">Price: <?php echo $var[$i]['price']; ?>$</p>
                    <p class="second">Discount: <?php echo $var[$i]['discount']; ?>$</p>
                </section>
            <?php } ?>
        </article>
        <script src='./script.js'></script>
    </body>
</html>