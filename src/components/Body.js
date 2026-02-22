import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { resList } from "../utils/mockData"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
  
  const [searchText, setSearchText]= useState("");
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
     <div className="filter flex">
      
      <div className="search p-4 m-4 flex items-center gap-5">
        <input type="text" className="border border-blue-200 rounded-md px-2 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300" 
        value={searchText} 
        placeholder="Search Restaurants..."
        onChange={(e)=>{setSearchText(e.target.value)}} />
        
        <button className="px-4 py-2 bg-cyan-100 rounded-lg hover:bg-cyan-300"
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
      
     <div className="p-4 m-4 flex items-center">
       <button className=" px-4 py-2 bg-green-100 rounded-lg hover:bg-green-300"
      onClick={()=>{
        const filteredList = listOfRestaurants.filter((res)=>
          res.info.avgRating > 4.4 )
        setFilteredRestaurants(filteredList);
      }}
      >
       Top Rated Restaurants
      </button>
     </div>
     </div>

      <div className="flex flex-wrap">
         {
           filteredRestaurants.map((restaurant)=>(
            
            <Link 
            to={`/restaurants/${restaurant.info.id}`}  // Dynamic routing working now
            key={restaurant.info.id} >

              {
                restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant}/>) : 
                (
                <RestaurantCard resData={restaurant} />
              )
              }
           
          
          </Link>

           ))
         }
        </div>
      </div>
    
  );
};

export default Body;

