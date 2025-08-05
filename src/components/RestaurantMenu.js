// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
// import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
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
  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );



  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      {}
      {categories.map((category, index) => (
        // Controlled conponent (RestaurantCategory) because we are passing the value showItems to RestaurantCategory 
        // and controlling its state   
        <div key={category?.card?.card?.categoryId}>
          
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}
          />
        </div>
      ))}
      
    </div>
  );
};

export default RestaurantMenu;
