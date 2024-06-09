import "./listPage.scss";
import Filter from "../../components/filter/fliter"
import Card from "../../components/card/card"
import { listData } from "../../lib/dummydata";
 function ListPage() {

    const data=listData;
  return(
     
     <div className="Listpage">

      <div className="listContainer">
         <div className="wrapper">
             <Filter/>
             {data.map(item=>(
               <Card key ={item.id} item={item}/>
             ))}
         </div>
      </div>
      <div className="mapContainer">
         Map
      </div>
      </div>
    
  )
    
 }
  export default ListPage;