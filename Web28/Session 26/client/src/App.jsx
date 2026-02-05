import { useState, useEffect, Fragment } from "react";
import Todos from "./components/Todos";
import CreateTodo from "./components/CreateTodo";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    const router = useNavigate();

    const [loggedIn, setLoggedIn] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [loggedIn]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        router("/login");
    };

    return (
        <div className="todo-app container">
            <nav>
                <ul>
                    {loggedIn ? (
                        <Fragment>
                            <li>
                                <Link to={"/"}>Homepage</Link>
                            </li>
                            <li>
                                <Link to={"/create-todo"}>Create</Link>
                            </li>
                            <li
                                style={{ cursor: "pointer" }}
                                onClick={handleLogout}
                            >
                                Logout
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li>
                                <Link to={"/login"}>Login</Link>
                            </li>
                            <li>
                                <Link to={"/signup"}>Signup</Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Todos loggedIn={loggedIn} />} />

                <Route
                    path="/create-todo"
                    element={<CreateTodo loggedIn={loggedIn} />}
                />

                <Route
                    path="/login"
                    element={<Login setLoggedIn={setLoggedIn} />}
                />

                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
