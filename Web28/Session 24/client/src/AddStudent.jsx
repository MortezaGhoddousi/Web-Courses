import React from "react";

import "./addStudent.css";

export default class AddStudent extends React.Component {
    state = {
        name: "",
        age: "",
        level: "",
    };

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        const newId = Math.random() * 10000000;

        this.props.getStudent({ ...this.state, id: newId });

        this.setState({
            name: "",
            age: "",
            level: "",
        });
    };

    componentDidMount() {
        console.log("component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component updated");
        console.log(prevProps, prevState);
    }

    render() {
        return (
            <div>
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <label htmlFor="age">Age: </label>
                    <input
                        type="text"
                        id="age"
                        onChange={this.handleChange}
                        value={this.state.age}
                    />

                    <label htmlFor="level">Level: </label>
                    <input
                        type="text"
                        id="level"
                        onChange={(e) =>
                            this.setState({ level: e.target.value })
                        }
                        value={this.state.level}
                    />

                    <button type="submit">Add Student</button>
                </form>
            </div>
        );
    }
}
