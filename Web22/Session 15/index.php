<?php

// echo $_SERVER['SCRIPT_NAME'];
// echo"<br />";
// echo $_SERVER['PHP_SELF'];
// echo"<br />";
// echo $_SERVER['REMOTE_ADDR'];
// echo"<br />";
// echo $_SERVER['REMOTE_HOST'];
// echo"<br />";
// echo $_SERVER['REQUEST_URI'];
// echo"<br />";
// echo $_SERVER['SCRIPT_FILENAME'];
// echo"<br />";

session_start();


?>


<?php require("header.php"); ?>
<h1><?php if (!empty($_SESSION['user'])) {echo $_SESSION['user'];} ?></h1>
<p>Developer</p>
<article>
    <section>
        <h2>Summary</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex vero tempora quidem voluptatibus, nesciunt vitae sed saepe repellat optio sit ratione, dolorum expedita mollitia ipsa inventore nam aliquid amet?</p>
    </section>
    <section>
        <h2>Experiences</h2>
        <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
            <li>option 4</li>
        </ul>
    </section>
    <section>
        <h2>Skills</h2>
        <table>
            <tr>
                <td>cell 1</td>
                <td>cell 2</td>
            </tr>
            <tr>
                <td>cell 1</td>
                <td>cell 2</td>
            </tr>
            <tr>
                <td>cell 1</td>
                <td>cell 2</td>
            </tr>
            <tr>
                <td>cell 1</td>
                <td>cell 2</td>
            </tr>
        </table>
    </section>
    <section>
        <h2>Contact me</h2>
        <form action="">
            <lable><input type="text"></lable>
            <lable><input type="email"></lable>
            <lable><input type="submit"></lable>
        </form>
    </section>
</article>
<?php include("footer.php"); ?>