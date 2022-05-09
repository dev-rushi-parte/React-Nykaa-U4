import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import Productpage from "../Header/Productpage";
const ProductDetails = {
  width: "80%",
  display: "flex",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  margin: "auto",
};

export default function ProductsDetails() {
  let data = JSON.parse(localStorage.getItem("Products"));
  const [Data] = useState([data]);
  return (
    <>
    <Navbar/>
    {/* <Productpage/> */}
    <div style={{ width: "100%"}}>
      {Data.map((elem, index) => {
        return (
          <div style={ProductDetails} key={index}>
            <div
              style={{
                width: "30%",
                
                padding: "5px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={elem.image_url}
                alt=""
              />
            </div>
            <div
              style={{ width: "70%", padding: "5px",  }}
            >
              <h2>{elem.product_name}</h2>
              <p>
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}({elem.rating})
              </p>
              <span>MRP:</span>
              <span style={{ textDecoration: "line-through" }}>
                {elem.MRPcut}
              </span>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                ₹{elem.MRP}
              </span>
              |<span style={{ color: "green" }}>{elem.discount}</span>
              <p>inclusive of all taxes</p>
              <button
                style={{
                  padding: "10px",
                  width: "200px",
                  color: "white",
                  background: "rgb(252,39,121)",
                  height: "50px",
                  border: "none",
                  borderRadius: "1px",
                  cursor:"pointer"
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        );
      })}
    </div>
    <Footer/>
    </>);
}
