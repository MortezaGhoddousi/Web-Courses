import React from "react";
import Todos from "./components/Todos";
import AddForm from "./components/AddForm";

export default class App extends React.Component {
    state = {
        todos: [
            { id: 1, content: "buy some milk" },
            { id: 2, content: "play fifa 2025" },
            { id: 3, content: "kicking some coding ass" },
        ],
    };

    deleteTodo = (id) => {
        const newTodos = this.state.todos.filter((todo) => todo.id != id);
        this.setState({ todos: newTodos });
    };

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, { ...todo, id: Math.random() * 10 }],
        });
    };

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddForm addTodo={this.addTodo} />
            </div>
        );
    }
}
