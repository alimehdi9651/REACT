import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.card?.card?.info;
  return (
    <div className="p-4 ml-4 mt-2 w-[200px] h-[400px] rounded-lg text-sm bg-gray-200 hover:bg-gray-300">
      <img
        className="rounded-lg h-[150px] w-[200px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} STAR</h4>
      <h4>{deliveryTime} MIN</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};
export const withPromotedLable = () => {
  return(props) => {
    return (
      <div>
        <label className="absolute ml-4 rounded-sm p-0.5 text-[14px] mt-0.5 bg-black text-white"> Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
