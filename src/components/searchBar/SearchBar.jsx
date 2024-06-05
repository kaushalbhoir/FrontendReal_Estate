import "./searchbar.scss";
import {useState } from "react";

  const types=[ "buy" , "rent"];

function Searchbar(){
  const[query,setQuery]=useState({

     type:"buy",
     location:"",
     minPrice:0,
     maxPrice:0

  } );

   const SwitchType = (val) =>
    {
        setQuery((prev)=> ({...prev,type :val}));
    };
   

    return (

         <div className="searchBar">
             <div className="type">

               {  types.map((type)=> (
                 <button
                  key ={type} 
                  onClick= {()=> SwitchType(type)}
                 className={query.type === type ? "active" : ""}
                 
                 >
                    {type}
                 </button>
               ))} 
              </div>
               <form>
                   <input 
                    type="text" 
                    name="location" 
                  
                    placeholder="city Location"
                     />
                   <input
                    type="number"
                    name="min Price"
                    min={0}
                    max={10000}
                    placeholder="min Price"/>
                   <input 
                     type="number"
                     name="max Price"
                     min={0}
                     max={100000}
                     placeholder="Max Price"/>

                     <button>
                        <img src="/search.png"/>
                     </button>
               </form>
             
         </div>



    )
}

export default Searchbar;