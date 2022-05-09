import React from 'react'
import style from "./checkout.module.css";
export default function Nav() {
  return (<div className={style.nav}>
     <div>
       <img className={style.icon} src='https://d2un9pqbzgw43g.cloudfront.net/main/nykaa-1200x800-1.png' alt='icon_nykaa'/>
     </div>
     <div className={style.add}>
       <div><p className={style.head}>1 - login</p> 
  
       <p>rushikeshparte10@gmail.com</p>
       </div>
       <div className={style.hr}>
         <p className={style.address}>2 - address</p>
         <p>At-indavali, Post-karandi</p>

       </div>
       <div>
         <p className={style.head}>3 - payment</p>
       </div>
     </div>
  </div>
   
  )
}
