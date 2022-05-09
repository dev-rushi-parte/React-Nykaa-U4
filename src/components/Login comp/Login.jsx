import React from 'react'
import './All1.css'
//import "./All.css";
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



export const Login = () => {
  const navigate=useNavigate();
  const [form,setform]=useState({})
  const [status,setstatus]=useState("")


  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})

  }
  const handlesubmitt=()=>{
    axios.get(`http://localhost:8080/users?username=${form.username}&password=${form.password}`)
    .then((res)=>{
      
      if(res.data.length!==0){
        setstatus("Login succesfull")
        setTimeout(() => {

          navigate("/")
          
        }, 2000)  
      }
      else{
        setstatus("Login failed")
      }
    })

  }
  return (
  <div className='App' >
   
        <div >

        <div className="into1div"  >
      

{/* <img className="Into1image" src="https://images-na.ssl-images-amazon.com/images/I/218+AWYW0nL._SY498_BO1,204,203,200_.jpg" alt="imag" ></img> */}
  <p>LOGIN</p>
  </div>
  <div className='email1' > <input onChange={handlechange} type="text" name='username' placeholder='Enter Email ID or Phone Number' />
     <input onChange={handlechange} type="text" name='password' placeholder='Enter Password' />
   <div className='blank' ></div>
   </div>
   <div className='proceed'  ><button onClick={handlesubmitt} >LOGIN</button></div>
   <div className='proceed1'  ><button onClick={()=>{navigate("/login/user/account")}} >CREATE AN ACCOUNT</button></div>
   <div className='status' >{status}</div>



</div>

  </div>
  )
}
