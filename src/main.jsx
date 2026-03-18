import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from './Blogger.jsx'
import Bank from './Bank.jsx'
import Inventory from './Inventory.jsx'
import Meal from './Meal.jsx'
// import providers
import { AppNameProvider } from './context/AppNameContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNameProvider>
      <ProductProvider>
        {/* <App /> */}
        <Blogger />
        {/* <Bank /> */}
        {/* <Inventory /> */}
        {/* <Meal /> */}
      </ProductProvider>
    </AppNameProvider>
    {/* <h1>Hello World</h1> */}
  </StrictMode>,
  // <div>
  //   <h1 className="text-3xl font-bold underline">Hello WestWorld</h1>
  //   <p>Welcome to the future</p>
  // </div>
  
)
