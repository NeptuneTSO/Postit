
import Loader from "./Loader"
import Post from "./Post"
const Main = ({posts, loading, error}) => {
    //have to render loader conditionally
    return (
         <div className="container px-4 px-lg-2">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10">
                    {/* wa */}
                    {loading && !error && <Loader />}
                    {/* use it only when it is true or false */}
                    {!loading && error && <p className="alert alert-warning">Error loading posts</p>}

                    {posts && posts.map(function(post) {
                        return (
                            <Post key={post.id} post={post} />
                    )
                    })}
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-danger text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
    )
}

export default Main