import React from "react";

class App extends React.Component {
    state = {
        check: false,
        isLoggedIn: true,
    };

    handleClick = (e) => {
        this.setState({ check: !this.state.check });
    };

    render() {
        return (
            <div>
                {this.state.check ? (
                    <p>Check is true</p>
                ) : (
                    <p>Check is false</p>
                )}

                <button onClick={this.handleClick}>
                    click me to toggle check
                </button>

                <ul>
                    {this.state.isLoggedIn ? (
                        <div>
                            <li>Profile</li>
                            <li>Logout</li>
                        </div>
                    ) : (
                        <div>
                            <li>Login</li>
                            <li>Signup</li>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
