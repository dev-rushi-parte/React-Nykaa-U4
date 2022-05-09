import {useRef }from "react";
 import style from  "./home.module.css";
export const First=()=>{
   
 const inputE2 = useRef(null);

    const handelLeft=()=>{
            inputE2.current.scrollLeft +=150;
    }
     const handelRight=()=>{
            inputE2.current.scrollLeft -=150;
    }

    return<>
    <div>
        <img src="https://images-static.nykaa.com/uploads/45d5a7b6-86eb-4850-9568-4d6ed91731fe.svg" alt="arrow" className={style.arrow1} onClick={()=>{handelLeft()} }/>
        <img src="https://images-static.nykaa.com/uploads/3df01759-af0c-4d81-b2f7-f61577ac3807.svg" alt="right" className={style.right_arrow} onClick={()=>{handelRight()}}/>
    <div ref={inputE2} className={style.first}>
        <img  src="https://images-static.nykaa.com/uploads/7f12e789-83ce-4a44-8a0b-ac778582f2c1.png?tr=w-150,cm-pad_resize" alt="img" />
        <img  src="https://images-static.nykaa.com/uploads/f116a424-27b3-4812-a9eb-2f198fb42d0a.png?tr=w-150,cm-pad_resize" alt="img"/>
        <img  src="https://images-static.nykaa.com/uploads/a2212275-11a6-4497-a56d-34c48f722cfd.png?tr=w-150,cm-pad_resize" alt="img"/>

        <img  src="https://images-static.nykaa.com/uploads/d9a58c98-68bd-4a0f-be2e-17eaff318e94.png?tr=w-150,cm-pad_resize" alt="img"/>
        <img  src="https://images-static.nykaa.com/uploads/43414e29-b414-446c-b27b-3bd628da03cc.png?tr=w-150,cm-pad_resize" alt="img"/>
        <img  src="https://images-static.nykaa.com/uploads/eadccd61-3a75-41ad-bae2-efaa7c775520.png?tr=w-150,cm-pad_resize" alt="img"/>
        <img  src="https://images-static.nykaa.com/uploads/22b8500a-8e23-4f8e-a0ee-14ca58b7a8a6.jpg?tr=w-150,cm-pad_resize" alt="img"/>
        <img src="https://images-static.nykaa.com/uploads/acdd4596-5b32-4d74-a92d-4235f75cbdc2.png?tr=w-150,cm-pad_resize" alt="img"/>
        <img src="https://images-static.nykaa.com/uploads/7127f739-5dcb-40a5-af80-30e879f066b0.jpg?tr=w-150,cm-pad_resize" alt="img"/>
        <img src="https://images-static.nykaa.com/uploads/f3cd6008-8b36-411f-bb3c-2314128aafad.png?tr=w-150,cm-pad_resize" alt="img"/>
             
    </div>
  
     
    </div>
    </>
}