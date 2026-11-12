import { useState } from "react";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";

function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Asma",
            age: 21,
            role: "frontend developer",
            image: "/images/1.webp",
        },
        {
            id: 2,
            name: "Sarvnaz",
            age: 27,
            role: "frontend developer",
            image: "/images/2.webp",
        },
        {
            id: 3,
            name: "Pooria",
            age: 19,
            role: "frontend developer",
            image: "/images/3.webp",
        },
        {
            id: 4,
            name: "Matin",
            age: 21,
            role: "frontend developer",
            image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        },
    ]);

    const filteredStudents = students.filter(function (student) {
        return student.age > 20;
    });

    const fetchData = (data) => {
        setStudents([...students, { ...data, id: Math.random() }]);
    };

    const deleteData = (id) => {
        const removedStudents = students.filter(function (student) {
            return student.id != id;
        });

        setStudents(removedStudents);
    };

    return (
        <div className="App">
            <h1>My first React app!</h1>
            <p>Welcome :)</p>

            {/* {
            students.map(function (student) {
                return (
                    <Students
                        name={student.name}
                        age={student.age}
                        role={student.role}
                    />
                );
            })
            } */}
            {/* <Students name="Asma" age="21" role="frontend developer" />
<Students name="Sarvnaz" age="27" role="frontend developer" />
<Students name="Pooria" age="19" role="frontend developer" /> */}

            {filteredStudents.length > 0 ? (
                filteredStudents.map(function (student) {
                    return (
                        <Students
                            key={student.id}
                            name={student.name}
                            age={student.age}
                            role={student.role}
                            studentId={student.id}
                            image={student.image}
                            deleteData={deleteData}
                        />
                    );
                })
            ) : (
                <p className="no-student">There is no student</p>
            )}

            <AddStudent fetchData={fetchData} />
        </div>
    );
}

export default App;
