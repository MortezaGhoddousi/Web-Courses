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
    <h1>Welcome <?php echo  end($data)["User"]; ?></h1>
</body>

</html>