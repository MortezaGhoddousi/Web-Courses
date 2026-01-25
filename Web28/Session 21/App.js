import Header from "./Header";

class App extends React.Component {
    render() {
        return (
            <div className="app-content">
                <Header />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector("#app"));
