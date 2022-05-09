import style from "./Navbar.module.css";
import {  useNavigate,Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const HeaderMenu = () => (
 
  <div className={style.header_container}>
        
    <div className={style.header_logo}  >
        <a href="/">  <img
        src="https://d2un9pqbzgw43g.cloudfront.net/main/nykaa-1200x800-1.png"
        alt="nykaa logo"
        style={{ cursor: "pointer" }}
        
      /></a>
    
    </div>
    <div className={style.header_nav}>
      <p>CATEGORIES</p>
      <p>BRANDS</p>
      <p>NYKAA FASHION</p>
      <p>BEAUTY ADVICE</p>
      <p>NYKAA NETWORK</p>
    </div>
    <div className={style.search_box}>
      {/* media_input */}
      <div className={style.input_box}>
        {/* <i className="bx bx-search"></i> */}
        <input
          autocomplete="off"
          type="text"
          placeholder="Search for Nykaa "
          value=""
        />
      </div>
    </div>
    <div className={style.accounts}>
      <Link to={"/login"}>
        {" "}
        <div className={style.icon}>
          <i class="fa-solid fa-user"></i> <span>Account</span>
        </div>
      </Link>

      <div style={{ marginLeft: "10px" }}>
        <Cart />
      </div>
    </div>
  </div>
);
export default HeaderMenu;
