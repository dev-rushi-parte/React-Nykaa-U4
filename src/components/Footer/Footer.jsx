import React from 'react'


import NewsLetter from "./NewsLetter";
import FooterSocial from "./Social";
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <div>
       <NewsLetter />
      <FooterLinks/>
       <FooterSocial />
       <Copyright/>
    </div>
  )
}

export default Footer
