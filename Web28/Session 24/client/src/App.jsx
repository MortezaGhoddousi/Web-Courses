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
        showStudent: false,
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

    handleClick = (e) => {
        this.setState({ showStudent: !this.state.showStudent });
    };

    render() {
        return (
            <div className="App">
                <h1>My first React App!</h1>
                <p>Welcome!</p>
                <button onClick={this.handleClick}>
                    {this.state.showStudent ? "hide students" : "show students"}
                </button>
                <Students
                    students={this.state.fakeStudents}
                    removeStudent={this.removeStudent}
                />

                {this.state.showStudent ? (
                    <AddStudent getStudent={this.getStudent} />
                ) : null}
            </div>
        );
    }
}
