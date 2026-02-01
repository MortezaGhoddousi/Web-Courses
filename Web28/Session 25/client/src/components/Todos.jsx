function Todos({ todos, deleteTodo }) {
    return (
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
    );
}

export default Todos;
