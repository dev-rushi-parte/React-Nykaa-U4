import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./checkout.module.css";
export default function NavPay() {
  let navigate = useNavigate()
  return (<div className={style.nav}>
     <div onClick={()=>navigate('/')}>
       <img className={style.icon} src='https://d2un9pqbzgw43g.cloudfront.net/main/nykaa-1200x800-1.png' alt='icon_nykaa'/>
     </div>
     <div className={style.add}>
       <div><p className={style.head}>1 - login</p> 
  
       <p>rushikeshparte10@gmail.com</p>
       </div>
       <div onClick={()=>navigate('/address')}>
         <p  className={style.head}>2 - address</p>
         <p>At-indavali, Post-karandi</p>

       </div>
       <div className={style.hr}>
         <p className={style.address}>3 - payment</p>
       </div>
     </div>
  </div>
   
  )
}
