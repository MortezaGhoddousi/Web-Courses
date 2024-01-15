
<?php 
session_start(); 
$age = 29;
$_SESSION['age'] = $age;
?>



<?php include('./header.php'); ?>
<main>
    <h2>Main page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui tempore consequatur unde cumque at. Vitae dignissimos consequatur blanditiis nihil facilis velit libero numquam ad, tempore quam beatae aliquam fuga?</p>
    <p><?php echo $_SERVER['PHP_SELF']; ?></p>
</main>
<?php include('./footer.php'); ?>
