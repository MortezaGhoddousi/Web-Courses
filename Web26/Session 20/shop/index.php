<?php

if(!isset($_COOKIE["authenticatedUser"])) {
    $isLoggedIn = "Login";
}
else {
    $isLoggedIn = "Logout";
}

$addresses = [];

$titles = [];

$prices = [];

$conn = mysqli_connect("localhost", "web26", "web26", "web26db");

if ($conn) {
    $query = "SELECT * FROM goods";
    $result = mysqli_query($conn, $query);
    $val = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $size = sizeof($val);

    for ($i=0; $i<$size; $i++) {
        array_push($addresses, $val[$i]['image']);
        array_push($prices, $val[$i]['price']);
        array_push($titles, $val[$i]['name']);
    }
    
    mysqli_close($conn);
}


?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./style.css'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

        <title>Document</title>
    </head>
    <body>
        <main>
            <?php if ($isLoggedIn === 'Logout') {?>
            <form action="logout.php" method="post">
                <input type="submit" name="logoutSubmit" value=<?php echo $isLoggedIn; ?>>
            </form>
            <form action="addproduct.php" method="post">
                <input type="submit" name="adminSubmit" value="Admin">
            </form>
            <?php } else { ?>
                <form action="login.php" method="post">
                    <input type="submit" name="loginSubmit" value="Login">
                </form>
            <?php } ?>
        </main>
        <header>
            <h4>Shoper</h4>
            <h3>Explore More</h3>
            <ul>
                <li>
                    <section>
                        <img src="./img/people-3.jpg" alt="">
                        <p>Sneakers</p>
                    </section>
                </li>
                <li>
                    <section>
                        <img src="./img/people-2.jpg" alt="">
                        <p>Hodie</p>
                    </section>
                </li>
                <li>
                    <section>
                        <img src="./img/people-1.jpg" alt="">
                        <p>Trousers</p>
                    </section>
                </li>
            </ul>
        </header>
        <article>
            <?php for($i=0; $i<$size; $i++) { ?>
                <section>
                    <img src=<?php echo ($addresses[$i]); ?> alt="">
                    <h3><?php echo ($titles[$i]); ?></h3>
                    <h5>Great boost!</h5>
                    <div>
                        <p>$ <?php echo ($prices[$i]); ?></p>
                        <aside>
                            <i class='bx bxs-heart' ></i>
                            <i class='bx bx-shopping-bag' ></i>
                        </aside>
                    </div>
                </section>
            <?php } ?>
        </article>
        <footer>
            <h3>Web Shop</h3>
            <ul>
                <li><a href=""><i class='bx bxl-facebook-circle'></i></a></li>
                <li><a href=""><i class='bx bxl-twitter' ></i></a></li>
                <li><a href=""><i class='bx bxl-instagram' ></i></a></li>
            </ul>
            <div>
                <ul>
                    <li class="title">Offers</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Categories</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li class="title">Document</li>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
                <ul>
                    <li class="title">For You</li>
                    <li>Manuals</li>
                    <li>Tutorials</li>
                    <li>Tips & Tricks</li>
                    <li>F&Q</li>
                </ul>
                <ul>
                    <li class="title">Work with Us</li>
                    <li>Affiliate</li>
                    <li>Collaborations</li>
                    <li>Sponsorships</li>
                    <li>Partnerships</li>
                </ul>
            </div>
            <p>&copy 2025 Web Shop</p>
        </footer>
        <script src='./script.js'></script>
    </body>
</html>