import React,{useEffect,useRef} from 'react'
import axios  from "axios"
 import uuid from 'react-uuid'
  import style from  "./home.module.css";
export default function Kite() {
   const [data,setdata]=React.useState([])

  useEffect(()=>{
//   axios.get("http://localhost:8080/sellers").then((res)=>{
//  setdata(res.data)

//   })

 axios.get("http://localhost:8080/Kites").then((res)=>{
setdata(res.data)

  })
  })
  const inputE2 = useRef(null);

    const handelLeft=()=>{
            inputE2.current.scrollLeft +=150;
    }
     const handelRight=()=>{
            inputE2.current.scrollLeft -=150;
    }

  return (<>
   <div id={style.fx1} ref={inputE2}>
      <img src="https://images-static.nykaa.com/uploads/45d5a7b6-86eb-4850-9568-4d6ed91731fe.svg" alt="arrow" className={style.arrL} onClick={()=>{handelLeft()} }/>
        <img src="https://images-static.nykaa.com/uploads/3df01759-af0c-4d81-b2f7-f61577ac3807.svg" alt="right" className={style.right_arr} onClick={()=>{handelRight()}}/>
  {
      
      data.map((offer) =>{
          return<div key={uuid} >
        <img className={style.sty} src={offer.img} alt="img"/>
       <p className={style.nam1}>{ offer.head}</p> 
       <p className={style.pr1}>{offer.price}</p>
        </div>
      
         
      })
  }</div>
  </>
    
  )
}

