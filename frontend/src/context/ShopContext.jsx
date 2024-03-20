import React, { createContext } from "react";
import all_product from "../components/images/all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // create context value variable
    const contextValue = {all_product};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;