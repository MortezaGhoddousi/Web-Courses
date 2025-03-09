
<?php

$errors = array("name"=>"", "price"=>"", "image"=>"", "total"=>"");

if (isset($_POST['submit'])){
    // echo ($_POST['name']);
    // echo ("<br />");

    // echo ($_POST['price']);
    // echo ("<br />");

    // echo "Filename: " . $_FILES['file']['name']."<br>";
    // echo "Type : " . $_FILES['file']['type'] ."<br>";
    // echo "Size : " . $_FILES['file']['size'] ."<br>";
    // echo "Temp name: " . $_FILES['file']['tmp_name'] ."<br>";
    // echo "Error : " . $_FILES['file']['error'] . "<br>";

    $name = $_POST['name'];
    $price = $_POST['price'];

    $upFile = "uploads/".$_FILES["file"]["name"];

	if(is_uploaded_file($_FILES["file"]["tmp_name"])) {
		if(!move_uploaded_file($_FILES["file"]["tmp_name"], $upFile)) {
			echo "Problem could not move file to destination. Please check again later. <a href='index.php'>Please go back.</a>";
			exit;
		}
	} else {
		echo "Problem: Possible file upload attack. Filename: ";
		echo $_FILES["file"]["name"];
		exit;
	}

	$profile_image = $upFile;


    $conn = mysqli_connect("localhost", "web26", "web26", "web26db");

    if ($conn) {
        $query = "INSERT INTO goods(name, price, image) VALUE ('$name', '$price', '$profile_image')";
        $result = mysqli_query($conn, $query);
        if (!$result){
            $errors["total"] = "there are some issues on inserting data to the database";
        }
        mysqli_close($conn);
    }
}


?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='./cms.css'>
        <title>Document</title>
    </head>
    <body>
        <article>
            <form method="post" enctype="multipart/form-data">
                <label for="name">
                    <input type="text" name="name" placeholder="Name of good ...">
                </label>
                <label for="price">
                    <input type="text" name="price" placeholder="price ...">
                </label>
                <label for="image">
                    <input type="file" name="file" >
                </label>
                <label for="submit">
                    <input type="submit" name="submit" value="add">
                </label>
            </form>
        </article>
        <script src='./script.js'></script>
    </body>
</html>