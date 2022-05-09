import React from "react";

import { Brand } from "./brand_1";
import { DataMap } from "./DataMap";
import { First } from "./first_slider";
 import style from  "./home.module.css";
import img from "./img1.png"
import Kite from "./kite";
import { Offer } from "./offerSlider";

import Seller from "./Seller";

import Amazing from "./amazing";
import Blockbuster from "./blockbuster";
import Navbar from "../Header/Navbar";
import Productpage from "../Header/Productpage";
import Footer from "../Footer/Footer";

export const Home=()=>{
    return<>


     {/* <Navbar/> */}
     {/* <Productpage/> */}

   {/* <Navbar />
      <Productpage /> */}
      <Navbar/>
      <Productpage/>
     

    <img className={style.janvi} src="https://images-static.nykaa.com/uploads/7f834665-5b2f-4a86-94b8-18433066c49e.jpg?tr=w-1200,cm-pad_resize" alt="img"
    width="100%"/>
     <First/>

     <img src={img} width="105%" alt="img"/>
  <div id={style.offers}>
     <img className={style.big} src="https://images-static.nykaa.com/uploads/4292a077-f0ab-4546-a3e2-8785ddf82cc4.jpg?tr=w-1200,cm-pad_resize" alt="img"></img>

    <Brand/>
     </div>

     <Offer/>  

     <img className={style.best} src="https://images-static.nykaa.com/uploads/defd4679-12b5-4849-8455-5b4a865c8f7e.png?tr=w-1200,cm-pad_resize" alt="img"/>
     <div id={style.product}>
<Seller/>
     </div>
     <img src="https://images-static.nykaa.com/uploads/85ef71be-2745-40df-b915-331ef86bd9d6.png?tr=w-1200,cm-pad_resize" alt="img"/>
    
    <DataMap/>
    <img src="https://images-static.nykaa.com/uploads/ae4b777c-6869-43b9-b5d2-dba241e402ad.jpg?tr=w-1200,cm-pad_resize" alt="img"/>
    <div id={style.transpeant}>
    <Kite/>
    </div>

    <img src="https://images-static.nykaa.com/uploads/8c1bce72-e5c3-43aa-aad4-78d910d8007e.jpg?tr=w-1200,cm-pad_resize" alt="img"/>
    <img className={style.up} src="https://images-static.nykaa.com/uploads/8c294589-89bd-47de-8a9f-00276a07ea45.jpg?tr=w-1200,cm-pad_resize" alt="img"/>

      <div id={style.amazing}>
       <Amazing/>
      </div>
      <img src="https://images-static.nykaa.com/uploads/0882dac8-531e-4b8e-84dd-9cdabff78eb8.jpg?tr=w-1200,cm-pad_resize" alt="img"/>
      <img src="https://images-static.nykaa.com/uploads/e35e7d89-dae6-4b5a-bee8-5dee5fe43e79.jpg?tr=w-1200,cm-pad_resize" alt="img"/>

      <div id={style.blockBuster}>
    <Blockbuster/>
      </div>
      <img src="https://images-static.nykaa.com/uploads/9ab1a30a-985b-45b9-a60c-94a3d5da3b8a.jpg?tr=w-1200,cm-pad_resize" alt="img"/>
      
      <div id={style.influencer}>
          <div>
       <img src="https://images-static.nykaa.com/uploads/b7decd7a-ef0d-462a-89cf-d7b0d8c8651a.png?tr=w-300,cm-pad_resize" alt="img"/>
       <p>Shantanu's Sweat-Proof Makeup Essentials</p>
         </div>

         <div>
       <img src="https://images-static.nykaa.com/uploads/36b79fcc-fb58-4ed8-bdf0-cb34fcafe413.png?tr=w-300,cm-pad_resize" alt="img"/>
         <p>Muskan Chanchlani's Faves Under ₹999</p>
         </div>
         <div>
       <img src="https://images-static.nykaa.com/uploads/07a71bb1-711c-4535-bb2f-09f9ae573271.png?tr=w-300,cm-pad_resize" alt="img"/>
        <p>Ritika Amru's Summer Skincare Must-Haves</p>
</div>
<div>
       <img src="https://images-static.nykaa.com/uploads/fdf21291-640b-4e85-a777-02b2f915b52d.png?tr=w-300,cm-pad_resize" alt="img"/>
       <p>Jovita George's Summer Picks</p>
       </div>
      </div>

      <img src="https://images-static.nykaa.com/uploads/e2fe448f-0c9d-4903-8ae9-92bef9717cbd.jpg?tr=w-1200,cm-pad_resize" alt="img"/>
     
          <First/>


         <Footer/>

           {/* <Footer /> */}
           {/* <Footer/> */}



    </>
}