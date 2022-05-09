import {Home} from './Home/home'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductsDetails from './Products/ProductsDetails'
import ProductsMain from './ProductsMain'
import {Auth} from "./Login comp/Auth";
import { Login } from "./Login comp/Login";
import Checkout from './checkout/checkout'
import {Register} from "./Login comp/Register";
import Payment from './checkout/payment'
export default function Mainroutes() {
  return (
    <Routes>
      <Route  path='/' element={<Home/>} />
        <Route path='/men' element={<ProductsMain/>}/>
        <Route path='/all/productsDetails' element={<ProductsDetails/>}/>
        
        <Route path="/login" element={<Auth/>}/>
        <Route path="/login/user" element={<Login/>}/>
        <Route path="/login/user/account" element={<Register/>}/>
        <Route path='address' element={<Checkout/>}/>
        <Route path='/address/payment' element={<Payment/>}/>

    </Routes>
  )
}
