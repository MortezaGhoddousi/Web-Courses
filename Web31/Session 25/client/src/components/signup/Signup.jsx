import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function Signup() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            data.name == "" ||
            data.email == "" ||
            data.password == "" ||
            data.confirmPassword == ""
        ) {
            alert("fields required");
            setData({ ...data, password: "", confirmPassword: "" });
            return;
        }

        if (data.password != data.confirmPassword) {
            alert("password is not confirmed");
            setData({ ...data, password: "", confirmPassword: "" });
            return;
        }

        axios
            .post("http://localhost:4000/api/auth/signup", data)
            .then((result) => {
                console.log(result);
                alert("Data has been added successfully");
                setData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                navigate("/login");
            })
            .catch((error) => {
                alert(error.response.data.message);
                setData({ ...data, password: "", confirmPassword: "" });
            });
    };

    return (
        <div className="signup-page">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Welcome to the register page</h1>

                <label htmlFor="name">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="email">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="confirmPassword">
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={data.confirmPassword}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="register">
                    <input
                        type="submit"
                        name="register"
                        id="register"
                        value="Register"
                    />
                </label>
            </form>
        </div>
    );
}

export default Signup;
