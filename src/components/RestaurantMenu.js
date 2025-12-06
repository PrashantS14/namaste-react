import {useEffect} from "react";

const RestaurantMenu = () => {
  
useEffect(()=>{
  fetchMenu();
},[]);

const fetchMenu = async () => {
  const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4713887&lng=77.5074813&restaurantId=78041&catalog_qa=undefined&submitAction=ENTER");

  const json = await data.json();
  
  console.log(json);


}
  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h2>Menu
        <ul>
          <li>Biriani</li>
          <li>Dosa</li>
        </ul>
      </h2>
    </div>
  );
};
export default RestaurantMenu;