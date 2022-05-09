import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider =({children})=>{  
    let cartdata = JSON.parse(localStorage.getItem("cartProducts"));
    const [cart,setCartLength]=useState(cartdata.length);
    const [data,setData]= useState(cartdata)
    const value={cart,setCartLength,data,setData};
    return <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>


}