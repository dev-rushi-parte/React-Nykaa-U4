import React from "react";
import data from "./homeData.json"
 import style from  "./home.module.css";
import uuid from 'react-uuid'

export const DataMap=()=>{

    return<>
    <div id={style.imgs} >
  {
      
      data.map((offer) =>{
          return<div key={uuid}>
        <img  className={style.style} src={offer.img} alt="img"/>
       <p className={style.name}>{ offer.name}</p> 
        </div>
         
      })
  }</div>
    </>

}