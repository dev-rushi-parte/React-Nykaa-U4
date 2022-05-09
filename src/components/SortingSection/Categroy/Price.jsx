import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const gSort = {
    //   display: "flex",
    width: "250px",
    height: "50px",
    alignItems: "center",
    
    padding: "5px",
    gap: "5px",
    justifyContent: "space-between",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius:"5px",
    // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius:"5px"
  };
  const gShortc = {
    // display: "flex",
    width: "250px",
    height: "auto",
    alignItems: "center",
    borderBottom: "0px solid",
    padding: "5px",
    gap: "5px",
    justifyContent: "space-between",
    cursor: "pointer",
    // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius:"5px"
    
  };
  const shortCategory ={
      display:"flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding:"0px 10px 0px 10px"

  }

export default function Price() {
  const [category, setCategory] = useState(true);

  return (
    
      <div style={category? gSort:gShortc} onClick={()=>setCategory(!category)}>
        <div
          style={{
            display: "flex",
            alignItems: "Center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "Center", gap: "5px" }}>
            <p>Price</p>
          </div>
          <div >
            <FiChevronDown className fontSize={"25px"} />
          </div>
        </div>

        <div>
          <div style={shortCategory}>
           <p>Rs:   0- Rs 499</p>
           <input type="checkbox" name="" id="" />
          </div>
          <div style={shortCategory}>
          <p>Rs:   500- Rs 999</p>
           <input type="checkbox" name="" id="" />
          </div>
          <div style={shortCategory}>
          <p>Rs:   1000- Rs 1999</p>
           <input type="checkbox" name="" id="" />
          </div>
          <div style={shortCategory}>
          <p>Rs:   2000- Rs 2999</p>
           <input type="checkbox" name="" id="" />
          </div>
          <div style={shortCategory}>
          <p>Rs:   3000- Rs 4999</p>
           <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
    
  );
}
