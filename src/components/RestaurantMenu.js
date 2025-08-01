// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo)
  // useEffect(() => {
  //   fetchMenu();
  //   console.log(resInfo)
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL +
  //     resId
  //   );
  //   const json = await data.json();
  //   console.log(json.data);
  //   setResInfo(json.data);
  // };

  console.log(resInfo," ye is RESINFO")
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h3>
        {cuisines} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default RestaurantMenu;
