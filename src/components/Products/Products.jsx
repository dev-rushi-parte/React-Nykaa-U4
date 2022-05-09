import React, { useState } from "react";
// import { data } from "./Data";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import "./Hover.css";
const Grid = {
  padding: "5px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  cursor: "pointer",
};

export default function Products({ data }) {
  let navigate = useNavigate();

  const SetCartdata = (elem) => {
    const data = JSON.parse(localStorage.getItem("cartProducts")) || [];
    
    let flag = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].item === elem.item) {
        alert("iteam already");
        flag = true;
        elem.qty = elem.qty+ 1;
        console.log(elem.qty)
      }
    }

    if (flag == false) {
      elem.qty = 1;
      data.push(elem);
      localStorage.setItem("cartProducts", JSON.stringify(data));
      alert("iteam added");
    }
  };

  const Handleclick = (e) => {
    localStorage.setItem("Products", JSON.stringify(e));
    navigate("./productsDetails");
  };
  return (
    <>
      {data.map((elem) => {
        return (
          <div style={Grid} className="divAcc">
            <div
              onClick={() => {
                Handleclick(elem);
              }}
            >
              <img src={elem.image_url} alt="Product img" />
              <p style={{ height: "60px" }}>{elem.product_name}</p>
              <span>MRP:</span>
              <span style={{ textDecoration: "line-through" }}>
                {elem.MRPcut}
              </span>
              <span style={{ fontWeight: "bold" }}>{elem.MRP}</span>|
              <span>{elem.discount}</span>
              <p>
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}({elem.rating})
              </p>
            </div>

            <div
              style={{ height: "50px", width: "100%" }}
              className="divAccHover"
            >
              <div style={{ width: "20%", cursor: "pointer" }}>
                <FiHeart
                  style={{
                    width: "60%",
                    height: "60%",
                    color: "rgb(252,39,121)",
                  }}
                />
              </div>
              <div style={{ width: "80%" }}>
                <button
                  onClick={() => {
                    SetCartdata(elem);
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgb(252,39,121)",
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "white",
                    border: "none",
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
