/* eslint-disable no-undef */

import Products from "./inventory_components/Products";
import Create from "./inventory_components/Create";
import { useContext, useState } from "react";
import { AppNameContext } from "./context/AppNameContext";
import { ProductContext } from "./context/ProductContext";

const Inventory = () => {
    // state to manage products
    //to pass a parameter from child to parent, we need to use a callback function. Example: sayHello

    // to use context, gotta call a hook
    const {appName} = useContext(AppNameContext);
    const {products} = useContext(ProductContext);
   
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center pt-5">
                    <h1>{appName}</h1>
                    <h4>Track your stock levels and manage your inventory</h4>
                    // eslint-disable-next-line no-undef
                    <h6>Total Products: {products.length}</h6>
                </div>
            </div>
            {/* other components go here */}
            <Create />
            <Products />
        </div>
    )
}

export default Inventory;