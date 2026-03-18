
// import module css
import styles from "./Header.module.css"
const Header = () => {
    // console.log(props);//props is an object that contains all the properties passed to the component
    //props.appName is the property passed to the component
    // logics here
    // add a logic here to determine the title
    // another way of doing it is not to use props, child can pick up what is coming from the parent thru destructuring

    // conditional rendering is a way to conditionally render elements. To conditionally render elements, use the ternary operator. Example would be:
    // {condition ? <Element1 /> : <Element2 />}
    const appname = "Project Zero";
    const subtitle = "A modern web application";
    const rowStyle = {
        backgroundColor: "yellow",
        color: "black",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        minHeight: "100px"
    }
    return (
        <div className={`${styles.myrow} row shadow-lg text-center my-3`} style={rowStyle}>
            <h1>{appname}</h1>
            <p>{subtitle}</p>
            <p>Account Balance: {1000}</p>
            {/* <button onClick={() => alert(`Hunger oo! ${appname}`)}>Click Me</button> */}
            {/* Add an event listener to the button to show an alert when clicked */}
        </div>
    )
}//to display javascript code in jsx, use curly braces

export default Header