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
      
      <h1 className="m-2 p-2 font-bold text-3xl shadow">{restaurant.info.name}</h1>
      <h3 className="m-2 p-2 font-bold text-xl" >{restaurant.info.cuisines.join(", ")}</h3>
      <h4 className="m-2 p-2 font-bold ">{restaurant.info.costForTwo}</h4>

      <hr />

      {restaurant.categories.map((category) => (
        <div key={category.title} >
          <h2 className="m-2 font-bold text-xl">🍽 {category.title}</h2>

          <ul >
            {category.items.map((item) => (
              <li className="mx-10 p-2 " key={item.id}>
                {item.name} — ₹{item.price}
                <button className="border bg-blue-300 rounded-md p-1">Add +</button> {/*added*/}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
