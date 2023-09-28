<?php

// Connection to database
$conn = mysqli_connect('localhost', 'web14', 'web14', 'web14db'); // (hostname, username, password, database name)

// Checking connection 
if ($conn){
    echo "Connection successfully <br/>";
}
else {
    echo "Connection error <br/>";
}

// // Getting data from database
// $query = "SELECT * FROM web14tb";

// $result = mysqli_query($conn, $query);

// if ($result){
//     $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
//     print_r($var);
//     echo "<br/>";
// }

// // Putting data into database
// $query = "INSERT INTO web14tb (user, password, email) VALUES ('AmirAli', '123456', 'aa.sh@yahoo.com')";

// $result = mysqli_query($conn, $query);

// if ($result){
//     echo "Insert data successfully <br/>";
// }
// else{
//     echo "There is a problem <br/>";
// }

// Checking submit button is clicked

$error = array("user" => "", "pass" => "", "email" => "");
if (isset($_POST["submit"])){
    if (empty($_POST["name"])){
        $error["user"] = "Username is required <br>";
    }
    else {
        $user = $_POST["name"];
        if (!preg_match('/^[a-zA-Z\s]+$/', $user)){
            $error["user"] = "Username must be just alphanumeric characters <br>";
        }
    }

    if (empty($_POST["pass"])){
        $error["pass"] = "Password is required <br>";
    }
    else {
        $pass = $_POST["pass"];
        if (!preg_match('/^[a-zA-Z\s]+$/', $pass)){
            $error["pass"] = "Password must be just alphanumeric characters <br>";
        }
    }

    if (empty($_POST["email"])){
        $error["email"] = "Email is required <br>";
    }
    else {
        $email = $_POST["email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error["email"] = "Email is not valid <br>";
        }
    }   

    if (array_filter($error)){
        echo "There is a problem";
    }
    else{
        // Putting data into database
        $user = $_POST["name"];
        $pass = $_POST["pass"];
        $email = $_POST["email"];

        $query = "INSERT INTO web14tb (user, password, email) VALUES ('$user', '$pass', '$email')";

        $result = mysqli_query($conn, $query);

        if ($result){
            echo "Insert data successfully <br/>";
        }
        else{
            echo "There is a problem <br/>";
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="name">Username: </label>
        <div><p style="color: red;"><?php echo $error["user"]; ?></p></div>
        <input type="text" name="name" placeholder="John Smith"> <br>
        <label for="pass">Password: </label>
        <div><p style="color: red;"><?php echo $error["pass"]; ?></p></div>
        <input type="password" name="pass" placeholder="123"> <br>
        <label for="email">Email: </label>
        <div><p style="color: red;"><?php echo $error["email"]; ?></p></div>
        <input type="email" name="email" placeholder="John_Smith@domain.com"> <br>
        <input type="submit" name="submit" value="SignUp"> <br>
    </form>
</body>
</html>