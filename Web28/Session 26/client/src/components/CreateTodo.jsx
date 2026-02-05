import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../axiosConfig";

function CreateTodo({ loggedIn, addTodo }) {
    const router = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            router("/login");
        }
    }, []);

    const [content, setContent] = useState({
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = localStorage.getItem("user");
        const generatedId = Math.random() * 10;
        api.post("/todos", {
            content: content.content,
            email,
            id: generatedId,
        });
        setContent({ content: "" });
    };

    return (
        <div>
            <h1 className="center blue-text">Create new Todo</h1>
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

export default CreateTodo;
