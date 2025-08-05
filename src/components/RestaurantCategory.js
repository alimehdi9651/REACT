import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, showItems , setShowIndex }) => {

  const handlerClick = () => {
    setShowIndex()
  }
  return (
    <div>
      <div className="w-6/12  p-2 bg-gray-100 shadow-lg mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handlerClick}>
          <span className="font-medium text-sm">
            {data.title}({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showItems && <ItemCards  items = {data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
