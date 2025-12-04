import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () =>{
  const [searchText, setSearchText]= useState("");
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect( ()=>{
   fetchData();
  },
  []);
  
  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4717161&lng=77.5080772&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
   //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  };
  
  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }
  
  return (
    <div className="body">
     <div className="filter">
      <div className="search">
        
        <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
        
        <button className="search-btn"
        onClick={()=>{
          //filtering the restaurant card and update the UI
          const filteredRestaurants=listOfRestaurants.filter((res)=>{
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
            <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
           ))
         }
        </div>
      </div>
    
  );
};

export default Body;
