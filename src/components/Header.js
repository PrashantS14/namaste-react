import {LOGO_URL} from "../utils/constants";

const Header = () =>{
  return (
    <div className="header">
      
      <div className="logo-container">
       <img className="logo" alt="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
           <li className="home">Home</li>
           <li className="aboutus">About Us</li>
           <li className="contactus">Contact Us</li>
           <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;