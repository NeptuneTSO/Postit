import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";

const Products = () => {
    const {products, deleteProduct} = useContext(ProductContext);
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2 py-5">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                products.length > 0 && products.map((product, index) => {
                                    return(<tr key={index}>
                                        <td>{product.name}</td>
                                        <td> ₦ {product.price}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                                            {/* used () => to pass parameters to the function, otherwise it will be called immediately when the component renders */}
                                        </td>
                                    </tr>)
                                })
                            }
                            
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;