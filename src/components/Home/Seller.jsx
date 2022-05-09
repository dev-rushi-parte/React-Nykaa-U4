import React from 'react'
import axios from "axios"
 import style from  "./home.module.css";
 import uuid from 'react-uuid'
export default function Seller() {

  const [data,setdata]=React.useState([])

  React.useEffect(()=>{
  axios.get("http://localhost:8080/sellers").then((res)=>{
 setdata(res.data)

  })

//  axios.get("http://localhost:8080/Kites").then((res)=>{
// setdata(res.data)
// console.log("Kites",data)
//   })
  },[])

  return (<>
   <div id={style.fx}>
  {
      
      data.map((offer) =>{
          return<div key={uuid}>
        <img className={style.sty} src={offer.img} alt="img"/>
       <p className={style.nam}>{ offer.name}</p> 
       <p className={style.pr}>{offer.price}</p>
       <button className={style.view}>View</button>
        </div>
      
         
      })
  }</div>
  </>
    
  )
}
