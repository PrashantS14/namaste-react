import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";

const Header = () =>{
  
  const onlineStatus = useOnlineStatus();
  
  const [btnName, setBtnName] = useState("Login");

  const {loggedInUser } = useContext(UserContext); //doing destructure because the data comes in                      form of object so to extract normally we have to use: data.loggedInUser
  
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      
      <div className="logo-container">
       <img className="w-56 " alt="logo" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-10 m-10 items-center">
          <li className="px-4 ">
            Status : {onlineStatus ? "✅ online" : "🔴 offline"}
          </li>
           <li className="px-4 text-blue-500    ">
            <Link to="/"> Home </Link>
           </li>
           <li className="px-4 text-blue-500">
            <Link to="/about"> About</Link>
           </li>
           <li className="px-4 text-blue-500">
            <Link to="/contact"> Contact </Link>
           </li>
            <li className="px-4 text-blue-500">
            <Link to="/grocery"> Grocery </Link>
           </li>
           <li className="px-4 text-blue-500">Cart</li>
           
           <li className="px-4">
            <button className=" bg-green-200  rounded-lg px-4 py-2 flex items-center justify-center " onClick={ () => 
           { btnName === "Login"? setBtnName("Logout") : setBtnName("Login") }
            }>{btnName}</button>
           </li>
        
        <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;