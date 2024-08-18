<?php 

$pattern = "/^[a-zA-Z\s]+$/";

if ($_SERVER['PHP_SELF'] == "/web22/Session 17/signup.php") {
    
    $error = array("username"=>'', 'password'=>'', 'email'=>'', 'total'=>'');
    
    if (isset($_POST['submit'])){   
        if (empty($_POST['username'])) {
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)){
                $error['username'] = "Username can only include alpha-numeric characters!";
            }
        }
    
        if (empty($_POST['password'])) {
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
        }
    
        if (empty($_POST['email'])) {
            $error['email'] = "Email required!";
        }
        else {
            $email = $_POST['email'];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $error['email'] = "Email is not in correct shape!";
            }
        }
    
        if (array_filter($error)) {
            $error['total'] = "there are some errors on your sign up form!";
        }
        else {
            $conn = mysqli_connect("localhost", "web22", "web22", "web22db");
            $query = "INSERT INTO web22tb (username, password, email) VALUES ('$username', '$password', '$email')";
            $result = mysqli_query($conn, $query);
            echo $result;
            if ($result) {
                mysqli_close($conn);
                header("Location: login.php");
            }
        }
    }
}
else if ($_SERVER['PHP_SELF'] == "/web22/Session 17/login.php"){
    
    $error = array("username"=>'', 'password'=>'', 'total'=>'');
    
    if (isset($_POST['submit'])){   
        if (empty($_POST['username'])) {
            $error['username'] = "Username required!";
        }
        else {
            $username = $_POST['username'];
            if (!preg_match($pattern, $username)){
                $error['username'] = "Username can only include alpha-numeric characters!";
            }
        }
    
        if (empty($_POST['password'])) {
            $error['password'] = "Password required!";
        }
        else {
            $password = $_POST['password'];
        }
    
    
        if (array_filter($error)) {
            $error['total'] = "there are some errors on your sign up form!";
        }
        else {
            $conn = mysqli_connect("localhost", "web22", "web22", "web22db");
            $query = "SELECT * FROM web22tb WHERE username='$username' AND password='$password'";
            $result = mysqli_query($conn, $query);

            if ($result){
                $var = mysqli_fetch_all($result, MYSQLI_ASSOC);
                if (sizeof($var) > 0){
                    $_SESSION['username'] = $var[0]['username'];
                    $_SESSION['password'] = $var[0]['password'];
                    $_SESSION['email'] = $var[0]['email'];
                    $_SESSION['time'] = $var[0]['time'];
                    mysqli_close($conn);
                    header("Location: index.php");
                }
                else {
                    $error['total'] = "No such user!";
                }
    
            }

            

        }
    }
}

?>