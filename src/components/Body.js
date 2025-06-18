import RestaurantCard from "./RestauantCard";
import resList from "../utils/mockData";
import {useState } from "react";
const Body = () => {
  //state variable
  //if you want to modify this listofresaurant then we have to pass the function as well
  // whatever modification we want in the list we have to pass inside the function as argument
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  //normal js variable
  let listOfRestaurantsJS = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "78675",
            name: "Raj Luxmi Restaurant",
            city: "15",

            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/9/da5e90cd-9a84-4c34-b000-9b957f8c324a_78675.jpg",
            costForTwo: "30000",
            costForTwoMessage: "₹300 FOR TWO",
            cuisines: ["Indian", "South Indian", "Chinese", "Thalis"],
            avgRating: 2,
            avgRatingString: "2.0",
            deliveryTime: 33,
          
          },
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "78676",
            name: "KFC",
            city: "15",

            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/9/da5e90cd-9a84-4c34-b000-9b957f8c324a_78675.jpg",
            costForTwo: "30000",
            costForTwoMessage: "₹300 FOR TWO",
            cuisines: ["Indian", "South Indian", "Chinese", "Thalis"],
            avgRating: 4.5,
            avgRatingString: "3.5",
            deliveryTime: 33,
          
          },
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "78677",
            name: "MCD",
            city: "15",

            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/9/da5e90cd-9a84-4c34-b000-9b957f8c324a_78675.jpg",
            costForTwo: "30000",
            costForTwoMessage: "₹300 FOR TWO",
            cuisines: ["Indian", "South Indian", "Chinese", "Thalis"],
            avgRating: 4.1,
            avgRatingString: "4.1",
            deliveryTime: 33,
          
          },
        },
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            const filtered_list= listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurant(filtered_list)
            console.log(listOfRestaurants)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
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
