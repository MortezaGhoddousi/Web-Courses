<?php

$addresses = ["./img/img-01.jpg",
            "./img/img-02.jpg",
            "./img/img-03.jpg",
            "./img/img-04.jpg",
            "./img/img-05.jpg",
            "./img/img-06.jpg",
            "./img/img-07.jpg",
            "./img/img-08.jpg",
            "./img/img-09.jpg",
            "./img/img-10.jpg",
            "./img/img-11.jpg",
            "./img/img-12.jpg",
            "./img/img-13.jpg",
            "./img/img-14.jpg",
            "./img/img-15.jpg",
            "./img/img-16.jpg",
];

$titles = ["people 01",
            "people 02",
            "people 03",
            "people 04",
            "people 05",
            "people 06",
            "people 07",
            "people 08",
            "people 09",
            "people 10",
            "people 11",
            "people 12",
            "people 13",
            "people 14",
            "people 15",
            "people 16",
];

$prices = [ 100,
            120,
            80,
            150,
            210,
            80,
            50,
            110,
            100,
            300,
            350,
            150,
            178,
            90,
            150,
            97,
];

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
            <?php for($i=0; $i<16; $i++) { ?>
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