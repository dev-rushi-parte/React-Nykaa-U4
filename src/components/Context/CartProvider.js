import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider =({childern})=>{
    let cartdata = JSON.parse(localStorage.getItem("cartProducts"));
    console.log(cartdata);
    const [cart,setCartLength]=useState(cartdata.length);
    const value={cart,setCartLength};
    return <CartContext.Provider value={value}>
    {childern}
    </CartContext.Provider>


}