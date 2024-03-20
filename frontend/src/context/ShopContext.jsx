import React, { createContext } from "react";
import all_products from "../components/images/all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // create context value variable
    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;