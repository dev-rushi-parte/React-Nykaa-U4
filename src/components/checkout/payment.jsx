
import React, { useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import style from "./checkout.module.css";
import NavPay from './navPay';

export default function Payment() {
    const inputRef=useRef(null);
 const inputRef1=useRef(null);
 const inputRef2=useRef(null);
 const inputRef3=useRef(null);
  const navigate=useNavigate();
   const btn=()=>{
         if(inputRef.current.value==123&&inputRef1.current.value==111&& inputRef2.current.value==222&&inputRef3.current.value==333){
             alert("done");
             navigate("/")
         }
         else{
            alert("Please enter data");
         }
   }

  return (<>
 <NavPay/>
 <div className={style.choose}>
     <p>CHOOSE PAYMENT METHOD</p>
 </div>
    <div className={style.check1}>
    <div className={style.onePay}>
      <p>Credit/Debit Card</p>
      <p>UPI</p>
      <p>GooglePay</p>
      <p>Net Banking</p>
      <p>Mobile Wallets</p>
      <p>Cash on Delivery</p>
      <p>Gift Card</p>
    </div>
    <div className={style.two1}>
      <p className={style.card}>Credit/Debit Card</p>
      <input id={style.cardNo} ref={inputRef} type="Number" placeholder="Card Number"/>
      <br></br>
      <p className={style.ex}>Expiry</p>
      <br/>
      <div className={style.payInput}>
          <input ref={inputRef1} type="Nuumber" placeholder='MM'></input><p className={style.slach}>/</p>
             <input ref={inputRef2} type="Nuumber" placeholder='YY'></input>
                <input ref={inputRef3} type="Nuumber" placeholder='CVV'></input>
          
      </div>
      <button onClick={()=>{btn()}} className={style.btnPay}> Pay ₹340 now <i class="fa-solid fa-greater-than"></i></button></div>
   
    <div className={style.threePay}>
      <div className={style.color}>
        <p>items in your bag</p>
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

   <div className={style.payAdd}>

      </div>
    </div>
    
   
    </div>
    </>
  )
}
