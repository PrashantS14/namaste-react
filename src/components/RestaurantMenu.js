import { useParams } from "react-router-dom";
import { menuData } from "../utils/mockMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = menuData[resId];

  if (!restaurant) {
    return <h1>Restaurant Not Found</h1>;
  }

  return (
    <div className="menu">
      
      <h1>{restaurant.info.name}</h1>
      <h3>{restaurant.info.cuisines.join(", ")}</h3>
      <h4>{restaurant.info.costForTwo}</h4>

      <hr />

      {restaurant.categories.map((category) => (
        <div key={category.title} className="menu-category">
          <h2>🍽 {category.title}</h2>

          <ul>
            {category.items.map((item) => (
              <li key={item.id}>
                {item.name} — ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
