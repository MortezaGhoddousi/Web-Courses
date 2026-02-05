import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../axiosConfig";
import { useAuth } from "../context/AuthContext";

function Todos() {
    const [todos, setTodos] = useState([]);

    const {loggedIn} = useAuth();

    const router = useNavigate();
    useEffect(() => {
        if (!loggedIn && loggedIn != "") {
            router("/login");
        }

        api.get("/todos").then((res) => {
            console.log(res.data);
            const email = localStorage.getItem("user");
            const filteredEmail = res.data.filter(
                (todo) => todo.email == email,
            );
            setTodos(filteredEmail);
        });
    }, []);

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);

        api.delete(`/todos/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <Fragment>
            <h1 className="center blue-text">Todos.</h1>
            <div className="todos collection">
                {todos.length ? (
                    todos.map((todo) => (
                        <div className="collection-item" key={todo.id}>
                            <span
                                onClick={() => {
                                    deleteTodo(todo.id);
                                }}
                            >
                                {todo.content}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="center">You have no todo's left, yoohoooo!</p>
                )}
            </div>
        </Fragment>
    );
}

export default Todos;
