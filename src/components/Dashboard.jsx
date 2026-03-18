

const Dashboard = () => {
    let appmode = "dark";
    // conditional rendering based on appmode using if else statements
    if (appmode === "dark") {
        return (
        <div className="row bg-dark">
            <div className="col-12">
                <h1>Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </div>
        </div>
    );
    } else {
        return (
        <div className="row">
            <div className="col-12">
                <h1>Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </div>
        </div>
    );
    }
};

export default Dashboard;