import { createContext, useState } from "react";
// import useState hook
// stage 1: create a context for the app name
export const ProductContext = createContext();

// create a provider for the app name. A provider is a super component that can provide any component that are its children with whatever value is passed to it or it has.
export const ProductProvider = ({children}) => {
     const defaultProducts = [
            { id: 1, name: "Laptop", price: 989560 },
            { id: 2, name: "Mouse", price: 2900 },
            { id: 3, name: "Keyboard", price: 9900 },
        ];
        const [products, setProducts] = useState(defaultProducts);
        
        function deleteProduct(idDelete) {
            //delete a product with id of id parameter. Filter our state and exclude a product with id of id paamter
            const filteredProducts = products.filter((prod)=>{
                return   prod.id !==idDelete;
            })
            setProducts(filteredProducts)
            // setProducts(products.filter(product => product.id !== idDelete));
        }
    return (
        <ProductContext.Provider value={{products, setProducts, deleteProduct}}> 
        {/* why double curly braces? because we are passing an object to the value prop */}
            {children}
        </ProductContext.Provider>
    )
}