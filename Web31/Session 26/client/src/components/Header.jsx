import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
    const navigate = useNavigate();

    const handleLogoutBtn = () => {
        axios.post("http://localhost:4000/api/auth/logout").then(() => {
            navigate("/login");
            setUser({
                isLoggedIn: false,
                id: null,
                name: "",
                email: "",
            });
        });
    };

    useEffect(() => {}, [user]);

    return (
        <header>
            <h1>TODO list</h1>

            <nav>
                <ul>
                    {user?.isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <button onClick={handleLogoutBtn}>
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
