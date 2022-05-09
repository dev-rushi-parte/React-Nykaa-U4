import React, { useState } from "react";
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'
import "./ad.css";
let adsData = [
  {id:"1",
    img: "https://images-static.nykaa.com/uploads/91a1b147-a1a2-4eb0-83b7-aa4e10e8fefa.jpg?tr=w-1200,cm-pad_resize",
  },
  {
      id:"2",
    img: "https://images-static.nykaa.com/uploads/742bfea2-d46b-4e6a-af2a-f93b5377b45f.jpg?tr=w-1200,cm-pad_resize",
  },
];

export default function Ad(){
  const [current, setCurrent] = useState(0);

  const nextSlide=()=>{
      setCurrent(current==adsData.length-1 ? 0:current+1);
  }
const prevSlide=()=>{
    setCurrent(current==0? adsData.length-1:current-1);
}
  return (
    <div className="gSlider">
        <FaRegArrowAltCircleLeft className="Left-Arrow" onClick={prevSlide}/>
        <FaRegArrowAltCircleRight className="Right-Arrow" onClick={nextSlide}/>
      {adsData.map((elem,index) => {
        return (
          <div key={index}>
              {index===current&&(<img src={elem.img} alt="Add" className="Gimage" width={"100%"}/>)}
            </div>
          
        );
      })}
    </div>
  );
}
