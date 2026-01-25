import React from "react";

class App extends React.Component {
    state = {
        name: "Morteza",
        age: 31,
    };

    handleClick = (e) => {
        this.setState({
            name: "Ali",
        });
        console.log("on click event called");
        console.log(this.state);
    };

    handleMouseOver = (e) => {
        console.log("on mouse over event accured");
        console.log(e.target);
    };

    handleCopy = (e) => {
        console.log("Try being original for once!");
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h1>Hey Guys</h1>
                <p>
                    My name is: {this.state.name} and I am {this.state.age}
                </p>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <p onCopy={this.handleCopy}>What we think, we become</p>

                <h1>My name is {this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
