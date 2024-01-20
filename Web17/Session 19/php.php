<?php 

session_start();


$add = $_SERVER['SCRIPT_NAME'];
if ($add === '/web17/Session 19/signup.php'){
    $error = array(
        'user'=>'',
        'password'=>'',
        'email'=>'',
        'total'=>''
    );
    
    
    if (isset($_POST['submit'])){
        // Username
        if (empty($_POST['user'])){
            $error['user'] = '<p>Username field required</p>';
        }
        else {
            $user = $_POST['user'];
            $pattern = "/^[a-zA-Z\s\w]+$/";
            if (!preg_match($pattern, $user)){
                $error['user'] = '<p>Username must be just alpha numeric characters</p>';
            }
        }
    
    
        // Password
        if (empty($_POST['password'])){
            $error['password'] = '<p>Password field required</p>';
        }
        else {
            if (!empty($_POST['password1'])){
                $pass = $_POST['password'];
                $pass1 = $_POST['password1'];
                if ($pass != $pass1) {
                    $error['password'] = '<p>Password must be matched</p>'; 
                }
            }
            else {
                $error['password'] = '<p>Confirm Password field required</p>';
            }
        }
    
    
        // Email
        if (empty($_POST['email'])){
            $error['email'] = '<p>Email field required</p>';
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $error['email'] = '<p>Email must be in a correct form</p>';
            }
        }
    
        if (array_filter($error)){
            $error['total'] = 'There are some errors in your form';
        }
        else {
            $conn = mysqli_connect('localhost', 'web17', 'web17', 'web17db');
            if ($conn){
                // Inserting data into database
                $sql = "INSERT INTO web17tb (user, pass, email) VALUES('$user', '$pass', '$email')";
                $result = mysqli_query($conn, $sql);
                if ($result){
                    mysqli_free_result($result);
                    mysqli_close($conn);
                    header('Location: login.php');
                }
                else {
                    $error['total'] = 'There are some errors in inserting data into databse';
                }
            }
        }
    }
}
elseif ($add === '/web17/Session 19/login.php'){
    $error = array(
        'user'=>'',
        'password'=>'',
        'total'=>''
    );
    
    
    if (isset($_POST['submit'])){
        // Username
        if (empty($_POST['user'])){
            $error['user'] = '<p>Username field required</p>';
        }
        else {
            $user = $_POST['user'];
            $pattern = "/^[a-zA-Z\s\w]+$/";
            if (!preg_match($pattern, $user)){
                $error['user'] = '<p>Username must be just alpha numeric characters</p>';
            }
        }
    
    
        // Password
        if (empty($_POST['password'])){
            $error['password'] = '<p>Password field required</p>';
        }
        else { 
            $pass = $_POST['password'];         
        }
    
    
        if (array_filter($error)){
            $error['total'] = 'There are some errors in your form';
        }
        else {
            $conn = mysqli_connect('localhost', 'web17', 'web17', 'web17db');
            if ($conn){
                // Searching data from database
                $sql = "SELECT * FROM web17tb WHERE user LIKE '$user'";
                $result = mysqli_query($conn, $sql);
                if ($result){
                    $var = mysqli_fetch_all($result, MYSQLI_ASSOC);

                    if ($var[0]['user'] == $user && $var[0]['pass'] == $pass){
                        mysqli_free_result($result);
                        mysqli_close($conn);
                        $_SESSION['user'] = $user;
                        header('Location: main.php');
                    }
                    else {
                        $error['total'] = 'There are some errors in username and password';
                    }

                }
                else {
                    $error['total'] = 'There are some errors in inserting data into databse';
                }
            }
        }
    }
}


?>