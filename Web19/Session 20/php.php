<?php 


$errors = array('user'=>'', 'password'=>'', 'email'=>'', 'total'=>'');

// Check for login button 
if (isset($_POST['submit'])){
    // user input 
    if (empty($_POST['user'])){
        $errors['user'] = "Username required!";
    }
    else {
        $user = $_POST['user'];
        $pattern = '/^[a-zA-Z]\w*$/';
        if (!preg_match($pattern, $user)){
            $errors['user'] = 'Username must be just alpha-numeric characters!';
        }
    }

    // password input 
    if (empty($_POST['password'])){
        $errors['password'] = "Password required!";
    }
    else {
        $password = $_POST['password'];
        $pattern = '/^[a-zA-Z]\w*$/';
        if (!preg_match($pattern, $password)){
            $errors['password'] = 'Password must be just alpha-numeric characters!';
        }
    }

    // email input 
    if (empty($_POST['email'])){
        $errors['email'] = "Email required!";
    }
    else {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $errors['email'] = "Email must be in a correct form!";
        }

    }

    if (array_filter($errors)){
        $errors['total'] = "There are some errors in your information!";
    }
    else {
        header("Location: index.php");
    }

}


?>