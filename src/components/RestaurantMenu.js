import { useParams } from "react-router-dom";
import { menuData } from "../utils/mockMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  

  // Restaurant Details
  const restaurantInfo =
    menuData?.data?.cards?.[2]?.card?.card?.info || {};

  // Menu items from all categories
  const menuCards =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCategories = menuCards
    .map((c) => c.card?.card)
    .filter((c) => c?.itemCards);

  return (
    <div className="menu">
      <h1>{restaurantInfo.name}</h1>
      <h3>{restaurantInfo.cuisines?.join(", ")}</h3>
      <h4>{restaurantInfo.costForTwoMessage}</h4>

      <hr />

      {itemCategories.map((category) => (
        <div key={category.title} className="menu-category">
          <h2>🍽 {category.title}</h2>

          <ul>
            {category.itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} — ₹{item.card.info.price / 100}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
