<?php

$error = array("user"=>'', 'pass'=>'', 'total'=>'');

if (isset($_POST['submit'])){
    if(empty($_POST['user'])){
        $error['user'] = "<p>Username Required</p>";
    }
    else {
        $user = $_POST['user'];
        $patt = '/^[a-zA-Z\s\w]*$/';
        if(!preg_match($patt ,$user)){
            $error['user'] = "<p>Username must be included with just lapha-numeric characters</p>";
        }
    }

    if(empty($_POST['pass'])){
        $error['pass'] = "<p>Password Required</p>";
    }
    else {
        $pass = $_POST['pass'];
        $patt = '/^[a-zA-Z\s\w]*$/';
        if(!preg_match($patt ,$pass)){
            $error['pass'] = "<p>Password must be included with just lapha-numeric characters</p>";
        }
    }
    if (array_filter($error)){
        $error["total"] = "There are some errors in your form";
    }
    else {
        // Opening and appending to files
        $myFile = fopen("./names.txt", 'a+');
        $txt = "Username: $user | Password: $pass \n";
        $hashedtxt = hash('sha256', $txt)."\n";
        fwrite($myFile, $hashedtxt);

        fclose($myFile);

        $conn = mysqli_connect('localhost', 'web16', 'web16', 'web16db');
        $sql = "INSERT INTO web16tb(user, pass) VALUES('$user', '$pass')";
        $result = mysqli_query($conn, $sql);
        if ($result){
            // echo "Put information into database successfully";
            header("Location: index.php");
        }
        else {
            $error["total"] = "There are some errors in your form";
        }       
    }
}
?>

<?php include('header.php'); ?>
<section class="main">
    <div><p class="error"><?php echo $error['total']; ?></p></div>
    <form action="#" method="post">
        <label for="user">
            <div><p><?php echo $error['user']; ?></p></div>
            <input type="text" name="user" placeholder="Username:"> <br>
        </label>
        <label for="pass">
            <div><p><?php echo $error['pass']; ?></p></div>
            <input type="password" name="pass" placeholder="Password:"> <br>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="login"> <br>
        </label>
    </form>
</section>
<?php include('footer.php'); ?>
