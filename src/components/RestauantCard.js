import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } =
      resData?.card?.card?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} STAR</h4>
        <h4>{deliveryTime} MIN</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
      </div>
    );
  };

export default RestaurantCard