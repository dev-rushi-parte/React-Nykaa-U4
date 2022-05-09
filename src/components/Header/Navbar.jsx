import style from './Navbar.module.css';
import React from 'react'
import Header from './header';
//import Productpage from './Productpage';

function Navbar() {
  return (
    <div className={style.sticky}>
       <Header/>
    
    {/* <Productpage/> */}


    </div>
  )
}

export default Navbar
