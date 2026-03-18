import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const Create = () => {
    // these data: products, setProducts are coming from the ProductContext
    const {products, setProducts} = useContext(ProductContext);
    // const [productName, setProductName] = useState("");
    // const [productPrice, setProductPrice] = useState("");
    // // need a state for id that is auto generated
    // const [id, setId] = useState("");
    const [form, setForm] = useState({
            id: "",
            name: "",
            price: ""
    }); //a state to manage all form elements and id

    // a function that responds when the form is submitted
    const handle_submit = (e) => {
        e.preventDefault();
        // validation
        if (!form.name || !form.price) {
            alert("Please fill in all fields");
            return;
        }else{
            // generate id
            const newId = Date.now().toString();
            setForm({
                ...form,
                id: newId
            });
            // TODO: Add logic to save the product
            console.log("Product created:", { id: newId, name: form.name, price: form.price });
            // combine everything into a product object
            // const data = {
            //     id: newId,

            console.log("Product object:", form);
            // TODO: Add logic to save the product to a database or state
            // how to update the state in the parent component? You would need to pass a function as a prop to this component
            setProducts([...products, form]);
        }
    }

    function updateFormState(e){
        // to update the state
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e);
    }
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2 py-5">
                <form onSubmit={handle_submit}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" className="form-control" name="name" id="productName" value={form.name} onChange={updateFormState} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Product Price</label>
                        <input type="number" className="form-control" name="price" id="productPrice" value={form.price} onChange={updateFormState} />
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-3 w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;