import { useState } from "react";
import "./slider.scss"


function Slider({images}) {
   const[imageIndex,setImageIndex]= useState(null);
   return(
      <div className="slider">
         {imageIndex!==null && (
        <div className="fullslider">
                 <div className="arrow">
                     <img src="./arrow.png" alt="" />
                 </div>
                 <div className="imgContainer">
                    <img src={images[0]} alt="" />
                 </div>
                 <div className="arrow">
                     <img src="./arrow.png" className="right" alt="" />
                 </div>
                 <div className="close">
                    x
                 </div>
        </div>
        ) }
        <div className="bigImage">
            <img src={images[0]}  onClick={()=>setImageIndex(0)}      alt="" />
        </div>
         <div className="smallImages">
             {images.slice(1).map((image,index)=>(
               <img src ={image}   onClick={()=> setImageIndex(index)}     alt="" key={index}/>
            ))}
         </div>
      </div>
   )  
}

export default Slider;