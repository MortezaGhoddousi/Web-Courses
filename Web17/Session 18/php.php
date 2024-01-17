<?php 

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
        echo htmlspecialchars($user);
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
        header('Location: main.php');
    }
}

?>