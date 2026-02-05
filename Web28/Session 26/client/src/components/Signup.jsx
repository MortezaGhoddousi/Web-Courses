import { useState } from "react";
import { api } from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

function Signup() {
    const router = useNavigate();

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const generatedId = Math.random() * 10;
        api.post("/users", { ...data, id: generatedId })
            .then((res) => {
                if (res.status == 201) {
                    router("/login");
                }
                setData({
                    first_name: "",
                    last_name: "",
                    password: "",
                    email: "",
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <section>
            <h1 className="center blue-text">signup page</h1>

            <div className="row">
                <form onSubmit={handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="first_name"
                                type="text"
                                className="validate"
                                value={data.first_name}
                                onChange={handleChange}
                            />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="last_name"
                                type="text"
                                className="validate"
                                value={data.last_name}
                                onChange={handleChange}
                            />
                            <label htmlFor="last_name">Last Name</label>
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
                                type="submit"
                                value="Signup"
                                className="btn blue"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Signup;
