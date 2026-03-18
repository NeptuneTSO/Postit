

const Sidebar = (props) => {
    console.log(props)
    return (
        <aside className="col-md-3 p-3">
            <h1 style={{color: "black", borderBottom: "1px solid black"}}>Sidebar</h1>
            {/* {props.students.map((student, index) => (
                <div key={index}>
                    <h1 style={{color: "black"}}>{student}</h1>
                </div>
            ))} */}
            <ul>
                {props.students.map((student, index) => (
                    <li key={index}>
                        <h1 style={{color: "black"}}>{student}</h1>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar