<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $conn = mysqli_connect("localhost", 'web27user', 'web27password', 'web27db');
    if ($conn){
        $username = $_SESSION['username'];
      
        $query = "DELETE FROM web27tb WHERE username='$username'";
        $result = mysqli_query($conn, $query);
    
        if ($result) {
            $_SESSION['username'] = "";
            $_SESSION['password'] = ""; 
            $_SESSION['email'] = ""; 
            $_SESSION['time'] = ""; 
            mysqli_close($conn);
            header('Location: login.php');
        }
        else {
            mysqli_close($conn);
            header('Location: index.php');
        }
    }

        
}

?>