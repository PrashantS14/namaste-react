import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 

const Header = () =>{
  
  const onlineStatus = useOnlineStatus();
  
  const [btnName, setBtnName] = useState("Login");
  
  return (
    <div className="header">
      
      <div className="logo-container">
       <img className="logo" alt="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li>
            Status : {onlineStatus ? "✅ online" : "🔴 offline"}
          </li>
           <li className="home">
            <Link to="/"> Home </Link>
           </li>
           <li className="aboutus">
            <Link to="/about"> About Us </Link>
           </li>
           <li className="contactus">
            <Link to="/contact"> Contact Us </Link>
           </li>
            <li className="grocery">
            <Link to="/grocery"> Grocery </Link>
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