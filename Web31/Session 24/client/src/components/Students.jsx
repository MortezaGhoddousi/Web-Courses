
import "../styles/students.css";
import Image from "../components/Image";

function Students({ name, age, role, studentId, deleteData, image }) {
    const handleClick = () => {
        deleteData(studentId);
    };

    return (
        <div className="students">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Role: {role}</div>

            <Image
                src={image}
                alt={`${name}'s profile`}
                width={100}
                height={100}
            />

            <button onClick={handleClick}>x</button>
        </div>
    );
}

export default Students;
