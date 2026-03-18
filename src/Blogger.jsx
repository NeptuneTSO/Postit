
import Nav from "./blogger_components/Nav";
import Footer from "./blogger_components/Footer";
import Main from "./blogger_components/Main";
import Header from "./blogger_components/Header";
import { useEffect, useState } from "react";
// how to send request to another application
const Blogger = () => {
    // 1 Create a state to store if the request is loading or not
    const [loading, setLoading] = useState(true);//true because we are waiting for the request to complete
    // 2. Create a state to store the posts from api
    const [posts, setPosts] = useState([]);
    // 3. Create a state to store errors
    const [error, setError] = useState(false);//false because we haven't encountered any errors yet
    //create a function to fetch
    function fetch_all_posts(){
        // fetch posts from API
        fetch("https://jsonplaceholder.typicode.com/posts")//if it was a POST request, I would need to pass in the request body. example: {method: "POST", body: JSON.stringify({title: "title", body: "body"})}
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
                setError(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
                setPosts([]);
            });
    };
    useEffect(() => {
        fetch_all_posts();
    }, []);

    // you can't use the data directly from the api, Have to put it in a state
    return (
        <>
        <Nav />
            <Header />
            
            <Main loading={loading} error={error} posts={posts}/>
            <Footer />
        </>
    )
}


export default Blogger