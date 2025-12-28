window.onload = () => {

    var body = document.querySelector("body");
    
    body.style.width = "100vw";
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.padding = "10px 5vw";
    
    var form = `
        <form>
            <label html="username">
                <input type="text" name="username" id="username" placeholder="username" />
            </label>
            <label html="password">
                <input type="password" name="password" id="password" placeholder="password" />
            </label>
            <label html="confirmed_password">
                <input type="password" name="confirmed_password" id="confirmed_password" placeholder="confirm password" />
            </label>
            <label html="email">
                <input type="email" name="email" id="email" placeholder="email" />
            </label>
            <label html="submit">
                <input type="submit" name="submit" id="submit" value="Register" />
            </label>
        </form>
    `;
    
    body.innerHTML += form;
    
    var form = document.querySelector("form");
    form.style.width = "100%";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.justifyContent = "center";
    form.style.alignItems = "flex-start";
    form.style.gap = "10px";
    
    form.username.style.borderRadius = "10px";
    
    var data = {
        username: "",
        password: "",
        confirmed_password: "",
        email: "",
    };
    
    form.username.value = data.username;
    form.password.value = data.password;
    form.confirmed_password.value = data.confirmed_password;
    form.email.value = data.email;
    
    var p = document.querySelector("p");
    
    form.username.addEventListener("change", (e) => {
        // console.log(e.target.value);
        // data.username = e.target.value;
        // console.log(data);
        data = { ...data, username: e.target.value };
    });
    
    form.email.addEventListener("change", (e) => {
        data = { ...data, email: e.target.value };
    });
    
    form.password.addEventListener("change", (e) => {
        data = { ...data, password: e.target.value };
    });
    
    form.confirmed_password.addEventListener("change", (e) => {
        data = { ...data, confirmed_password: e.target.value };
    });
    
    form.onsubmit = (e) => {
        e.preventDefault();
        var checked = true;
        p.innerHTML = "";
    
        if (data.password != data.confirmed_password) {
            p.innerHTML += "passwords must be matched";
            data.confirmed_password = "";
            data.password = "";
            form.password.value = "";
            form.confirmed_password.value = "";
            checked = false;
        }
    
        if (data.username == "") {
            p.innerHTML += "username required <br />";
            checked = false;
        }
    
        if (data.password == "") {
            p.innerHTML += "password required <br />";
            checked = false;
        }
    
        if (data.confirmed_password == "") {
            p.innerHTML += "password needs to confirmed <br />";
            checked = false;
        }
    
        if (data.email == "") {
            p.innerHTML += "email required <br />";
            checked = false;
        }
    
        if (checked) {
            console.log("data must be sent to the server");
            data = {
                username: "",
                password: "",
                confirmed_password: "",
                email: "",
            };
            form.username.value = "";
            form.password.value = "";
            form.confirmed_password.value = "";
            form.email.value = "";
            checked = true;
        }
    };
    
    const handleClick = () => {
        alert("this button clicked!");
    };
    
    var btn = document.querySelector("button");
    
    btn.style.transition = "0.3s";
    
    btn.onmouseover = (event) => {
        event.target.style.transform = "scale(1.1)";
    };
    
    // btn.onmouseout = (evt) => {
    //     evt.target.style.transform = "scale(1)";
    // };
    
    btn.addEventListener("mouseout", (e) => {
        e.target.style.transform = "scale(1)";
    });
    
    var listOptions = document.querySelectorAll("li");
    console.log(listOptions);
    
    var links = document.querySelectorAll("a");
    links.forEach((a) => {
        a.onclick = (e) => {
            e.preventDefault();
        };
    });
    
    listOptions.forEach((li) => {
        li.onclick = (e) => {
            console.log(e.target);
            e.stopPropagation();
        };
    });
    
    // body.addEventListener("click", (e) => {
    //     console.log("body click event invoked");
    // });
}

