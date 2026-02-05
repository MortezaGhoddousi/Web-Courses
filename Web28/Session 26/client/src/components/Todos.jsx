import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../axiosConfig";

function Todos({ loggedIn }) {
    const [todos, setTodos] = useState([]);

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
