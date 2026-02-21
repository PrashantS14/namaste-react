import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { resList } from "../utils/mockData"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
  
  const [searchText, setSearchText]= useState("");
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect( ()=>{
   fetchData();
  },
  []);
  
  const fetchData = async ()=>{
   
   const restaurantList =  resList?.[0]?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList); 
  };
  
  
  const onlineStatus = useOnlineStatus();

  if(onlineStatus ===  false)
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connectivity.
      </h1>
    );
  
  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }

  
  return (
    <div className="body">
     <div className="filter">
      
      <div className="search">
        <input type="text" value={searchText} placeholder="Search Restaurants..."
        onChange={(e)=>{setSearchText(e.target.value)}} />
        
        <button className="search-btn"
        onClick={()=>{
          //filtering the restaurant card and update the UI
          
          const filteredRestaurants=listOfRestaurants.filter((res)=>{ //list of restaurant will always has the original data intact with it 
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setFilteredRestaurants(filteredRestaurants);
        }}
        >Search
        </button>
      
      </div>
      
      <button className="filter-btn"
      onClick={()=>{
        const filteredList = listOfRestaurants.filter((res)=>
          res.info.avgRating > 4.4 )
        setFilteredRestaurants(filteredList);
      }}
      >
       Top Rated Restaurants
      </button>
     </div>

      <div className="res-container">
         {
           filteredRestaurants.map((restaurant)=>(
            
            <Link 
            to={`/restaurants/${restaurant.info.id}`}  // Dynamic routing working now
            key={restaurant.info.id} >
            <RestaurantCard resData={restaurant} />
          
          </Link>

           ))
         }
        </div>
      </div>
    
  );
};

export default Body;

