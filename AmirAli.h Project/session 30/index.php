<?php

include("header.php");

?>

    <article>
        
        <section id="bugrafe">
            <h2>Bugrafe</h2>
            <p class="bugrafe">salam man seyed amir ali hosseini hastam va kheyly alaghe be barname nevise ya hamon developere</h3>
            <p class="bugrafe">bazy kardan ba pc ro man az bachege dost dashtam va chon goftam developere ham gozve pc ham hast bara hamin omadam barname nevese ya hamon developere</p> 
            <img width="50%" src="1.jpg" alt="" >
        </section>

        <section>
            <h2>Skills</h2>
            <table>
                <tr bgcolor="gray">
                    <td>
                        skills
                    </td>
                    <td>
                        level
                    </td>
                </tr>
                <tr>
                    <td>
                        basketball
                    </td>
                    <td>
                        75%
                        <div>
                            <progress min="0" max="100" value="75"></progress>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        zaban
                    </td>
                    <td>
                        49%
                        <div>
                            <progress min="0" max="100" value="49"></progress>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        gamere
                    </td>
                    <td>
                        90%
                        <div>
                            <progress min="0" max="100" value="90"></progress>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        dars
                    </td>
                    <td>
                        99%
                        <div>
                            <progress min="0" max="100" value="99"></progress>
                        </div>
                    </td>
                </tr>
            </table>
        </section>
        <section>
            <h2>Experiense</h2>
            <p>
                <li>class basketbal | 2022 _ 2024</li>
            </p>
            <p>
                <li>madrese | 2018 _ 2024</li>
            </p>
            <p>
                <li>gamere | 2018 _ 2024</li>
            </p>
        </section>
        <section>
            <div class="form">
                <h2>Comments</h2>
                <form action=""></form>
                <label for="username">
                    name :<input type="text" name="username" placeholder="yuor name"> <br>
                </label> 
                <label for="email">
                    email :<input type="emial" name="email" placeholder="yuor emil"> <br>
                </label>
                <label for="massage" name="massage"> camment :
                    <textarea name="massage" placeholder="yuor camment" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send">
                </label>
                
            </div>
        </section>
    </article>

    <?php

        include("footer.php");
    
    ?>