import "./navbar.scss"
import {useState} from "react";
import {Link} from "react-router-dom";



function Navbar(){
  const [open,setOpen]= useState(false);

    const user= true;
   return(
      <nav>
        <div  className="left">
         <a href="/" className="logo">
            <img src="/logo.png" alt=""/>

            <span>LamaEstate</span>
            </a>
            <a href="/"> Home</a>
            <a href="/"> About</a>
            <a href="/"> Contacts</a>
            <a href="/"> Agents</a>
            
            
            </div>
        <div  className="right">

          {user ?
           (<div className="user">
             <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
             <span>John</span>
             <Link to ="/profile" className="profile">
               <div className="notification">
                 <span> Profile</span> 
               </div>
              </Link>
             </div>)  :
           
           (<><a href="/">Sign in</a>
            <a href="/" className="register">
               sign up
            </a>
            </>
            )}
            <div className ="menuIcon">
               <img src="/menu.png" alt=""
                onClick={()=>setOpen((prev)=>!prev)} 
                />
            </div>
           <div className= {open ? "menu active ": "menu"}>
           <a href="/"> Home</a>
            <a href="/"> About</a>
            <a href="/"> Contacts</a>
            <a href="/"> Agents</a>
            <a href="/"> sign in</a>
            <a href="/"> sign up</a>



           </div>
          </div>
      </nav>
   );
}

export default Navbar;