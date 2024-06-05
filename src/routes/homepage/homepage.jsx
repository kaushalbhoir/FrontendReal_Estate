import './homepage.scss'
import SearchBar from "../../components/searchBar/SearchBar"



 function HomePage(){

    return(
        <div className='homePage' >
          <div  className="textContainer">
            <div className="wrapper">
            <h1> Find Real State & Gtet Ypur Dream PLace</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard
             dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuri  
            </p>
            <SearchBar/>
             <div className="boxes">
               <div className="box">
                  <h1>16+</h1>
                  <h2> Years of Experience</h2>
                </div>  
                <div className="box">
                  <h1>16+</h1>
                  <h2> Years of Experience</h2>
                </div>  
                <div className="box">
                  <h1>2000+</h1>
                  <h2> Property Ready</h2>
                </div>    
               
             </div>
            </div>
            
          </div>
          <div  className="imgContainer">
           <img src="/bg.png" alt="/" />
           </div>

         </div>
    ) 
 }

  export default HomePage;