

import React from 'react'
import Nav from './navAdd'
import style from "./checkout.module.css";

export default function Checkout() {
  return (<>
    <Nav/>
    <div className={style.check1}>
    <div className={style.one}>
      <p>save addresses</p>
      <p>new address</p>
    </div>
    <div className={style.two}>
      <p>rushikesh parte</p>
      <p>At-indavali po-karandi tal-jawali dist-satara,Satara - 415514, Maharashtra, India</p>
     <p>+91-9082106716</p>
     <div><i class="fa-solid fa-pen"></i> <p>edit</p> </div>
      <button className={style.btn}> ship to this address <i class="fa-solid fa-greater-than"></i></button></div>
   
    <div className={style.three}>
      <div className={style.color}>
        <p>items in your bag</p>
      </div>
      <div className={style.product}>
        <div>
         
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={style.total}>
        <div> <p>Sub total</p>
          <p>₹340</p></div>
        <div>
          <p>shipping charge</p>
          <p className={style.green}>free</p>
        </div>
        <div>
          <p className={style.green}>discount</p>
          <p className={style.green}>-₹0</p>
        </div>
        <div>
          <p>Use Reward Points (2000)</p>
          <p className={style.pink}>apply</p>
        </div>
        <div className={style.top_bottom}>
          <p>Grand Total</p>
          <p>₹340</p>
        </div>
      </div>

    </div>
    </div>
    </>
  )
}
