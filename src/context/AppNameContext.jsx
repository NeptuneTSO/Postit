

import { createContext } from "react";
// stage 1: create a context for the app name
export const AppNameContext = createContext();

// create a provider for the app name. A provider is a super component that can provide any component that are its children with whatever value is passed to it or it has.
export const AppNameProvider = ({children}) => {
    const appName = "Project Zero";
    return (
        <AppNameContext.Provider value={{appName}}> 
        {/* why double curly braces? because we are passing an object to the value prop */}
            {children}
        </AppNameContext.Provider>
    )
}
// stage 3: create a consumer for the app name

// questions to ask:
// 1. What is the purpose of a context?
// 2. What is the purpose of a provider?
// 3. What is the purpose of a consumer?
// 4. How do you create a context? We use the createContext() method from react
// 5. How do you create a provider? We use the Provider component from the context
// 6. How do you create a consumer? We use the Consumer component from the context
// 7. How do you use a context? We use the useContext() hook from react
// 8. How do you use a provider? We use the Provider component from the context
// 9. How do you use a consumer? We use the Consumer component from the context
// 10. What is the difference between a context and a provider?
// 11. What is the difference between a context and a consumer?
// 12. What is the difference between a provider and a consumer?
// 13. What is the difference between a context and a provider?
// 14. What is the difference between a context and a consumer?
// 15. What is the difference between a provider and a consumer?