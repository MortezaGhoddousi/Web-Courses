import React from "react";
import Students from "./Students";

export default class App extends React.Component {
    state = {
        fakeStudents: [
            { name: "Ali", age: 17, level: "Intermediate" },
            { name: "AmirALi", age: 18, level: "Intermediate" },
            { name: "Morteza", age: 31, level: "Advance" },
        ],
    };

    render() {
        return (
            <div className="App">
                <h1>My first React App!</h1>
                <p>Welcome!</p>
                {/* <Students name={"Ali"} age={17} level={"Intermediate"} /> */}
                <Students students={this.state.fakeStudents} />
            </div>
        );
    }
}
