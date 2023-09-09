<?php

# Connecting to database
$useracc = "web13";
$passacc = "web13";
$conn = mysqli_connect("localhost", $useracc, $passacc, "web13db");

if ($conn){
    echo "Connection is safe";
}
else {
    echo "There is a problem to connect to database";
}

# Getting data from database
$sql = "SELECT * FROM web13tb";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
// print_r($data);

// echo "<br>";
// echo $data[0]["User"];


// $User = mysqli_real_escape_string($conn, "Parimah");
// $Pass = mysqli_real_escape_string($conn, "test789");
// $Email = mysqli_real_escape_string($conn, "P.J@yahoo.com");

// $User = "Negin";
// $Pass = "test4556";
// $Email = "N.E@gmail.com";

$error = array("name"=>"", "email"=>"", "pass"=>"");

if(isset($_POST["submit"])){

    // UserName
    if (empty($_POST["name"])){
        $error["name"] = "Username is required";
    }
    else{
        $name = $_POST["name"];
        $pattern ='/^([-a-zA-Z0-9\w\s]*)$/u';
        if(!preg_match($pattern, $name)){
            $error["name"] = "Username must be included only characters and numbers!";
        }
    }

    // Email
    if (empty($_POST["email"])){
        $error["email"] = "Email is required";
    }
    else {
        $email = $_POST["email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error["email"] = "Email is not valid";  
        }
    }


    // Password
    if (empty($_POST["pass"])){
        $error["pass"] = "Password is required";
    }
    else{
        $pass = $_POST["pass"];
        $pattern ='/^([-a-zA-Z0-9\w\s]*)$/u';
        if(!preg_match($pattern, $pass)){
            $error["pass"] = "Password must be included only characters and numbers!";
        }
    }

    if (array_filter($error)){
        echo "Some errors is occured";
    }
    else{
        $User = $_POST["name"];
        $Pass = $_POST["pass"];
        $Email = $_POST["email"];
        $sql = "INSERT INTO web13tb (User, Pass, Email) VALUES ('$User','$Pass', '$Email')";
        $result = mysqli_query($conn, $sql);
        if ($result){
            echo "<br>";
            echo "Data stored in database";
            header("Location: main.php");
        }
        else {
            echo "<br>";
            echo "There is a problem in saving data into database";
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
    <title>Document</title>
</head>

<body>
    <h1>Log-in</h1>
    <form action="index.php" method="post">
        <label for="name">Username: </label>
        <input type="text" name="name" id="name" placeholder="JohnSmith"><br>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="JohnSmith@domain.com"><br>
        <label for="pass">Password: </label>
        <input type="password" name="pass" id="pass" placeholder="John_123"><br>
        <input type="submit" value="Login" name="submit" id="submit">
    </form>
</body>

</html>