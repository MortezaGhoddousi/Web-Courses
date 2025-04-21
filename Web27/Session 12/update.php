<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_SESSION['username'];
    $password = $_SESSION['password'];

    $oldPassword = $_POST['oldPassword'];
    $newPassword = $_POST['newPassword'];

    // echo ($username);
    // echo ("<br/>");

    // echo ($password);
    // echo ("<br/>");

    // echo ($oldPassword);
    // echo ("<br/>");

    // echo ($newPassword);
    // echo ("<br/>");

    if ($oldPassword === $password) {
        $conn = mysqli_connect("localhost", 'web27user', 'web27password', 'web27db');
        if ($conn){
            $query = "UPDATE web27tb SET password='$newPassword' WHERE username='$username'";
            $result = mysqli_query($conn, $query);
    
            if ($result) {
                $_SESSION['password'] = $newPassword;    
            }        
        }
    }
    mysqli_close($conn);
    header('Location: index.php');

}

?>