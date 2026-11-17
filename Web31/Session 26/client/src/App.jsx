
import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import axios from "axios";

function App() {
    const [user, setUser] = useState({
        isLoggedIn: false,
        id: null,
        name: "",
        email: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const result = await axios.get(
                    "http://localhost:4000/api/auth/me",
                    {
                        withCredentials: true,
                    }
                );

                setUser({
                    isLoggedIn: true,
                    id: result.data.user.id,
                    name: result.data.user.name,
                    email: result.data.user.email,
                });
            } catch (err) {
                setUser({
                    isLoggedIn: false,
                    id: null,
                    name: "",
                    email: "",
                });
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <Fragment>
            <BrowserRouter>
                {!loading && (
                    <Header user={user} setUser={setUser} />
                )}

                <Routes>
                    <Route
                        path="/login"
                        element={
                            loading ? (
                                <p>Checking authentication...</p>
                            ) : user.isLoggedIn ? (
                                <Navigate to="/" replace />
                            ) : (
                                <Login user={user} setUser={setUser} />
                            )
                        }
                    />

                    <Route
                        path="/signup"
                        element={<Signup />}
                    />

                    <Route
                        path="/"
                        element={
                            loading ? (
                                <p>Checking authentication...</p>
                            ) : user.isLoggedIn ? (
                                <Home user={user} />
                            ) : (
                                <Navigate to="/login" replace />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
