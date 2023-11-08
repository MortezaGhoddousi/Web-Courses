<?php

// Connecting to database
// $conn = mysqli_connect(hostname, username, password, databasename);
$conn = mysqli_connect('localhost', 'web15', 'web15', 'web15db');
// if ($conn) {
//    echo "Connect successfully <br>"; 
// }

// // Getting data from database
// // $sql = "SELECT cells FROM table";
// $sql = "SELECT * FROM web15tb";

// $result = mysqli_query($conn, $sql);
// $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
// print_r($var);

// Putting data into database
// $user = 'mahdi';
// $pass = '159';
// $email = 'm.d@gmail.com';
// // $sql = "INSERT INTO table (cells) VALUES (values of cells)";
// $sql = "INSERT INTO web15tb (user, pass, email) VALUES ('$user', '$pass', '$email')";
// $result = mysqli_query($conn, $sql);

// if ($result) {
//     echo "<p> Putting data succesfully </p>";
// }



$user = '';
$email = '';
$pass1 = '';
$pass2 = '';
$error = array("user"=>'',
                "pass1"=>'',
                "pass2"=>'',
                "email"=>'',
                "total"=>'');
// Checking submit button if clicked
if (isset($_POST['submit'])){
    // checking username input filled 
    if (empty($_POST['user'])){
        $error['user'] = "Username required <br>";
    }
    else {
        $user = $_POST['user'];
        if (!preg_match('/^[a-zA-Z\w]+$/', $user)){
            $error['user'] = "Username must be include just lettes, numbers or underscore <br>";
        }
    }
    // checking Password input filled 
    if (empty($_POST['pass1'])){
        $error['pass1'] = "Password required <br>";
    }
    else {
        $pass1 = $_POST['pass1'];
        if (!preg_match('/^[a-zA-Z\w]+$/', $pass1)){
            $error['pass1'] = "Password must be include just lettes, numbers or underscore <br>";
        }
    }
    // checking Confirming password input filled 
    if (empty($_POST['pass2'])){
        $error['pass2'] = "Confirming password required <br>";
    }
    else {
        $pass2 = $_POST['pass2'];
        if (!preg_match('/^[a-zA-Z\w]+$/', $pass2)){
            $error['pass2'] = "Password must be include just lettes, numbers or underscore <br>";
        }
        else{
            if ($pass1 != $pass2){
                $error['total'] = "Password must be matched";
            }
        }
    }
    // checking email input filled 
    if (empty($_POST['email'])){
        $error['email'] = "Email required <br>";
    }
    else {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error['email'] = "Email is invalid <br>";
        }
    }

    if (array_filter($error)){
        $error['total'] = "There are some errors in your sign-up form";
    }
    else {
        $sql = "INSERT INTO web15tb (user, pass, email) VALUES ('$user', '$pass1', '$email')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            header("Location: login.php");
        }
        else {
            $error['total'] = "There are some errors in putting data into database";
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session 13</title>
    <style>
        p{
            color: red;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <section class="container">
        <h1>Sign up form</h1>
        <div class="error">
            <p><?php echo $error['total'];  ?></p>
        </div>
        <form action="#" method="post">
            <label for="user">
                <div class="error">
                    <p><?php echo $error['user'];  ?></p>
                </div>
                <input type="text" name="user" placeholder="Username:"> <br>
            </label>
            <label for="pass1">
                <div class="error">
                    <p><?php echo $error['pass1'];  ?></p>
                </div>
                <input type="password" name="pass1" placeholder="Password:"> <br>
            </label>
            <label for="pass2">
                <div class="error">
                    <p><?php echo $error['pass2'];  ?></p>
                </div>
                <input type="password" name="pass2" placeholder="Confirm Password:"> <br>
            </label>
            <label for="email">
                <div class="error">
                    <p><?php echo $error['email'];  ?></p>
                </div>
                <input type="email" name="email" placeholder="Email:"> <br>
            </label>
            <label for="submit">
                <input type="submit" name="submit" value="Signup"> <br>
            </label>
        </form>
    </section>
</body>

</html>