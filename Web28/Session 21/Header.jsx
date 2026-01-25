class Header extends React.Component {
    state = {
        name: "Morteza",
        age: 31
    }

    render() {
        return (
            <div>
                <header>
                    <h1>{this.state.name}</h1>
                    <p>Developer</p>
                    <p>{this.state.age} years old</p>
                </header>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Header;
