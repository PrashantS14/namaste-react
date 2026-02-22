import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
  const {resData} = props;
  const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info ;
  
  return (
 <div className="m-4 p-4 w-[280] rounded-lg shadow bg-gray-100 hover:bg-gray-300 hover:shadow-2xl" >
   <img className="rounded-lg" 
   alt="res-logo" 
   src={
        CDN_URL+ cloudinaryImageId
       } />
   <h3 className="font-bold py-2 text-lg">{name}</h3>
   <h4 className="font-semibold py-2">{cuisines.join(", ")}</h4>
   <h4 className="font-semibold py-2">{avgRating} stars</h4>
   <h4 className="font-semibold py-2">{costForTwo}</h4>
   { <h4 className="font-semibold py-2">{sla.slaString}</h4> /* for deliveryTime  */}
 </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white m-2 p-2 rounded-lg ">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;