import "./navbar.scss"



function Navbar(){

    
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

            <a href="/">Sign in</a>
            <a href="/" className="register">sign up
            </a>
            <div className ="menuIcon">
               <img src="/menu.png" alt="/" />
            </div>
           <div className="menu">
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