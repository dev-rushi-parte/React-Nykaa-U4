import React, { useState } from "react";
import Ad from "./AdsSection/Ad";
import Products from "./Products/Products";
import Sort from "./SortingSection/Sort";
import { data } from "./Products/Data";
import Navbar from "./Header/Navbar";
import Productpage from "./Header/Productpage";
import Footer from "./Footer/Footer";
const style = {
  display: "flex",
  width: "100%",

  gap: "100px",
};
const gridDiv = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "10px",
};

export default function ProductsMain() {
  const [pdata, setData] = useState(data);
  return (
    <>
    <Navbar/>
    <Productpage/>
    <div className="Mainpage">

      <h3>All Products ({data.length - 1})</h3>
      <div>
        <Ad />
      </div>
      <div>
        <h3>All Products</h3>
      </div>
      <div className="productsdiv" style={style}>
        <div>
          <Sort data={pdata} setData={setData} />
        </div>
        <div style={gridDiv}>
          <Products data={pdata} setData={setData} />
        </div>
      </div>
    </div>
    <Footer/>
    </> );
}
