import {useRef} from "react";
 import style from  "./home.module.css";
export const Offer=()=>{
   const inputE1 = useRef(null);

    const handelLeft=()=>{
            inputE1.current.scrollLeft +=150;
    }
         const handelRight=()=>{
            inputE1.current.scrollLeft -=150;
    }
    return <>
    <div id={style.bar}>
        <img src="https://images-static.nykaa.com/uploads/45d5a7b6-86eb-4850-9568-4d6ed91731fe.svg" alt="arrow" className={style.arrow2} onClick={()=>{handelLeft()} }/>
         <img src="https://images-static.nykaa.com/uploads/3df01759-af0c-4d81-b2f7-f61577ac3807.svg" alt="right" className={style.right_arrow2} onClick={()=>{handelRight()}}/>
    <div ref={inputE1} id={style.offerSlider}>
    <img src="https://images-static.nykaa.com/uploads/5a5ebf95-a947-48b2-9830-3305c0af0a54.jpg?tr=w-600,cm-pad_resize" alt="img"/>
      <img src="https://images-static.nykaa.com/uploads/3fcc26d6-3de7-488b-9435-5dc283ba6ee3.jpg?tr=w-600,cm-pad_resize" alt="img"/>
        <img src="https://images-static.nykaa.com/uploads/fbf04082-bbac-4651-932d-7a8db9a1079e.jpg?tr=w-600,cm-pad_resize" alt="img"/>
          <img src="https://images-static.nykaa.com/uploads/0d5d3ec0-1aa1-41d7-921b-5d7a7bcdb720.jpg?tr=w-600,cm-pad_resize" alt="img"/>
</div>
</div>
</>
}