

const Post = ({post}) => {
    return (
                <>      
                        <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">{post.title}</h2>
                            <h3 className="post-subtitle">{post.body}</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">User-{post.userId}</a>
                            on {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <hr className="my-4" />
                </>
    )
}

export default Post