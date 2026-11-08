import { useState } from "react";

export default function Form() {
    // var firstname = "Morteza";

    const [firstname, setFirstname] = useState("Morteza");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form has been submitted");
        console.log(username);
        console.log(password);
        console.log({
            username: username,
            password,
        });

        // data must be sent to the server and fetch proper response from the server

        console.log("Username and password are ok");

        setUsername("");
        setPassword("");
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{firstname}</p>

            <label htmlFor="username">
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                />
            </label>

            <label htmlFor="password">
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                />
            </label>

            <label htmlFor="submit">
                <input type="submit" name="submit" />
            </label>
        </form>
    );
}
