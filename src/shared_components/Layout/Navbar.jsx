import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
    <div className="navbar ">
      <Link to="/online" className=" isystem">
        i<span className="system">system</span>
         <h1 className="academy">IT academy</h1> 
      </Link>
      <Link to="/" className="online">
        Online
      </Link>
      <ul
        className={Mobile ? "nav-links-mobile " : "nav-links"}
        onClick={() => setMobile(false)}
      >
        
        <li className={Mobile ? "" : "hide"} >
          <Link to="/bizhaqimizda">Biz haqimizda</Link> 
        </li>
        <li><Link to="/bog'lanish">Bog'lanish</Link></li>
        <li><Link to="/kirish">Kirish</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </div>

     <div className="second">
    <Link to="/online" className=" isystem">
      i<span className="system">system</span>
       <h1 className="academy">IT academy</h1> 
    </Link>
    <Link to="/" className={Mobile ? "hidden" : "hide online"}>
      Online
    </Link>
    <ul
      className={Mobile ? "nav-links-mobile " : "nav-links "}
      onClick={() => setMobile(false)}
    >
      
      <li className={Mobile ? "" : "hide"} >
        <Link to="/bizhaqimizda">Biz haqimizda</Link> 
      </li>
      <li className={Mobile ? "" : "hide"}><Link to="/bog'lanish">Bog'lanish</Link></li>
      <li><Link to="/kirish" className={Mobile ? "hidden" : ""}>Kirish</Link></li>
      <li><Link to="/"   className={Mobile ? "ONLINE" : "hidden"}>
      Online
    </Link></li>
    </ul>
    <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
      {Mobile ? <ImCross /> : <FaBars />}
    </button>
  </div> 
  </>
  );
}

export default Navbar;
