import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import CategoryMain from "./Categroy/CategoryMain";

const gSort = {
  //   display: "flex",
  width: "250px",
  height: "50px",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "5px",
  gap: "5px",
  justifyContent: "space-between",
  cursor: "pointer",
  overflow: "hidden",
  fontWeight:"bold",
  borderRadius:"5px"
};
const gShortc = {
  // display: "flex",
  width: "250px",
  height: "auto",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "5px",
  gap: "5px",
  justifyContent: "space-between",
  cursor: "pointer",
  fontWeight:"bold",
  borderRadius:"5px"
};
const radioButtondiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function Sort({data,setData}) {
  const [sort, setSort] = useState(true);
  const [sortvalue,setSortValue] = useState("Popularity");
  
  

  const Handlesort = (e) => {
    const newData = data.sort((a, b) => {
      if (e.target.value === "lth") {
        setSortValue("Low To High")
        return a.MRPsort - b.MRPsort;
      } else if (e.target.value === "htl") {
        setSortValue("High To Low")
        return b.MRPsort - a.MRPsort;
        
      } 
      else if(e.target.value==="rated") {
        setSortValue("Customer top Rated")
        return b.rating - a.rating;
      }
      else{
        setSortValue("Discount")
        return b.discountsort - a.discountsort;
      }
    });
    setData([...newData]);
    // console.log('newData:', newData)
  };
  return (
    <div >
      <div style={sort ? gSort : gShortc} onClick={() => setSort(!sort)}>
        <div
          style={{
            display: "flex",
            alignItems: "Center",
            justifyContent: "space-between",
          }}
        >
          
          <div style={{ display: "flex", alignItems: "Center", gap: "5px" }}>
            <p>Sort By:</p>
            <span>{sortvalue}</span>
          </div>
          <div className="gicon">
            <FiChevronDown color="rgb(252,39,121)" fontSize={"25px"}/>
          </div>
        </div>

        <div>
          <div style={radioButtondiv}>
          <div style={{display:"flex",alignItems:"center"}}><p>Price:</p>
            <span>High To Low</span></div>
            <div> <input type="radio" name="Sortradio"value="htl" onClick={(e)=>{Handlesort(e)}}/></div>
          </div>
          <div style={radioButtondiv}>
            <div style={{display:"flex",alignItems:"center"}}><p>Price:</p>
            <span>Low To High</span></div>
            <div> <input type="radio" name="Sortradio"value="lth" onClick={(e)=>{Handlesort(e)}}/></div>
            
           
          </div>
          <div style={radioButtondiv}>
            <p>Customer top Rated</p>
           
            <input type="radio" name="Sortradio" value="rated" onClick={(e)=>{Handlesort(e)}}/>
          </div>
          <div style={radioButtondiv}>

            <div><p>Discount</p></div>
            
            <div><input type="radio" name="Sortradio" value="discount"  onClick={(e)=>{Handlesort(e)}}/></div>
            
          </div>
        </div>
      </div>

      <CategoryMain/>
    </div>
  );
}
