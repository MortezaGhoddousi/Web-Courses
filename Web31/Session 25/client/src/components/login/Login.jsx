import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.email.trim() || !data.password) {
            alert("All fields are required!");

            setData({
                ...data,
                password: "",
            });

            return;
        }

        axios
            .post(
                "http://localhost:4000/api/auth/login",
                data
            )
            .then((result) => {
                console.log(result);

                alert("You have logged in successfully!");

                setData({
                    email: "",
                    password: "",
                });

                navigate("/");
            })
            .catch((error) => {
                alert(
                    error.response?.data?.message ||
                    "Something went wrong. Please try again."
                );

                setData({
                    ...data,
                    password: "",
                });
            });
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Welcome Back!</h1>

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

                <label htmlFor="login">
                    <input
                        type="submit"
                        name="login"
                        id="login"
                        value="Login"
                    />
                </label>
            </form>
        </div>
    );
}

export default Login;
