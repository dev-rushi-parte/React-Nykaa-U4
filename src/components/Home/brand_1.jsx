import React from "react";
import data from "./brand.json";
 import style from  "./home.module.css";
  import uuid from 'react-uuid'
export const Brand=()=>{
    return<>
         <div id={style.imgs1}>
  {
    
      data.map((offer) =>{
          return<div key={uuid}>
        <img className={style.style1} src={offer.img} alt="img"/>
       <p className={style.name}>{ offer.name}</p> 
        </div>
 
      })
  }
  </div>
    </>
}