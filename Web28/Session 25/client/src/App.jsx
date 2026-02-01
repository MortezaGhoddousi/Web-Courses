import { useState, useEffect } from "react";
import Todos from "./components/Todos";
import AddForm from "./components/AddForm";

import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/todos")
            .then((res) => {
                console.log(res);
                setTodos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
        axios
            .delete(`http://localhost:5000/todos/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addTodo = (todo) => {
        const generatedId = Math.random() * 10;
        setTodos([...todos, { ...todo, id: generatedId }]);

        axios
            .post("http://localhost:5000/todos", { ...todo, id: generatedId })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={todos} deleteTodo={deleteTodo} />
            <AddForm addTodo={addTodo} />
        </div>
    );
}

export default App;
