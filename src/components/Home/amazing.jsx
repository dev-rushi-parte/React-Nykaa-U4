import React from 'react'
import axios from "axios"
 import style from  "./home.module.css";
 import uuid from 'react-uuid'
export default function Amazing() {

  const [data,setdata]=React.useState([])

  React.useEffect(()=>{
  axios.get(" http://localhost:8080/amazing").then((res)=>{
 setdata(res.data)

  })

//  axios.get("http://localhost:8080/Kites").then((res)=>{
// setdata(res.data)
// console.log("Kites",data)
//   })
  },[])

  return (<>
   <div id={style.imgs1}>
  {
      
      data.map((offer) =>{
          return<div key={uuid}>
        <img className={style.sty_amazing} src={offer.img} alt="img"/>
       <p className={style.amazing_name}>{ offer.name}</p> 
   
        </div>
      
         
      })
  }</div>
  </>
    
  )
}
