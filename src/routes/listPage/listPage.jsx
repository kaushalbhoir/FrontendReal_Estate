import "./listPage.scss";
import Filter from "../../components/filter/fliter"
import Card from "../../components/card/card"
import { listData } from "../../lib/dummydata";
import Map from "../../components/map/Map";
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
         <Map items={data}/>
      </div>
      </div>
    
  )
    
 }
  export default ListPage;