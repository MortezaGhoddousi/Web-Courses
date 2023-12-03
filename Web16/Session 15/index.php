
<?php
// $read = file("./names.txt");

// $len = sizeof($read);

$conn = mysqli_connect('localhost', 'web16', 'web16', 'web16db');
$sql = "SELECT user FROM web16tb";
$result = mysqli_query($conn, $sql);
$var = mysqli_fetch_all($result, MYSQLI_ASSOC);
$len = sizeof($var);
// print_r($var);

?>



<?php include('header.php'); ?>
<section class="main">
    <h1>Welcome <?php echo $var[$len-1]['user']; ?></h1>
    <h1>Main page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam animi ullam aliquam quibusdam nesciunt beatae culpa minima pariatur sunt neque porro eligendi, itaque aperiam odit sit. Adipisci reiciendis ipsam ad.</p>
</section>
<?php include('footer.php'); ?>
