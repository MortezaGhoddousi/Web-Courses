import React from "react";
import Students from "./Students";
import AddStudent from "./AddStudent";

export default class App extends React.Component {
    state = {
        fakeStudents: [
            { id: 1, name: "Ali", age: 17, level: "Intermediate" },
            { id: 2, name: "AmirALi", age: 18, level: "Intermediate" },
            { id: 3, name: "Morteza", age: 31, level: "Advance" },
        ],
    };

    removeStudent = (StudentId) => {
        const filteredStudent = this.state.fakeStudents.filter(
            (s) => s.id != StudentId
        );
        this.setState({ fakeStudents: filteredStudent });
    };

    getStudent = (student) => {
        this.setState({ fakeStudents: [...this.state.fakeStudents, student] });
    };

    render() {
        return (
            <div className="App">
                <h1>My first React App!</h1>
                <p>Welcome!</p>
                {/* <Students name={"Ali"} age={17} level={"Intermediate"} /> */}
                <Students
                    students={this.state.fakeStudents}
                    removeStudent={this.removeStudent}
                />
                <AddStudent getStudent={this.getStudent} />
            </div>
        );
    }
}
