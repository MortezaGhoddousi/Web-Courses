<?php include("php.php"); ?>
<?php include("header.php"); ?>

<?php 
    $conn = mysqli_connect('localhost', 'web19', 'web19', 'web19db');
    // $query = "DELETE FROM web19tb WHERE id=7";
    // $result = mysqli_query($conn, $query);
    $query = "UPDATE web19tb SET pass = 'morteza112233' WHERE id = 1";
    $result = mysqli_query($conn, $query);


?>
<section>
    <h1>WELCOME <?php echo $_SESSION['user']; ?> TO THE BEST PAGE ON THE INTERNET</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, vero.</p>
</section>
<?php include("footer.php"); ?>
