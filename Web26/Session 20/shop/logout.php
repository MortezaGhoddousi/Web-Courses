<?php 
setcookie("authenticatedUser", "", time() - 3600, "/");
header("Location: index.php");
?>