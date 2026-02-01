import React from "react";

export default class AddForm extends React.Component {
    state = {
        content: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ content: "" });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input
                        type="text"
                        onChange={(e) =>
                            this.setState({ content: e.target.value })
                        }
                        value={this.state.content}
                    />
                    <button className="btn btn-dark-blue" type="submit">
                        Add todo
                    </button>
                </form>
            </div>
        );
    }
}
