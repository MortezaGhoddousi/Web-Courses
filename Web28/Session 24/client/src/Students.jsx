import "./students.css";

export default function Students(props) {
    const students = props.students;
    const removeStudent = props.removeStudent;

    const filteredStudents = students.filter((s) => {
        return s.age >= 18;
    });

    const handleClick = (e) => {
        removeStudent(e.target.className);
    };


    return (
        <div className="students-list">
            {/* {students.map((s, i) => {
                return s.age >= 18 ? (
                    <div className="students" key={i}>
                        <div>Name: {s.name}</div>
                        <div>Age: {s.age}</div>
                        <div>Level: {s.level}</div>
                    </div>
                ) : null;
            })} */}

            {filteredStudents.map((s, i) => (
                <div className="students" key={i}>
                    <div>Name: {s.name}</div>
                    <div>Age: {s.age}</div>
                    <div>Level: {s.level}</div>
                    <button className={s.id} onClick={handleClick}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
}
