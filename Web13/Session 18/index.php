<?php

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
        header("Location: main.php");
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
    <style>
        p{
            color: red;
            font-size: .82em;
        }
    </style>
</head>

<body>
    <h1>Log-in</h1>
    <form action="#" method="post">
        <label for="name">Username: </label>
        <input type="text" name="name" id="name" placeholder="JohnSmith"><br>
        <div><p><?php echo htmlspecialchars($error["name"]);  ?></p></div>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="JohnSmith@domain.com"><br>
        <div><p><?php echo htmlspecialchars($error["email"]);  ?></p></div>
        <label for="pass">Password: </label>
        <input type="password" name="pass" id="pass" placeholder="John_123"><br>
        <div><p><?php echo htmlspecialchars($error["pass"]);  ?></p></div>
        <input type="submit" value="Login" name="submit" id="submit">
    </form>
</body>

</html>