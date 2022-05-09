import React, { useState,useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { AiOutlineDelete, AiOutlineRight } from "react-icons/ai";

import { CartContext } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";


import { useNavigate } from "react-router-dom";

export default function Cart() {
  var totalPrice=0;
  const navigate=useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const {cart,setCartLength,data,setData} = useContext(CartContext);
 const navigate = useNavigate();
  useEffect(() => {
    totalPrice(data);
  }, [data])
  
  const [total, setTotal] = useState(0);

  
  

  let totalPrice =(data)=>{
    let newtotal=data.reduce((acc,elem)=>{
      return acc+(Number(elem.MRPsort)*elem.qty)
    },0)
    setTotal(newtotal)
  }
  const HandleClick=()=>{
    localStorage.setItem("total", JSON.stringify(total));  
navigate('/address');
  }
  
  const handleDelete=(i)=>{
    let newData = data.filter((elem)=>{
return elem.item !== i.item
    })
    localStorage.setItem("cartProducts",JSON.stringify(newData))
    setData([...newData])
    setCartLength(newData.length)
    totalPrice(newData)
  }


  const [total, setTotal] = useState(1000);

  let cartdata = JSON.parse(localStorage.getItem("cartProducts")) ||[];
    const [data, setdata]=useState(cartdata);
  //   console.log(cartdata);
  // let {cart}= CartContext(CartContext);


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
const deleteItem=(id)=>{

  let newData = data.filter((elem) => {
    return elem.item  !== id;
  });
  setdata(newData);
  localStorage.setItem("cartProducts",JSON.stringify(newData));
}

  const list = (anchor) => (
    <Box
      sx={{ width: 420 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>

        <h3>Shopping Bag({cart})</h3>
        {data.map((i) => {

        <h3>Shopping Bag({cartdata.length})</h3>
        {data.map((i) => {
          totalPrice +=i.MRP*i.qty;
             localStorage.setItem("total", JSON.stringify(totalPrice));

          return (
            <>
              <div
                key={i.item}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "justify",
                  justifyContent: "flex-start",

                  justifyItems: "space-between",
                  padding: "5px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={i.image_url}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div style={{ width: "280px" }}>
                    <p>{i.product_name}</p>
                  </div>
                </div>


                <div style={{}}>
                  <AiOutlineDelete style={{ fontSize: "20px",cursor:"pointer"}} onClick={()=>handleDelete(i)} />

                <div onClick={() => deleteItem(i.item)}>
                  <AiOutlineDelete style={{ fontSize: "20px" }} />

                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  position: "sticky",
                  top: "0px",
                }}
              >
                <div>
                  <span>Quantity:</span> <span>{i.qty}</span>
                </div>
                <div>₹{i.MRP}</div>
              </div>
            </>
          );
        })}
        <h4>Payment Details</h4>
        <div
          style={{
            width: "90%",
            
            fontWeight:"bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>Bag Total</p>
            
          </div>
          <div><p>{total}</p></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
            alignItems: "flex-start",
            
          }}
        >
          <div
            style={{
              width: "50%",

              height: "50px",
              marginLeft: "0px",
            }}
          >
            <span>Grand Total:</span>
            <br />
            <span>₹{totalPrice}

            </span>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",

              height: "50px",
              alignItems: "center",
            }}
          >
            <button onClick={()=>navigate("/address")}
              style={{
                width: "100%",
                height: "100%",
                color: "white",
                fontSize: "15px",
                background: "rgb(252,39,121)",
                border: "none",
                fontWeight: "bold",
                cursor:"pointer"
              }}

              onClick={HandleClick}
            >
              Proceed
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {
              <i
                className="fa-solid fa-bag-shopping"
                style={{ color: "black", fontSize: "20px" }}
              ></i>
            }
            <div
              style={{
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                background: "rgb(252,39,121)",
                color: "white",
                fontSize: "12px",
                position: "absolute",
                right: "10px",
                bottom: "15px",
              }}
            >
              {cart}
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
