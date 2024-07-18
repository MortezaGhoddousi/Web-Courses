<?php

include("header.php");

?>
        <section class="Login">
            <h1>Login</h1>
            <form action="">
                <label for="user">Username</label>
                <div class="inp">
                    <i class="bx bxs-user"></i>
                    <input 
                        type="text"
                        name="user" 
                        placeholder="Type your username"
                    />
                </div>
                <label for="pass">Password</label>
                <div class="inp">
                    <i class="bx bxs-key"></i>
                    <input 
                        type="password" 
                        name="pass" 
                        placeholder="Type your password"
                    />
                </div>
                <a class="forgot" href="">Forgot password?</a>
                <input type="submit" value="Login">
            </form>
            <h2>
                or_sign_up_using
            </h2>
                <ul>
                    <li>
                        <a href=""><i class="bx bxl-facebook"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="bx bxl-twitter"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="bx bxl-google"></i></a>
                    </li>
                </ul>
            <h2 class="h2">
                or_sign_up_using
            </h2>
            <a href="" class="signup">SIGN_UP</a>
        </section>
    </article>
</body>
</html>