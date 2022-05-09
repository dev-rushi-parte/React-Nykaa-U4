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
  
    // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius:"5px"
  };
  const gShortc = {
    // display: "flex",
    width: "250px",
    height: "auto",
    alignItems: "center",
   
    padding: "5px",
    gap: "5px",
    justifyContent: "space-between",
    cursor: "pointer",
    // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    
    
  };
  const shortCategory ={
      display:"flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding:"0px 10px 0px 10px"

  }

export default function Gender() {
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
            <p>Gender</p>
          </div>
          <div >
            <FiChevronDown className fontSize={"25px"} />
          </div>
        </div>

        <div>
          <div style={shortCategory}>
           <p>Male</p>
           <input type="checkbox" name="gender" id="" />
          </div>
          <div style={shortCategory}>
          <p>Female</p>
           <input type="checkbox" name="gender" id="" />
          </div>
          
        </div>
      </div>
    
  );
}
