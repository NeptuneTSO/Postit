// import the image like a component

// import heroImage from "../images/buildin12.jpeg";

const Main = ({products}) => {
    return (
        <main className="col-md-9 p-3 text-dark">
            <h1>Main</h1>
            {/* <img src={heroImage} alt="hero" className="img-fluid" /> */}
            {/* table to display products */}
            <table className="table table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* using logical and operator to check if products array is not empty */}
                    {products && products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Main