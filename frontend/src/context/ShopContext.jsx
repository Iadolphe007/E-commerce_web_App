import React, { createContext, useState } from "react";
import all_products from "../components/images/all_products";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length  + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId)  =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}));
        
    }
    
    const removeFromCart = (itemId)  =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }
   
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount.toFixed(2);
    }
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if (cartItems[item]>0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }
    const contextValue = {all_products, cartItems, getTotalCartAmount, getTotalCartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;