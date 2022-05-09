import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider =({children})=>{  
    let cartdata = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const [cart,setCartLength]=useState(cartdata.length);
    const [data,setData]= useState(cartdata)
    return <CartContext.Provider value={{cart,setCartLength,data,setData}}>
    {children}
    </CartContext.Provider>


}