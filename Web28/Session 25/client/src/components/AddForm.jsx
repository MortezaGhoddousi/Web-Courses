import { useState } from "react";

function AddForm({ addTodo }) {
    const [content, setContent] = useState({
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(content);
        setContent({ content: "" });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add new todo: </label>
                <input
                    type="text"
                    onChange={(e) => setContent({ content: e.target.value })}
                    value={content.content}
                />
                <button className="btn btn-dark-blue" type="submit">
                    Add todo
                </button>
            </form>
        </div>
    );
}

export default AddForm;
