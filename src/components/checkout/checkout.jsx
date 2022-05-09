import React from 'react'
import Nav from './navAdd'
import style from "./checkout.module.css";
import { borderBottom } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  let cartdata = JSON.parse(localStorage.getItem("cartProducts"));
   let total = JSON.parse(localStorage.getItem("total"));
   let navigate=useNavigate();
  let discount=0;
  let save=0;
  console.log(cartdata);
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
      <button className={style.btn} onClick={()=>navigate("/address/payment")}> ship to this address <i class="fa-solid fa-greater-than"></i></button></div>
   
    <div className={style.three}>
      <div className={style.color}>
        <p>items in your bag</p>
      </div>
      <div className={style.product}>
     {cartdata.map((item)=>{
       save=Math.floor((total*10/100));
      discount=total-save;
      localStorage.setItem("save",JSON.stringify(save));
      localStorage.setItem("discount",JSON.stringify(discount));
         return(
           <>
           <div   key={item.item}
           style={{
               display:"flex"
             }}>
             <div >
               <img 
                      src={item.image_url}
                      alt=""
                      style={{ width: "100px", height: "100px" }}/>

                      </div>
                      <div>
                         <p style={{
                           textAlign:"left",  
                           width:"200px",
                           paddingLeft:"20px",
                           borderBottom:"1px solid rgb(236,236,236)"
                         }}
                         >{item.product_name}</p>

                          <span style={{
                            marginLeft:"-130px"
                          }}
                          >Qty:</span> <span>{item.qty}</span>
                      </div>
           </div>
           </>
         )
     })}
       
      </div>
      <div className={style.total}>
        <div> <p>Sub total</p>
          <p>₹{total}</p></div>
        <div>
          <p>shipping charge</p>
          <p className={style.green}>free</p>
        </div>
        <div>
          <p className={style.green}>discount 10% off you save</p>
          <p className={style.green}>₹{save}</p>
        </div>
      
        <div>
          <p>Use Reward Points (2000)</p>
          <p className={style.pink}>apply</p>
        </div>
        <div className={style.top_bottom}>
          <p>Grand Total</p>
          <p>₹{discount}</p>
        </div>
      </div>

    </div>
    </div>
    </>
  )
}