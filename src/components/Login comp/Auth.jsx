import React from 'react'
import './All.css'
import "./All1.css"
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
  const navigate = useNavigate()
  return (
    <div className='App1'>  
    <div className='Appsub1' >
       <div className="intodiv"  >

{/* <img className="Intoimage" src="https://images-na.ssl-images-amazon.com/images/I/218+AWYW0nL._SY498_BO1,204,203,200_.jpg" alt="imag" ></img> */}
   
  </div>
  <div className="signin" >
        Sign In
    </div>
    <div  className='para1' >
        <div  >To quickly find your favourites items,  
     </div>
        <div> saved addresses and payments</div>
    </div>
   
    <div className='line' ><hr/></div>

    <div  className='reg' >Register and earn 2000 reward points</div>
    <div className='img1' ><img src='https://heyletsmakestuff.com/wp-content/uploads/2017/11/Christmas-Gift-Clip-Art-FB-LINK-UPLOAD-700-x-366.jpg' alt='image here' ></img></div>
    <div className='enterphn' onClick={()=>navigate('/login/user')} >Enter Phone Number Or Email</div>
    <div className='google' >

<div >  <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/google_tile_logo_icon_170069.png' alt=' here' ></img> </div>
<div onClick={()=>{navigate ("/login/user")}}>Google</div>
</div>
<div className='last1'>

<div>By continuing, you agree that you</div>
<div>have read and accept</div>
<div>our <a href='www.google.com' >T&Cs </a>and <a href='www.google.com' >Privacy Policy</a> .</div>
</div>
   

     </div></div>
  )
}
