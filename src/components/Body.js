import RestaurantCard from "./RestauantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //local state variable = supwe powerful variable
  //if you want to modify this listofresaurant then we have to pass the function as well
  // whatever modification we want in the list we have to pass inside the function as argument
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  //defination:************** whenever state variable updates react triggers a reconciliation cycle or rerender the component again****************
  //normal js variable
  console.log("body render");
  const [searchText, setSearchText] = useState("");

  //useEffect(): Another State variable that will run after the whole body render
  //it will take two argument one is the array and second is the array
  useEffect(() => {
    //whatever we write in the body this will run after the complete body runs and web page render
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.86474977468873&lng=80.90554151684046&str=Restaurants%20near%20me&trackingId=bb6c58f7-2b4b-cd16-7aea-130e24913aee&submitAction=ENTER&queryUniqueId=6f70ce15-9b37-12d1-5d20-896ef790e8d3"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      //Optional Channing
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredList(
      //Optional Channing
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    const d = json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
    console.log(d);
  };

  //Conditional Renderig
  // if (listOfRestaurants.length == 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter restaurants and update UI
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(res.card.card.info.name)

              setFilteredList(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered_list = filteredList.filter(
              (res) => res.card.card.info.avgRating >= 4.5
            );
            setFilteredList(filtered_list);
            // console.log(listOfRestaurants);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
