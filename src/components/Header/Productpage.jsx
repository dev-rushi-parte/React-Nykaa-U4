import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';

const Productpage = () => {
  return (
    <div className={style.Productpage}>
      <ul>
        <div className={style.div}>
        <li>
              <a href="Makeup" />
              Makeup
            </li>
        <div className={style.div1}>
          <div>
        
              <h3>Face</h3>
              <p>Face Primer</p>
              <p>Concealer</p>
              <p>Foundation</p>
              <p>Compact</p>
              <p>Contour</p>
              <p>Loose Powder</p>
              <p>Blush</p>
              <p>Bronzer</p>
              <p>Highlighter</p>
              <p>Setting spray</p>
              <p>Makeup Remover</p>
              <p>Sindoor</p>
          </div>
          <div>
          <h3>Eyes</h3>
            <p>Kajal</p>
            <p>Eyeliner</p>
            <p>Mascara</p>
            <p>Eye Shadow </p>
            <p>Eye Brow Enhancers</p>
            <p>Eye printer</p>
            <p>Faise Eyelashes</p>
            <p>Eye Makeup Remover</p>
          </div>
        </div>
        </div>


        <div className={style.div}>
        <li>
          <a href="Skin" />
          Skin
        </li>
        <div className={style.div1}>

          <div>
        
          <h3>Cleansers</h3>
              <p>Facewash</p>
              <p>Cleanser</p>
              <p>Scrubs & Exfoliators</p>
              <p>Facial Wipes</p>
              <p>Makeup Remover</p>
              <h3>Toners</h3>
              <p>Toners & Mists</p>

              <h3>Trending Searches</h3>
              <p>Toners Under 1000</p>
              <p>Face Wash for Oily skin</p>
          </div>
          <div>
          <h3>Moisturizers</h3>
            <p>Face Moisturizers & Day</p>
            <p>Cream</p>
            <p>Night Cream</p>
            <p>Face Oils</p>
            <p>Serums & Essence</p>
            <p>BB & CC Creams</p>
            <p>Masks</p>
            <p>Masks & Peels</p> 
            <p>Kits & Combos</p>
            <p>Facial Kits</p>
            <p>Gift Sets</p>
          </div>
        </div>
        </div>
        <div className={style.div}>
        <li>
          <a href="Hair" />
          Hair
        </li>
        <div className={style.div1}>

          <div>
        
          <h3>Hair Care</h3>
              <p>Nutritional Supplements</p>
              <p>Shampoo</p>
              <p>Dry Shampoo</p>
              <p>Conditioner</p>
              <p>Hair Oil</p>
              <p>Hair Serum</p>
              <p>Hair Creams & Masks</p>
          </div>
          <div>
          <h3>Tool & Accessories </h3>
            <p>Hair Brushes </p>
            <p>Hair Combs</p>
            <p>Dryers & Stylers</p>
            <p>Straighteners</p>
            <p>Rollers & Curlers</p>
            <p>Hair Extensions</p>
            <p>Hair Accessories</p>
          </div>
        </div>
        </div>

    
        <div className={style.div}>
        <li>
          <a href="Appliences" />
          Appliences
        </li>
        <div className={style.div1}>

          <div>
        
              
          <h3>Hair Styling Tools</h3>
              <p>Hair Dryers</p>
              <p>Straighteners</p>
              <p>Curling Iron/ Styles</p>
              <p>Multi Stylers</p>
          </div>
          <div>
          <h3>Hair Removal Tools </h3>
            <p>Epilators </p>
            <p>Body Groomers</p>
            <p>Bikini Trimmers</p>
          </div>
        </div>
        </div>
     
      
        <li>
          <a href="Personal care" />
          Personal care
        </li>
        <li>
          <a href="Natural" />
          Natural
        </li>
        <li>
          <a href="Natural" />
          Mom & Baby
        </li>
        <li>
          <a href="Natural" />
          Health & Wellness
        </li>
        <li>
          <Link to='/men'>Men</Link>
          
        </li>
        <li>
          <a href="Natural" />
          Fragrence
        </li>
      </ul>
    </div>
  );
};

export default Productpage;
