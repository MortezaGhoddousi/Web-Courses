import { useState } from "react";
import "../styles/addStudent.css";

function AddStudent({fetchData}) {
    const [data, setData] = useState({
        name: "",
        age: "",
        role: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        fetchData(data);
        setData({
            name: "",
            age: "",
            role: "",
        });
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    return (
        <div className="add-student">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={handleChange}  value={data.name}/>

                <label htmlFor="age">Age: </label>
                <input type="text" id="age" onChange={handleChange}  value={data.age}/>

                <label htmlFor="role">Role: </label>
                <input
                    type="text"
                    id="role"
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                    value={data.role}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddStudent;
