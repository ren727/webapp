import { FaBars } from "react-icons/fa"
import Logo from "./Logo"



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
     <div className="container">
      
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nvbarSupportedContent" aria-controls="nvbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars color="white"/>
       </button>
     <Logo />
     <div className="collapse navbar-collapse" id="nvbarSupportedContent">
       <div className="navbar-nav">
         <a className="nav-link active" aria-current="page" href="#">Home</a>
         <a className="nav-link" href="#">Features</a>
         <a className="nav-link" href="#">Pricing</a>
         <a className="nav-link" aria-disabled="true">Disabled</a>
    
      </div>
    </div>
    <div className="d-flex" role="search">
       <button className="btn btn-sml btn-outline-light">
           Login
       </button>
       <button className="btn btn-sml btn-outline-light mx-1">
           Logout
       </button>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar