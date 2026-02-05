import { useState } from "react";
import { api } from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const router = useNavigate();

    const {setLoggedIn} = useAuth();

    const [data, setData] = useState({
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.get("/users")
            .then((res) => {
                console.log(res.data);
                const user = res.data.find(
                    (f) => f.password == data.password && f.email == data.email,
                );
                if (!user) {
                    setData({
                        password: "",
                        email: "",
                    });
                } else {
                    localStorage.setItem("user", data.email);
                    setLoggedIn(true);
                    router("/");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <section>
            <h1 className="center blue-text">login page</h1>

            <div className="row">
                <form onSubmit={handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="email"
                                className="validate"
                                value={data.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="password"
                                type="password"
                                className="validate"
                                value={data.password}
                                onChange={handleChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="submit"
                                value="Login"
                                className="btn blue"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
