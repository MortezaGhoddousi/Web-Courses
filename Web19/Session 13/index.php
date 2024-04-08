
<?php 
echo 'Hello world from <b>PHP!</b> <br/>'; 
echo "<h1>A</h1>";
echo "<h1>B</h1>";
echo "<h1>C</h1>";

echo "<br/>";

$fname = "Mahdi";
$lname = 'Ghoddousi';
$age = 30;
$job = 'Developer';

echo $fname;
echo "<br/>";
echo $lname;
echo "<br/>";
echo $age;
echo "<br/>";

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
    <header>
        <h1><?php echo $fname; ?></h1>
        <p><?php echo $job; ?></p>
    </header>
</body>
</html>