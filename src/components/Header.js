import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () =>{
  
  const [btnName, setBtnName] = useState("Login");
  
  return (
    <div className="header">
      
      <div className="logo-container">
       <img className="logo" alt="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
           <li className="home">
            <Link to="/"> Home </Link>
           </li>
           <li className="aboutus">
            <Link to="/about"> About Us </Link>
           </li>
           <li className="contactus">
            <Link to="/contact"> Contact Us </Link>
           </li>
           <li className="cart">Cart</li>
           <button className="login" onClick={ () => 
           { btnName === "Login"? setBtnName("Logout") : setBtnName("Login") }
            }>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;