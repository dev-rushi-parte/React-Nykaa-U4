import React from 'react'
import './All1.css'
//import "./All.css"
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export const Register = () => {
  const navigate=useNavigate();
  const [form,setform]=useState({})
  const [status,setstatus]=useState("")


  const handlechange=(e)=>{
   console.log(e.target.name)
    setform({...form,[e.target.name]:e.target.value})

  }
  const handlesubmitt=(e)=>{
    axios.post("http://localhost:8080/users",form)
    .then((res)=>{
      if(res.request.status===201){
        setstatus("Registration succesfull")
        setTimeout(() => {

          navigate("/login/user")
          
        }, 2000);
        
        
      }
    })

  }
  return (
  <div className='App' >
        <div  >

        <div className="into1div"  >
      

{/* <img className="Into1image" src="https://images-na.ssl-images-amazon.com/images/I/218+AWYW0nL._SY498_BO1,204,203,200_.jpg" alt="imag" ></img> */}
  <p>REGISTER</p>
  </div>
  <div className='email1' > <input onChange={handlechange} type="text" name='username' placeholder='Enter Email ID or Phone Number' />
     <input onChange={handlechange} type="text" name='password' placeholder='Enter Password' />
   <div className='blank' ></div>
   </div>
   <div className='proceed'  ><button onClick={handlesubmitt} >Sign UP</button></div>
 
   <div >{status}</div>



</div>
  </div>
  )
}
