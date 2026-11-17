
function Home({ user }) {
    return (
        <div>
            <h1>Home page</h1>

            <h2>Welcome {user.name}</h2>

            <p>{user.email}</p>
        </div>
    );
}

export default Home;
