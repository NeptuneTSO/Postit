// how to create functional components
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./style.css";

const App = () => {

  // const appName = "Project Hero";//assume this is coming from an api
  // let accountBalance = 1000;//assume this is coming from an api

  const students = ["Genevieve Nnaji", "Rita Dominic", "Segun Arinze"];

  const Products = [
    {id: 1, name: "Product 1", price: 100},
    {id: 2, name: "Product 2", price: 200},
    {id: 3, name: "Product 3", price: 300},
    {id: 4, name: "Product 4", price: 400},
    {id: 5, name: "Product 5", price: 500}
  ]

  let isLoggedIn = true;

  return (
    //jsx must be rendered here. There are rules to using it. they are:
    //1. must return a single root element
    //2. must have a closing tag
    //3. must have a closing tag for all self-closing tags

    // there are 3 ways to render conditional content in jsx:
    // 1. using ternary operator
    // 2. using logical && operator
    // 3. using if else statement

    // if there is anything that is constantly changing in your application like account balance, it is not smart to put it in a variable, but rather use a state variable
    <div className="container">
      {/* conditional rendering */}
      {isLoggedIn ? <Dashboard /> : <Login />}
      <Header />
      <div className="row">
        <Main products={Products} />
        <Sidebar students={students} />
      </div>
      {/* another row */}
      <div className="row">
        {students.map((student, index) => (
          <div key={index}>
            <h1>{student}</h1>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App