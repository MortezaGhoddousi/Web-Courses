function Students({ name, age, role, studentId, deleteData }) {

    const handleClick = () => {
        deleteData(studentId)
    }

    return (
        <div className="students">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Role: {role}</div>
            <button onClick={handleClick}>x</button>
        </div>
    );
}

export default Students;
