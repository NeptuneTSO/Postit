
import { useEffect } from "react";
// component to display meals and connects to the API and loop thru the meal coming back and display it in the ui
//useEffect is used to connect to an external application from your application
const Meal = () => {
    useEffect(() => {
        // fetch meals from API
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-bold underline" style={{textAlign: 'center'}}>Meal</h1>
        </div>
    );
};

export default Meal;